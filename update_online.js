const fs = require('fs');

const playerPath = './src/app/pages/game/vs-player/vs-player.component.ts';
const cpuPath = './src/app/pages/game/vs-cpu/vs-cpu.component.ts';

const playerCode = fs.readFileSync(playerPath, 'utf8');
const cpuCode = fs.readFileSync(cpuPath, 'utf8');

// 1. EXTRACT TEMPLATE & STYLES FROM VS-CPU
const cpuTemplateStart = cpuCode.indexOf('template: `') + 11;
const cpuTemplateEnd = cpuCode.indexOf('`,\n  styles: [');
let cpuTemplate = cpuCode.substring(cpuTemplateStart, cpuTemplateEnd);

const cpuStylesStart = cpuCode.indexOf('styles: [`') + 10;
const cpuStylesEnd = cpuCode.lastIndexOf('`]');
let cpuStyles = cpuCode.substring(cpuStylesStart, cpuStylesEnd);

// 2. EXTRACT PRE-GAME UI FROM VS-PLAYER
const playerTemplateStart = playerCode.indexOf('template: `') + 11;
const playerGameStart = playerCode.indexOf('<!-- Game Board (Online) -->');
let preGameUI = playerCode.substring(playerTemplateStart, playerGameStart);

// 3. ADAPT CPU TEMPLATE TO PLAYER
cpuTemplate = cpuTemplate.replace(/<!-- Game Board \(Local\) -->/g, '<!-- Game Board (Online) -->');
cpuTemplate = cpuTemplate.replace(/gameState\.player1/g, 'getMe()');
cpuTemplate = cpuTemplate.replace(/gameState\.player2/g, 'getOpponent()');
cpuTemplate = cpuTemplate.replace(/<button \(click\)="surrender\(\)" class="btn-action btn-danger">Rendirse<\/button>/g, '<button (click)="surrender()" class="btn-action" style="background: var(--pk-red); color: white;">Rendirse</button>');
// Remove cpu-specific loading screen and tutorial
cpuTemplate = cpuTemplate.replace(/<div \*ngIf="!gameState" class="loading-screen">[\s\S]*?<\/div>/, '');
cpuTemplate = cpuTemplate.replace(/<!-- Tutorial Guide -->[\s\S]*?<\/div>\s*<\/div>/, '');

const cpuGameBoardStart = cpuTemplate.indexOf('<!-- Game Board (Online) -->');
cpuTemplate = cpuTemplate.substring(cpuGameBoardStart);

let newTemplate = preGameUI + '\n    ' + cpuTemplate;

// 4. ADAPT COMPONENT LOGIC
const classStartIndex = playerCode.indexOf('export class VsPlayerComponent');
let classLogic = playerCode.substring(classStartIndex);

// Add AudioService to constructor
classLogic = classLogic.replace(/private router: Router/, 'private router: Router,\n    public audioService: AudioService');

// Add Missing Variables
const varsToAdd = `
  hoveredCard: any | null = null;
  selectedExtraDeckIndex: number | null = null;
  toastMessage = '';
  toastTimeout: any;
  playerAnimations: string[] = ['', '', '', '', ''];
  opponentAnimations: string[] = ['', '', '', '', ''];
  isSelectingTarget = false;
  selectedAttackerIndex: number | null = null;
`;
classLogic = classLogic.replace(/(export class VsPlayerComponent[^{]*{)/, '$1' + varsToAdd);

// Add Missing Methods
const methodsToAdd = `
  onCardHover(card: any) { this.hoveredCard = card; }
  onCardLeave() { this.hoveredCard = null; }

  showToast(msg: string) {
    this.toastMessage = msg;
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => this.toastMessage = '', 3000);
  }

  async selectExtraDeckCard(index: number): Promise<void> {
    if (!this.isMyTurn() || this.gameState?.phase !== 'main') {
      this.showToast('Solo puedes evolucionar en tu Fase Principal');
      return;
    }
    this.selectedExtraDeckIndex = index;
    this.showToast('Selecciona un Pokémon en el campo para evolucionarlo');
  }

  async discardCardFromField(index: number): Promise<void> {
    if (this.isMyTurn() && this.gameState?.phase === 'main') {
      const fieldCard = this.getMe().field[index];
      if (fieldCard) {
         this.getMe().field[index] = null as any;
         if (!this.getMe().graveyard) this.getMe().graveyard = [];
         this.getMe().graveyard.push(fieldCard);
         this.showToast(\`\${fieldCard.name} fue descartado del campo.\`);
         await this.syncState();
      }
    }
  }

  translateType(type: string): string {
    const types: { [key: string]: string } = {
      fire: 'Fuego', water: 'Agua', grass: 'Planta',
      electric: 'Eléctrico', psychic: 'Psíquico', normal: 'Normal',
      dark: 'Siniestro', dragon: 'Dragón', fairy: 'Hada',
      fighting: 'Lucha', flying: 'Volador', ghost: 'Fantasma',
      ground: 'Tierra', ice: 'Hielo', poison: 'Veneno',
      rock: 'Roca', steel: 'Acero', bug: 'Bicho'
    };
    return types[type] || type;
  }

  translateAbilityName(name?: string): string { return name || 'Ninguna'; }
  translateAbilityDesc(desc?: string): string { return desc || 'Este Pokémon no tiene habilidades especiales.'; }

  activateSpellTrap(index: number) {
    if (this.isMyTurn() && this.gameState?.phase === 'main') {
      const msg = this.gameService.activateSpellTrap(this.gameState, index, this.myPlayerKey === 'player1');
      if (msg) {
         this.showToast(msg);
         this.syncState();
      }
    }
  }

  leaveGameManually() { this.endGame(); }

  async drawPhase(): Promise<void> {
    if (this.isMyTurn() && this.gameState) {
      this.gameService.drawCard(this.gameState, this.myPlayerKey === 'player1');
      await this.syncState();
    }
  }

  async playPhase(): Promise<void> {
    if (this.isMyTurn() && this.gameState) {
      this.gameService.endTurn(this.gameState);
      await this.syncState();
    }
  }

  async discardCardFromHand(index: number): Promise<void> {
    if (this.isMyTurn() && this.gameState?.phase === 'main') {
      this.gameService.discardCard(this.gameState, this.myPlayerKey === 'player1', index);
      await this.syncState();
    }
  }

  async playCardFromHand(index: number): Promise<void> {
    if (this.isMyTurn() && this.gameState?.phase === 'main') {
      this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', index);
      await this.syncState();
    }
  }
`;

// We replace existing methods to avoid duplicates
classLogic = classLogic.replace(/async drawPhase\(\)[\s\S]*?syncState\(\);\s*}\s*}/g, ''); 
classLogic = classLogic.replace(/async selectFieldCard[\s\S]*?syncState\(\);\s*}\s*}\s*}/g, ''); 
classLogic = classLogic.replace(/async selectTarget\([\s\S]*?syncState\(\);\s*}/g, ''); 

const newSelects = `
  async selectFieldCard(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) return;

    if (this.selectedExtraDeckIndex !== null) {
       const evolutionCard = this.getMe().extraDeck[this.selectedExtraDeckIndex];
       const baseCard = this.getMe().field[index];
       
       if (baseCard) {
          this.gameService.evolvePokemon(this.gameState, this.myPlayerKey === 'player1', index, this.selectedExtraDeckIndex);
          this.audioService.playEvolutionSound();
          this.showToast(\`¡\${baseCard.name} evolucionó a \${evolutionCard.name}!\`);
          this.selectedExtraDeckIndex = null;
          await this.syncState();
       } else {
          this.showToast('Debe seleccionar un Pokémon válido para evolucionar.');
          this.selectedExtraDeckIndex = null;
       }
       return;
    }

    if (this.gameState.phase === 'main') {
      this.gameService.useAbility(this.gameState, index, this.myPlayerKey === 'player1');
      await this.syncState();
    } else if (this.gameState.phase === 'battle') {
      if (this.selectedAttackerIndex === index) {
        this.selectedAttackerIndex = null;
        this.isSelectingTarget = false;
      } else {
        this.selectedAttackerIndex = index;
        this.isSelectingTarget = true;
        
        const hasDefenders = this.getOpponent().field.some(c => !!c);
        if (!hasDefenders) {
          this.gameService.attack(this.gameState, this.selectedAttackerIndex, -1, this.myPlayerKey === 'player1');
          this.audioService.playDamageSound();
          this.selectedAttackerIndex = null;
          this.isSelectingTarget = false;
          await this.syncState();
        }
      }
    }
  }

  async selectTarget(index: number): Promise<void> {
    if (this.isSelectingTarget && this.selectedAttackerIndex !== null && this.gameState && this.isMyTurn()) {
      this.gameService.attack(this.gameState, this.selectedAttackerIndex, index, this.myPlayerKey === 'player1');
      this.audioService.playDamageSound();
      this.selectedAttackerIndex = null;
      this.isSelectingTarget = false;
      await this.syncState();
    }
  }
`;

classLogic = classLogic.replace(/(async endGame\(\): Promise<void> {)/, methodsToAdd + '\n' + newSelects + '\n  $1');

// Imports
let topCode = playerCode.substring(0, playerCode.indexOf('@Component'));
if (!topCode.includes('AudioService')) {
    topCode = topCode.replace(/import { PokemonService } from '\.\.\/\.\.\/\.\.\/core\/services\/pokemon\.service';/, "import { PokemonService } from '../../../core/services/pokemon.service';\nimport { AudioService } from '../../../core/services/audio.service';");
}

let finalFile = topCode + 
'@Component({\n  selector: \'app-vs-player\',\n  standalone: true,\n  imports: [CommonModule, FormsModule, RouterModule, NavbarComponent],\n  template: `\n' +
newTemplate + '\n  `,\n  styles: [`\n' + cpuStyles + '\n  `]\n})\n' + classLogic;

fs.writeFileSync(playerPath, finalFile);
console.log('Successfully generated vs-player.component.ts');

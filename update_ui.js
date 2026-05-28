const fs = require('fs');
const playerPath = './src/app/pages/game/vs-player/vs-player.component.ts';
const cpuPath = './src/app/pages/game/vs-cpu/vs-cpu.component.ts';

let playerCode = fs.readFileSync(playerPath, 'utf8');
let cpuCode = fs.readFileSync(cpuPath, 'utf8');

// Get CPU Game Board
const cpuGameStart = cpuCode.indexOf('<!-- Game Board (Local) -->');
const cpuGameEnd = cpuCode.indexOf('`,\n  styles: [');
let cpuGameBoard = cpuCode.substring(cpuGameStart, cpuGameEnd);

// Adapt CPU Game Board
cpuGameBoard = cpuGameBoard.replace(/<!-- Game Board \(Local\) -->/, '<!-- Game Board (Online) -->');
cpuGameBoard = cpuGameBoard.replace(/gameState\.player1/g, 'getMe()');
cpuGameBoard = cpuGameBoard.replace(/gameState\.player2/g, 'getOpponent()');
cpuGameBoard = cpuGameBoard.replace(/<button \(click\)="surrender\(\)" class="btn-action btn-danger">Rendirse<\/button>/g, '<button (click)="surrender()" class="btn-action" style="background: var(--pk-red); color: white;">Rendirse</button>');
cpuGameBoard = cpuGameBoard.replace(/<!-- Tutorial Guide -->[\s\S]*?<\/div>\s*<\/div>/g, '');

// Get Player Game Board
const playerGameStart = playerCode.indexOf('<!-- Game Board (Online) -->');
const playerGameEnd = playerCode.indexOf('`,\n  styles: [');

// Replace Game Board
playerCode = playerCode.substring(0, playerGameStart) + cpuGameBoard + playerCode.substring(playerGameEnd);

// Get CPU Styles
const cpuStylesStart = cpuCode.indexOf('styles: [`') + 10;
const cpuStylesEnd = cpuCode.lastIndexOf('`]');
const cpuStyles = cpuCode.substring(cpuStylesStart, cpuStylesEnd);

// Replace Player Styles
const playerStylesStart = playerCode.indexOf('styles: [`') + 10;
const playerStylesEnd = playerCode.lastIndexOf('`]');
playerCode = playerCode.substring(0, playerStylesStart) + cpuStyles + playerCode.substring(playerStylesEnd);

// Inject variables and methods
const methodsToAdd = `
  hoveredCard: any | null = null;
  selectedExtraDeckIndex: number | null = null;
  toastMessage = '';
  toastTimeout: any;
  playerAnimations: string[] = ['', '', '', '', ''];
  opponentAnimations: string[] = ['', '', '', '', ''];

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
`;

playerCode = playerCode.replace(/export class VsPlayerComponent implements OnInit, OnDestroy \{/, 'export class VsPlayerComponent implements OnInit, OnDestroy {' + methodsToAdd);

const selectFieldCode = `async selectFieldCard(index: number): Promise<void> {
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
  }`;

playerCode = playerCode.replace(/async selectFieldCard\(index: number\): Promise<void> \{[\s\S]*?\}\s*(?=async selectTarget)/, selectFieldCode + '\n  ');

playerCode = playerCode.replace(/import { PokemonService } from '\.\.\/\.\.\/\.\.\/core\/services\/pokemon\.service';/, "import { PokemonService } from '../../../core/services/pokemon.service';\nimport { AudioService } from '../../../core/services/audio.service';");

playerCode = playerCode.replace(/private router: Router[\r\n\s]*\)/, "private router: Router,\n    public audioService: AudioService\n  )");

fs.writeFileSync(playerPath, playerCode);
console.log('Update Complete!');

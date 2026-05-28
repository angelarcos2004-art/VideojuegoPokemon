const fs = require('fs');
const playerPath = './src/app/pages/game/vs-player/vs-player.component.ts';
let code = fs.readFileSync(playerPath, 'utf8');

const methodsToAdd = `
  hoveredCard: any | null = null;
  selectedExtraDeckIndex: number | null = null;
  toastMessage = '';
  toastTimeout: any;
  playerAnimations: string[] = ['', '', '', '', ''];
  cpuAnimations: string[] = ['', '', '', '', ''];

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
         this.getMe().field[index] = null;
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

if (!code.includes('onCardHover(card: any)')) {
  code = code.replace(/export class VsPlayerComponent implements OnInit, OnDestroy \{/, 'export class VsPlayerComponent implements OnInit, OnDestroy {' + methodsToAdd);
}

// Replace selectFieldCard
const selectFieldCardRegex = /async selectFieldCard\(index: number\): Promise<void> \{[\s\S]*?\}\s*(?=async selectTarget)/;
const selectFieldCode = `async selectFieldCard(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) return;

    if (this.selectedExtraDeckIndex !== null) {
       const evolutionCard = this.getMe().extraDeck[this.selectedExtraDeckIndex];
       const baseCard = this.getMe().field[index];
       
       if (baseCard) {
          this.gameService['evolvePokemon'](this.gameState, index, this.selectedExtraDeckIndex, this.myPlayerKey === 'player1');
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

code = code.replace(selectFieldCardRegex, selectFieldCode + '\n  ');

fs.writeFileSync(playerPath, code);
console.log('Methods and vars injected!');

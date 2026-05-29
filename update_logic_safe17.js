const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// The block to replace:
//   leaveGameManually() { this.endGame(); }
//   ...
//   isSelectedSpell() { return false; }

const replacement = `
  leaveGameManually() { this.endGame(); }
  openExtraDeck() { this.showExtraDeckModal = true; }
  closeExtraDeck() { this.showExtraDeckModal = false; }
  
  isEvolving = false;
  selectedExtraCardIndex: number | null = null;
  
  selectExtraCardToEvolve(index: number) { 
    this.showExtraDeckModal = false;
    this.isEvolving = true;
    this.selectedExtraCardIndex = index;
    this.showToast('Selecciona un Pokémon en tu campo para evolucionarlo.');
  }

  async activateSpell(index: number) {
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    const success = this.gameService.activateSpell(this.gameState, this.myPlayerKey === 'player1', index);
    if (success) {
      this.showToast('Carta mágica/trampa activada.');
      await this.syncState();
    }
  }

  async discardCardFromField(slotIndex: number, isSpellZone: boolean) {
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    this.gameService.discardCardFromField(this.gameState, this.myPlayerKey === 'player1', slotIndex, isSpellZone);
    this.showToast('Carta enviada al cementerio.');
    await this.syncState();
  }

  async discardCardFromHand(index: number) {
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    this.gameService.discardCard(this.gameState, this.myPlayerKey === 'player1', index);
    if (this.selectedHandCardIndex === index) this.selectedHandCardIndex = null;
    this.showToast('Carta descartada.');
    await this.syncState();
  }

  async placeCardInSlot(slot: number, isSpellZone: boolean) {
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null) return;
    
    const cardToPlay = this.getMe().hand[this.selectedHandCardIndex];
    if (!cardToPlay) return;

    const isSpell = cardToPlay.cardClass === 'magic' || cardToPlay.cardClass === 'trap';
    
    if (cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field') {
      this.showToast('Las cartas de Campo deben colocarse en la zona de Campo a la izquierda.');
      return;
    }

    if (isSpell !== isSpellZone) {
      this.showToast(isSpell ? 'Esta carta debe ir en la zona de magias y trampas.' : 'Esta carta debe ir en la zona de monstruos.');
      return;
    }
    
    const success = this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', this.selectedHandCardIndex, slot);
    if (success) {
      this.selectedHandCardIndex = null;
      if (isSpell) {
         this.showToast('Colocada boca abajo.');
      } else {
         this.playerAnimations[slot] = 'anim-summon';
         setTimeout(() => { this.playerAnimations[slot] = ''; this.cdr.detectChanges(); }, 600);
      }
      await this.syncState();
    }
  }

  async placeFieldCard() {
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null || !this.isSelectedFieldSpell()) {
       if (this.getMe().fieldCard) this.hoveredCard = this.getMe().fieldCard;
       return;
    }
    
    const success = this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', this.selectedHandCardIndex);
    if (success) {
      this.selectedHandCardIndex = null;
      this.showToast('¡Carta de Estadio activada globalmente!');
      await this.syncState();
    }
  }

  isSelectedFieldSpell(): boolean {
    if (!this.gameState || this.selectedHandCardIndex === null) return false;
    const cardToPlay = this.getMe().hand[this.selectedHandCardIndex];
    if (!cardToPlay) return false;
    return cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field';
  }

  isSelectedSpell(): boolean {
    if (!this.gameState || this.selectedHandCardIndex === null) return false;
    const cardToPlay = this.getMe().hand[this.selectedHandCardIndex];
    if (!cardToPlay) return false;
    if (cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field') return false;
    return cardToPlay.cardClass === 'magic' || cardToPlay.cardClass === 'trap';
  }

  showToastMsg(msg: string) {
    this.toastMessage = msg;
    this.showToast = true;
    setTimeout(() => { this.showToast = false; }, 3000);
    this.cdr.detectChanges();
  }

  showToast(msg: string) { this.showToastMsg(msg); }
`;

content = content.replace(
  /leaveGameManually\(\) \{ this\.endGame\(\); \}[\s\S]*?isSelectedSpell\(\) \{ return false; \}/,
  replacement
);

// We also need to fix playCardFromHand to set selectedHandCardIndex!
const playCardReplacement = `
  async playCardFromHand(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) {
      this.showToast('No es tu turno.');
      return;
    }
    if (this.gameState.phase !== 'main') {
      this.showToast('Sólo puedes seleccionar cartas en la Fase Principal.');
      return;
    }

    if (this.selectedHandCardIndex === index) {
      this.selectedHandCardIndex = null;
    } else {
      this.selectedHandCardIndex = index;
      this.showToast('Carta seleccionada. Haz clic en una zona vacía para colocarla.');
    }
    this.cdr.detectChanges();
  }
`;

content = content.replace(
  /async playCardFromHand\(index: number\): Promise<void> \{[\s\S]*?await this\.syncState\(\);\n    \}\n  \}/,
  playCardReplacement
);

// We need to add logic to selectFieldCard for evolving and healing!
const selectFieldCardReplacement = `
  async selectFieldCard(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) return;
    
    const card = this.getMe().field[index];

    if (this.isEvolving && this.selectedExtraCardIndex !== null) {
      const success = this.gameService.evolvePokemon(this.gameState, this.myPlayerKey === 'player1', index, this.selectedExtraCardIndex);
      if (success) {
        this.showToastMsg('¡Tu Pokémon ha evolucionado!');
        this.playerAnimations[index] = 'anim-summon';
        setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
        await this.syncState();
      } else {
        this.showToastMsg('No puedes evolucionar este Pokémon.');
      }
      this.isEvolving = false;
      this.selectedExtraCardIndex = null;
      this.cdr.detectChanges();
      return;
    }

    if (this.gameState.phase === 'main') {
      if (this.selectedHandCardIndex !== null) {
        const handCard = this.getMe().hand[this.selectedHandCardIndex];
        if (handCard && handCard.cardClass === 'magic' && handCard.magicEffect === 'heal') {
          const success = this.gameService.healPokemon(this.gameState, this.myPlayerKey === 'player1', index, this.selectedHandCardIndex);
          if (success) {
            this.showToastMsg('¡Pokémon curado!');
            this.selectedHandCardIndex = null;
            await this.syncState();
          } else {
            this.showToastMsg('No se puede curar este Pokémon.');
          }
          return;
        }
      }

      const success = this.gameService.useAbility(this.gameState, index, this.myPlayerKey === 'player1');
      if (success) {
         this.showToastMsg('¡Habilidad activada!');
         await this.syncState();
      }
    } else if (this.gameState.phase === 'battle') {
      if (this.selectedAttackerIndex === index) {
        this.selectedAttackerIndex = null;
        this.isSelectingTarget = false;
      } else {
        this.selectedAttackerIndex = index;
        this.isSelectingTarget = true;
        
        if (this.getOpponent().field.length === 0) {
          const success = this.gameService.attack(this.gameState, this.selectedAttackerIndex, -1, this.myPlayerKey === 'player1');
          if (success) {
             this.showToastMsg('¡Ataque directo!');
             this.selectedAttackerIndex = null;
             this.isSelectingTarget = false;
             await this.syncState();
          }
        }
      }
    }
  }
`;

content = content.replace(
  /async selectFieldCard\(index: number\): Promise<void> \{[\s\S]*?\}\n  \}/,
  selectFieldCardReplacement
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

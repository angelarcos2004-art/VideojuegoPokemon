import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { GameService } from '../../../core/services/game.service';
import { PokemonService } from '../../../core/services/pokemon.service';
import { AudioService } from '../../../core/services/audio.service';
import { GameState } from '../../../core/models/game-state.model';
import { Subject, takeUntil } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-vs-player',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './vs-player.component.html',
  styleUrls: ['./vs-player.component.css']
})
export class VsPlayerComponent implements OnInit, OnDestroy {
  gameState: GameState | null = null;
  currentUserId: string | null = null;
  currentUserName: string = 'Player';

  availableRooms: any[] = [];
  selectedRoom: string | null = null;

  myPlayerKey: 'player1' | 'player2' | null = null;
  opponentPlayerKey: 'player1' | 'player2' | null = null;

  errorMessage: string = '';

  selectedAttackerIndex: number | null = null;
  isSelectingTarget = false;

  private destroy$ = new Subject<void>();
  private roomSubscription: any;
  private gameSubscription: any;

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService,
    private gameService: GameService,
    private pokemonService: PokemonService,
    private audioService: AudioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.audioService.playBattleMusic();
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(async user => {
        if (user) {
          this.currentUserId = user.id;
          try {
            const profile = await this.supabaseService.getProfile(user.id);
            this.currentUserName = profile.username || 'Player';
          } catch (e) { }
        }
      });
    this.loadAvailableRooms();
  }

  ngOnDestroy() {
    this.cancelRoom();
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadAvailableRooms(): Promise<void> {
    try {
      const rooms = await this.supabaseService.getAvailableRooms();
      this.availableRooms = rooms;
      this.cdr.detectChanges();
    } catch (error) {
      console.error(error);
    }
  }

  getShortId(id: string): string {
    return id ? id.substring(0, 8).toUpperCase() : '';
  }

  async createRoom(): Promise<void> {
    try {
      if (!this.currentUserId) {
        this.errorMessage = 'Usuario no autenticado';
        return;
      }
      const room = await this.supabaseService.createGameRoom(this.currentUserId);
      this.selectedRoom = room.id;
      this.myPlayerKey = 'player1';
      this.opponentPlayerKey = 'player2';

      this.listenToRoom(room.id);
      this.cdr.detectChanges();
    } catch (error: any) {
      this.errorMessage = 'Falló al crear la sala: ' + (error.message || JSON.stringify(error));
    }
  }

  async joinRoom(roomId: string): Promise<void> {
    try {
      if (!this.currentUserId) {
        this.errorMessage = 'Usuario no autenticado';
        return;
      }
      await this.supabaseService.joinGameRoom(roomId, this.currentUserId);
      this.selectedRoom = roomId;
      this.myPlayerKey = 'player2';
      this.opponentPlayerKey = 'player1';

      this.listenToGameState(roomId);
      this.cdr.detectChanges();
    } catch (error: any) {
      this.errorMessage = 'Falló al unirse: ' + (error.message || JSON.stringify(error));
    }
  }

  async cancelRoom(): Promise<void> {
    if (this.selectedRoom && !this.gameState && this.myPlayerKey === 'player1') {
      try {
        await this.supabaseService.deleteGameRoom(this.selectedRoom);
      } catch (e) { }
    }

    // Si el juego está activo y nos salimos, le damos la victoria al oponente.
    if (this.gameState && !this.gameState.winner) {
      this.gameState.winner = (this.myPlayerKey === 'player1') ? 'player2' : 'player1';
      this.endGame();
    }

    this.selectedRoom = null;
    this.errorMessage = '';
    if (this.roomSubscription) {
      this.roomSubscription.unsubscribe();
      this.roomSubscription = null;
    }
    if (this.gameSubscription) {
      this.gameSubscription.unsubscribe();
      this.gameSubscription = null;
    }
    this.cdr.detectChanges();
  }

  private listenToRoom(roomId: string) {
    this.roomSubscription = this.supabaseService.subscribeToRoomStatus(roomId, (room) => {
      this.ngZone.run(async () => {
        if (room.status === 'active' && room.player2_id && !this.gameState) {
          await this.initializeOnlineGame(roomId, room.player2_id);
          this.cdr.detectChanges();
        }
      });
    });

    const pollInterval = setInterval(async () => {
      if (this.gameState || this.selectedRoom !== roomId) {
        clearInterval(pollInterval);
        return;
      }
      try {
        const { data } = await this.supabaseService['supabase'].from('game_rooms').select('*').eq('id', roomId).single();
        if (data && data.status === 'active' && data.player2_id && !this.gameState) {
          this.ngZone.run(async () => {
            clearInterval(pollInterval);
            await this.initializeOnlineGame(roomId, data.player2_id);
            this.cdr.detectChanges();
          });
        }
      } catch (e) { }
    }, 3000);
  }

  private listenToGameState(roomId: string) {
    this.gameSubscription = this.supabaseService.subscribeToGameState(roomId, (state) => {
      this.ngZone.run(() => {
        this.applyNewGameState(state);
      });
    });

    // Try fetch existing in case we missed event
    this.supabaseService.getGameState(roomId).then(state => {
      if (state) {
        this.ngZone.run(() => {
           this.applyNewGameState(state);
        });
      }
    }).catch(e => console.error("Initial Fetch Error:", e));

    const pollInterval = setInterval(() => {
      if (this.selectedRoom !== roomId) {
        clearInterval(pollInterval);
        return;
      }
      this.supabaseService.getGameState(roomId).then(state => {
        if (state) {
          this.debugStatus = 'GameState fetched via Poll';
          this.ngZone.run(() => {
            const changed = !this.gameState || JSON.stringify(this.gameState) !== JSON.stringify(state);
            if (changed) {
               this.debugStatus = 'GameState applied';
               this.applyNewGameState(state);
            }
          });
        } else {
          this.debugStatus = 'Polling: no state found';
          this.cdr.detectChanges();
        }
      }).catch(e => {
        this.debugStatus = 'Poll error: ' + (e.message || 'unknown');
        console.error("Poll Error:", e);
      });
    }, 2000);
  }

  private applyNewGameState(state: any) {
    if (!this.gameState || JSON.stringify(this.gameState) !== JSON.stringify(state)) {
       let delayUpdate = false;
       if (this.gameState && this.myPlayerKey) {
          const p1Key = this.myPlayerKey === 'player1' ? 'player1' : 'player2';
          const p2Key = this.myPlayerKey === 'player1' ? 'player2' : 'player1';
          
          for (let i = 0; i < 5; i++) {
             if (this.gameState[p1Key]?.field[i] && !state[p1Key]?.field[i]) {
                this.playerAnimations[i] = 'anim-die';
                this.audioService.playDamageSound();
                delayUpdate = true;
             }
             if (this.gameState[p2Key]?.field[i] && !state[p2Key]?.field[i]) {
                this.opponentAnimations[i] = 'anim-die';
                this.audioService.playDamageSound();
                delayUpdate = true;
             }
          }
          
          this.checkAndPlayAnimations(this.gameState, state);
       }
       
       if (delayUpdate) {
          this.cdr.detectChanges();
          setTimeout(() => {
             this.playerAnimations = ['', '', '', '', ''];
             this.opponentAnimations = ['', '', '', '', ''];
             this.gameState = state;
             this.cdr.detectChanges();
             if (this.gameState?.winner && !this.showGameOver) {
                this.handleGameOver();
             }
          }, 500);
       } else {
          this.gameState = state;
          this.cdr.detectChanges();
          if (this.gameState?.winner && !this.showGameOver) {
             this.handleGameOver();
          }
       }
    }
  }

  private checkAndPlayAnimations(oldState: any, newState: any) {
     const p1Key = this.myPlayerKey === 'player1' ? 'player1' : 'player2';
     const p2Key = this.myPlayerKey === 'player1' ? 'player2' : 'player1';
     let playedDamageSound = false;
     let playedHealSound = false;

     if (newState.lastAttack && (!oldState.lastAttack || newState.lastAttack.timestamp !== oldState.lastAttack.timestamp)) {
        if (newState.lastAttack.attackerId === p2Key) {
           this.opponentAnimations[newState.lastAttack.attackerIndex] = 'anim-attack-down';
           setTimeout(() => { this.opponentAnimations[newState.lastAttack.attackerIndex] = ''; this.cdr.detectChanges(); }, 600);
           
           if (newState.lastAttack.targetIndex >= 0) {
              this.playerAnimations[newState.lastAttack.targetIndex] = 'anim-damage';
              if (!playedDamageSound) { this.audioService.playDamageSound(); playedDamageSound = true; }
              setTimeout(() => { this.playerAnimations[newState.lastAttack.targetIndex] = ''; this.cdr.detectChanges(); }, 600);
           }
        }
     }

     for (let i = 0; i < 5; i++) {
        const oldMy = oldState[p1Key]?.field[i];
        const newMy = newState[p1Key]?.field[i];
        if (oldMy && newMy && newMy.hp < oldMy.hp) {
           this.playerAnimations[i] = 'anim-damage';
           if (!playedDamageSound) { this.audioService.playDamageSound(); playedDamageSound = true; }
           setTimeout(() => { this.playerAnimations[i] = ''; this.cdr.detectChanges(); }, 600);
        }
        if (oldMy && newMy && newMy.hp > oldMy.hp) {
           this.playerAnimations[i] = 'anim-summon';
           if (!playedHealSound) { this.audioService.playHealSound(); playedHealSound = true; }
           setTimeout(() => { this.playerAnimations[i] = ''; this.cdr.detectChanges(); }, 600);
        }

        const oldOp = oldState[p2Key]?.field[i];
        const newOp = newState[p2Key]?.field[i];
        if (oldOp && newOp && newOp.hp < oldOp.hp) {
           this.opponentAnimations[i] = 'anim-damage';
           if (!playedDamageSound) { this.audioService.playDamageSound(); playedDamageSound = true; }
           setTimeout(() => { this.opponentAnimations[i] = ''; this.cdr.detectChanges(); }, 600);
        }
        if (oldOp && newOp && newOp.hp > oldOp.hp) {
           this.opponentAnimations[i] = 'anim-summon';
           if (!playedHealSound) { this.audioService.playHealSound(); playedHealSound = true; }
           setTimeout(() => { this.opponentAnimations[i] = ''; this.cdr.detectChanges(); }, 600);
        }
     }

     if (newState[p1Key]?.hp < oldState[p1Key]?.hp && !playedDamageSound) {
        this.audioService.playDamageSound();
        playedDamageSound = true;
     }
     if (newState[p2Key]?.hp < oldState[p2Key]?.hp && !playedDamageSound) {
        this.audioService.playDamageSound();
        playedDamageSound = true;
     }
  }


  private async initializeOnlineGame(roomId: string, player2Id: string) {
    try {
      const p1Decks = await this.supabaseService.getUserDecks(this.currentUserId!);

      if (p1Decks.length === 0) {
        this.errorMessage = '❌ No tienes mazos. Por favor, crea uno en el Constructor de Mazo.';
        this.router.navigate(['/cards/deck-builder']);
        return;
      }

      let p1ActiveDeck = p1Decks.find(d => d.is_active);
      if (!p1ActiveDeck) {
        await this.supabaseService.setActiveDeck(this.currentUserId!, p1Decks[0].id);
        p1ActiveDeck = p1Decks[0];
      }
      const p1Deck = p1ActiveDeck?.cards ? p1ActiveDeck.cards : await this.pokemonService.getRandomPokemons(20);

      const p2Decks = await this.supabaseService.getUserDecks(player2Id);

      let p2Deck;
      if (p2Decks.length === 0) {
        p2Deck = await this.pokemonService.getRandomPokemons(20);
      } else {
        let p2ActiveDeck = p2Decks.find(d => d.is_active) || p2Decks[0];
        p2Deck = p2ActiveDeck?.cards ? p2ActiveDeck.cards : await this.pokemonService.getRandomPokemons(20);
      }

      const p2Profile = await this.supabaseService.getProfile(player2Id);

      const state = this.gameService.initializeOnlineGame(
        this.currentUserId!, this.currentUserName, p1Deck,
        player2Id, p2Profile.username || 'Opponent', p2Deck, roomId
      );

      await this.supabaseService.updateGameState(roomId, state);
      this.gameState = state; // Asignación inmediata para evitar el retraso
      this.cdr.detectChanges();
      this.listenToGameState(roomId);
    } catch (e: any) {
      console.error(e);
      this.errorMessage = "Error init: " + (e.message || JSON.stringify(e));
      this.cdr.detectChanges();
    }
  }

  // --- Game Mechanics UI ---
  getMe() { return this.myPlayerKey === 'player1' ? this.gameState!.player1 : this.gameState!.player2; }
  getOpponent() { return this.opponentPlayerKey === 'player1' ? this.gameState!.player1 : this.gameState!.player2; }
  isMyTurn() { return this.gameState?.currentTurn === this.myPlayerKey; }

  getCurrentPhaseText(): string {
    const phases: { [key: string]: string } = { 'draw': 'Fase de Robo', 'main': 'Fase Principal', 'battle': 'Fase de Batalla', 'end': 'Fase de Término' };
    return this.gameState?.phase ? phases[this.gameState.phase] : 'Desconocido';
  }

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

  async playCardFromHand(index: number): Promise<void> {
    this.isEvolving = false;
    this.selectedExtraCardIndex = null;
    if (!this.gameState || !this.isMyTurn()) {
      this.showToastMsg('No es tu turno.');
      return;
    }
    if (this.gameState.phase !== 'main') {
      this.showToastMsg('Sólo puedes seleccionar cartas en la Fase Principal.');
      return;
    }

    if (this.selectedHandCardIndex === index) {
      this.selectedHandCardIndex = null;
    } else {
      this.selectedHandCardIndex = index;
      this.showToastMsg('Carta seleccionada. Haz clic en una zona vacía para colocarla.');
    }
    this.cdr.detectChanges();
  }

  async selectFieldCard(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) {
       if (this.isEvolving) this.cancelEvolution();
       return;
    }
    
    const card = this.getMe().field[index];

    if (this.isEvolving && this.selectedExtraCardIndex !== null) {
      const success = this.gameService.evolvePokemon(this.gameState, this.myPlayerKey === 'player1', index, this.selectedExtraCardIndex);
      if (success) {
        this.audioService.playEvolutionSound();
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

    if (this.selectedHandCardIndex !== null) {
      const handCard = this.getMe().hand[this.selectedHandCardIndex];
      if (handCard && handCard.cardClass === 'magic' && handCard.magicEffect === 'heal') {
         const success = this.gameService.applyTargetedMagic(this.gameState, this.myPlayerKey === 'player1', index, this.selectedHandCardIndex);
         if (success) {
           this.audioService.playHealSound();
           this.showToastMsg('¡Poción usada! Pokémon curado.');
           this.playerAnimations[index] = 'anim-summon';
           this.cdr.detectChanges();
           setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
           await this.syncState();
         } else {
           this.showToastMsg('No se pudo usar la carta mágica.');
         }
         this.selectedHandCardIndex = null;
         this.cdr.detectChanges();
         return;
      }
    }

    if (this.gameState.phase === 'main') {
      if (!card.hasUsedAbility) {
        this.gameService.useAbility(this.gameState, index, this.myPlayerKey === 'player1');
        this.playerAnimations[index] = 'anim-summon';
        this.cdr.detectChanges();
        this.showToastMsg('¡Habilidad activada!');
        setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
        await this.syncState();
      } else {
        this.showToastMsg('Este monstruo ya usó su habilidad este turno.');
      }
    } else if (this.gameState.phase === 'battle') {
      if (card.hasAttacked) {
        this.showToastMsg('Este monstruo ya atacó.');
        return;
      }

      if (this.selectedAttackerIndex === index) {
        this.selectedAttackerIndex = null;
        this.isSelectingTarget = false;
        this.showToastMsg('Ataque cancelado.');
      } else {
        this.selectedAttackerIndex = index;
        this.isSelectingTarget = true;
        
        const hasDefenders = this.getOpponent().field.some(c => !!c);
        if (!hasDefenders) {
          const success = this.gameService.attack(this.gameState, this.selectedAttackerIndex, -1, this.myPlayerKey === 'player1');
          if (!success.cancelled) {
             this.audioService.playDamageSound();
             this.showToastMsg('¡Ataque directo!');
             this.playerAnimations[index] = 'anim-attack-up';
             this.cdr.detectChanges();
             setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
             this.selectedAttackerIndex = null;
             this.isSelectingTarget = false;
             await this.syncState();
          } else {
             this.showToastMsg(success.trapMessage || 'Ataque falló o fue cancelado.');
          }
        }
      }
    }
  }

  async selectTarget(index: number): Promise<void> {
    this.isEvolving = false;
    if (this.isSelectingTarget && this.selectedAttackerIndex !== null && this.gameState && this.isMyTurn()) {
      const attackerIdx = this.selectedAttackerIndex;
      const success = this.gameService.attack(this.gameState, attackerIdx, index, this.myPlayerKey === 'player1');
      if (!success.cancelled) {
        this.audioService.playDamageSound();
        this.playerAnimations[attackerIdx] = 'anim-attack-up';
        this.opponentAnimations[index] = 'anim-damage';
        this.cdr.detectChanges();
        setTimeout(() => { 
          this.playerAnimations[attackerIdx] = ''; 
          this.opponentAnimations[index] = ''; 
          this.cdr.detectChanges(); 
        }, 600);
      } else {
         this.showToastMsg(success.trapMessage || 'Ataque falló o fue bloqueado.');
      }
      this.selectedAttackerIndex = null;
      this.isSelectingTarget = false;
      await this.syncState();
    }
  }

  hoveredCard: any = null;
  playerAnimations: { [key: number]: string } = {};
  opponentAnimations: { [key: number]: string } = {};
  showGameOver = false;
  isVictory = false;
  gameOverMessage = '';
  showExtraDeckModal = false;
  
  isTutorial = false;
  tutorialMessage = '';
  debugStatus = 'Iniciado';

  showToast = false;
  toastMessage = '';
  selectedHandCardIndex: number | null = null;

  leaveGameManually() { this.endGame(); }
  openExtraDeck() { 
    this.showExtraDeckModal = true; 
    this.isEvolving = false;
    this.selectedExtraCardIndex = null;
  }
  closeExtraDeck() { this.showExtraDeckModal = false; }
  
  isEvolving = false;
  selectedExtraCardIndex: number | null = null;
  
  cancelEvolution() {
    this.isEvolving = false;
    this.selectedExtraCardIndex = null;
    this.showToastMsg('Evolución cancelada.');
  }

  selectExtraCardToEvolve(index: number) { 
    this.showExtraDeckModal = false;
    this.isEvolving = true;
    this.selectedExtraCardIndex = index;
    this.showToastMsg('Selecciona un Pokémon en tu campo para evolucionarlo.');
  }

  async activateSpell(index: number) {
    this.isEvolving = false;
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    const success = this.gameService.activateSpellTrap(this.gameState, index, this.myPlayerKey === 'player1');
    if (success) {
      this.showToastMsg('Carta mágica/trampa activada.');
      this.cdr.detectChanges();
      await this.syncState();
    }
  }

  async discardCardFromField(slotIndex: number, isSpellZone: boolean) {
    this.isEvolving = false;
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    this.gameService.discardCardFromField(this.gameState, this.myPlayerKey === 'player1', slotIndex, isSpellZone);
    this.showToastMsg('Carta enviada al cementerio.');
    this.cdr.detectChanges();
    await this.syncState();
  }

  async discardCardFromHand(index: number) {
    this.isEvolving = false;
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    this.gameService.discardCard(this.gameState, this.myPlayerKey === 'player1', index);
    if (this.selectedHandCardIndex === index) this.selectedHandCardIndex = null;
    this.showToastMsg('Carta descartada.');
    this.cdr.detectChanges();
    await this.syncState();
  }

  async placeCardInSlot(slot: number, isSpellZone: boolean) {
    this.isEvolving = false;
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null) return;
    
    const cardToPlay = this.getMe().hand[this.selectedHandCardIndex];
    if (!cardToPlay) return;

    const isSpell = cardToPlay.cardClass === 'magic' || cardToPlay.cardClass === 'trap';
    
    if (cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field') {
      this.showToastMsg('Las cartas de Campo deben colocarse en la zona de Campo a la izquierda.');
      return;
    }

    if (isSpell !== isSpellZone) {
      this.showToastMsg(isSpell ? 'Esta carta debe ir en la zona de magias y trampas.' : 'Esta carta debe ir en la zona de monstruos.');
      return;
    }
    
    const success = this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', this.selectedHandCardIndex, slot);
    if (success) {
      this.selectedHandCardIndex = null;
      if (isSpell) {
         this.showToastMsg('Colocada boca abajo.');
         this.cdr.detectChanges();
      } else {
         this.playerAnimations[slot] = 'anim-summon';
         this.cdr.detectChanges();
         setTimeout(() => { this.playerAnimations[slot] = ''; this.cdr.detectChanges(); }, 600);
      }
      await this.syncState();
    }
  }

  async placeFieldCard() {
    this.isEvolving = false;
    if (!this.gameState || !this.isMyTurn() || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null || !this.isSelectedFieldSpell()) {
       if (this.getMe().fieldCard) this.hoveredCard = this.getMe().fieldCard;
       return;
    }
    
    const success = this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', this.selectedHandCardIndex);
    if (success) {
      this.audioService.playFieldSound();
      this.selectedHandCardIndex = null;
      this.showToastMsg('¡Carta de Estadio activada globalmente!');
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

  toastTimeout: any;

  showToastMsg(msg: string) {
    this.toastMessage = msg;
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => { 
      this.toastMessage = ''; 
      this.cdr.detectChanges(); 
    }, 3000);
    this.cdr.detectChanges();
  }

  translateType(type: string): string {
    const types: any = { 'fire': 'Fuego', 'water': 'Agua', 'grass': 'Planta', 'electric': 'Eléctrico', 'rock': 'Roca', 'psychic': 'Psíquico' };
    return types[type] || type;
  }
  translateAbilityName(abilityName: string): string {
    const names: any = { 'intimidation': 'Intimidación', 'rain_dish': 'Cura Lluvia', 'blaze': 'Mar Llamas', 'overgrow': 'Espesura', 'torrent': 'Torrente', 'sturdy': 'Robustez', 'static': 'Elec. Estática', 'synchronize': 'Sincronía' };
    return names[abilityName] || abilityName;
  }
  translateAbilityDesc(desc: string): string { return desc; }

  private async syncState() {
    if (this.gameState && this.selectedRoom) {
      try {
        await this.supabaseService.updateGameState(this.selectedRoom, this.gameState);
        if (this.gameState.winner && !this.showGameOver) {
           this.handleGameOver();
        }
      } catch (e) {
        console.error("Error syncing state:", e);
      }
    }
  }

  showSurrenderModal = false;

  surrender() {
    this.showSurrenderModal = true;
  }

  confirmSurrender() {
    this.showSurrenderModal = false;
    if (this.gameState && this.currentUserId) {
      this.gameState.winner = (this.myPlayerKey === 'player1') ? 'player2' : 'player1';
      this.syncState().then(() => this.handleGameOver());
    }
  }

  handleGameOver() {
    this.showGameOver = true;
    this.audioService.stopMusic();
    this.isVictory = this.gameState?.winner === this.myPlayerKey;
    if (this.isVictory) {
       this.audioService.playWinSound();
       this.gameOverMessage = '¡Has ganado la batalla!';
    } else {
       this.audioService.playLoseSound();
       this.gameOverMessage = 'Has perdido la batalla...';
    }
  }

  async endGame(): Promise<void> {
    if (this.gameState && this.currentUserId) {
      if (this.myPlayerKey === 'player1') {
        const isMyWin = this.gameState.winner === this.myPlayerKey;
        const myId = this.currentUserId;
        const opId = this.myPlayerKey === 'player1' ? this.gameState.player2.userId : this.gameState.player1.userId;
        const result = {
          room_id: this.selectedRoom,
          mode: 'online',
          winner_id: isMyWin ? myId : opId,
          loser_id: !isMyWin ? myId : opId,
          created_at: new Date().toISOString()
        };
        try { await this.supabaseService.insertGameResult(result); } catch (e) { }
      }
      this.gameService.endGame(this.gameState);
    }
    this.router.navigate(['/menu']);
  }

  slots = [0, 1, 2, 3, 4];

  trackByIndex(index: number, item: any): number {
    return index;
  }
}

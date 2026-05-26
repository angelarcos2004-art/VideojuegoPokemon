import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { GameService } from '../../../core/services/game.service';
import { PokemonService } from '../../../core/services/pokemon.service';
import { GameState } from '../../../core/models/game-state.model';
import { PokemonCard } from '../../../core/models/pokemon-card.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vs-player',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="vs-player-container" *ngIf="!gameState">
      <div class="page-header" style="max-width: 1200px; margin: 0 auto 20px; padding: 0 20px;">
        <a routerLink="/menu" class="btn-global-back">← Volver al Menú</a>
      </div>
      <h1>Jugar En Línea</h1>

      <div *ngIf="!selectedRoom" class="room-selection">
        <div class="options-grid">
          <div class="option-card">
            <h3>Crear Sala de Juego</h3>
            <p>Inicia un nuevo juego y espera a que otro jugador se una</p>
            <button (click)="createRoom()" class="btn-primary">Crear Sala</button>
          </div>
          <div class="option-card">
            <h3>Unirse a Juego Existente</h3>
            <p>Únete a una sala de juego disponible</p>
            <button (click)="loadAvailableRooms()" class="btn-primary">Explorar Salas</button>
          </div>
        </div>

        <div *ngIf="availableRooms.length > 0" class="rooms-list">
          <h3>Salas Disponibles</h3>
          <div class="room-grid">
            <div *ngFor="let room of availableRooms" class="room-card">
              <p><strong>ID de Sala:</strong> {{ room.id }}</p>
              <p><strong>Estado:</strong> {{ room.status }}</p>
              <button (click)="joinRoom(room.id)" class="btn-join">Unirse a Sala</button>
            </div>
          </div>
        </div>

        <div *ngIf="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>

      <div *ngIf="selectedRoom && !gameState" class="game-waiting">
        <h2>Sala de Juego {{ selectedRoom }}</h2>
        <p>Esperando al oponente...</p>
        <div class="spinner"></div>
        <button (click)="cancelRoom()" class="btn-cancel">Cancelar</button>
      </div>
    </div>

    <!-- Game Board (Online) -->
    <div class="game-container" *ngIf="gameState">
      <div class="game-board">
        <!-- Opponent Side -->
        <div class="player-section opponent-section">
          <div class="player-header">
            <h2>{{ getOpponent().username }}</h2>
            <div class="hp-bar" [style.width.%]="(getOpponent().hp / 4000) * 100"></div>
            <span class="hp-text">{{ getOpponent().hp }}/4000</span>
          </div>

          <div class="player-field">
            <div class="cards-zone">
              <div class="zone-label">Campo ({{ getOpponent().field.length }}/5)</div>
              <div class="field-cards">
                <div *ngFor="let card of getOpponent().field; let i = index" 
                     class="field-card pk-card-visual interactive"
                     [ngClass]="'card-type-' + (card.types[0] || 'default')"
                     [class.targetable]="isSelectingTarget"
                     (click)="selectTarget(i)">
                  <img [src]="card.image" [alt]="card.name" class="card-image">
                  <div class="card-name">{{ card.name }}</div>
                  <div class="card-hp">HP: {{ card.hp }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Game Center -->
        <div class="game-center">
          <div class="game-phase">
            <h3>{{ getCurrentPhaseText() }}</h3>
            <p>Turno {{ gameState.turnNumber }} - {{ isMyTurn() ? 'Tu' : 'Oponente' }} Turno</p>
          </div>

          <div *ngIf="gameState.winner" class="winner-overlay">
            <div class="winner-message">
              <h2>{{ (gameState.winner === myPlayerKey) ? '¡Ganaste!' : '¡Perdiste!' }}</h2>
              <button (click)="endGame()" class="btn-back">Volver al Menú</button>
            </div>
          </div>

          <div *ngIf="isMyTurn() && !gameState.winner" class="player-actions">
            <button (click)="playPhase()" class="btn-action">Terminar Fase</button>
            <button (click)="drawPhase()" class="btn-action">Robar Carta</button>
             <button (click)="surrender()" class="btn-action" style="background: var(--pk-red); color: white;">Rendirse</button>
          </div>
        </div>

        <!-- My Side -->
        <div class="player-section player-section-main">
          <div class="player-header">
            <h2>{{ getMe().username }} (Tú)</h2>
            <div class="hp-bar" [style.width.%]="(getMe().hp / 4000) * 100"></div>
            <span class="hp-text">{{ getMe().hp }}/4000</span>
          </div>

          <div class="player-field">
            <div class="cards-zone">
              <div class="zone-label">Campo ({{ getMe().field.length }}/5)</div>
              <div class="field-cards">
                <div *ngFor="let card of getMe().field; let i = index"
                     class="field-card pk-card-visual interactive"
                     [ngClass]="'card-type-' + (card.types[0] || 'default')"
                     [class.selected]="selectedAttackerIndex === i"
                     (click)="selectFieldCard(i)">
                  <img [src]="card.image" [alt]="card.name" class="card-image">
                  <div class="card-name">{{ card.name }}</div>
                  <div class="card-hp">HP: {{ card.hp }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="player-hand">
            <div class="zone-label">Mano ({{ getMe().hand.length }})</div>
            <div class="hand-cards">
              <div *ngFor="let card of getMe().hand; let i = index"
                   class="hand-card pk-card-visual interactive"
                   [ngClass]="'card-type-' + (card.types[0] || 'default')"
                   (click)="playCardFromHand(i)">
                <img [src]="card.image" [alt]="card.name" class="card-image">
                <div class="card-name">{{ card.name }}</div>
                <div class="card-attack">ATK: {{ card.attack }}</div>
              </div>
            </div>
          </div>

          <div class="player-resources">
            <span>Mazo: {{ getMe().deck.length }}</span>
            <span>Cementerio: {{ getMe().graveyard.length }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vs-player-container, .game-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }
    
    .game-container { padding: 20px; }

    .vs-player-container h1 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2.5rem;
      margin-bottom: 40px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    }

    .room-selection { max-width: 1000px; margin: 0 auto; }
    .options-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 40px; }
    .option-card { background: var(--pk-white); border: 4px solid var(--pk-dark); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 6px 6px 0px var(--pk-dark); }
    .option-card h3 { color: var(--pk-blue); font-family: var(--font-title); font-size: 1.5rem; margin: 0 0 15px; }
    .option-card p { color: var(--pk-text); opacity: 0.8; font-weight: bold; margin: 0 0 20px; }

    .btn-primary { padding: 12px 30px; background: var(--pk-yellow); color: #111; border: 3px solid var(--pk-dark); border-radius: 8px; font-family: var(--font-title); font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.2s; box-shadow: 4px 4px 0px var(--pk-dark); }
    .btn-primary:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0px var(--pk-dark); background: #ffdf40; }

    .rooms-list { margin-top: 40px; }
    .rooms-list h3 { color: var(--pk-blue); font-family: var(--font-title); font-size: 1.8rem; margin-bottom: 20px; text-align: center; }
    .room-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .room-card { background: var(--pk-white); border: 3px solid var(--pk-dark); border-radius: 8px; padding: 20px; box-shadow: 4px 4px 0px var(--pk-dark); }
    .room-card p { color: var(--pk-text); font-weight: bold; margin: 10px 0; }
    .room-card strong { color: var(--pk-blue); }
    .btn-join { width: 100%; padding: 12px; background: var(--pk-blue); color: white; border: 3px solid var(--pk-dark); border-radius: 8px; font-family: var(--font-title); font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 15px; transition: all 0.2s; box-shadow: 3px 3px 0px var(--pk-dark); }
    .btn-join:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0px var(--pk-dark); }

    .game-waiting { text-align: center; padding: 60px 20px; background: var(--pk-white); border: 4px solid var(--pk-dark); border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 8px 8px 0px var(--pk-dark); }
    .game-waiting h2 { color: var(--pk-red); font-family: var(--font-title); font-size: 2rem; margin-bottom: 30px; }
    .game-waiting p { color: var(--pk-text); font-weight: bold; font-size: 1.2rem; margin-bottom: 30px; }
    .spinner { width: 50px; height: 50px; border: 6px solid var(--pk-light); border-top-color: var(--pk-yellow); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 30px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .btn-cancel { padding: 12px 30px; background: #e0e0e0; color: #111; border: 3px solid var(--pk-dark); border-radius: 8px; font-family: var(--font-title); font-weight: bold; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 3px 3px 0px var(--pk-dark); }
    .btn-cancel:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0px var(--pk-dark); background: #cccccc; }
    .error-message { background: #ff9d9d; border: 3px solid var(--pk-red); color: #111; font-weight: bold; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; box-shadow: 4px 4px 0px var(--pk-dark); }

    /* Game Board Styles */
    .game-board { max-width: 1400px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; height: calc(100vh - 100px); }
    .player-section { flex: 1; background: var(--pk-white); border: 4px solid var(--pk-dark); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; box-shadow: 6px 6px 0px var(--pk-dark); }
    .opponent-section { border-color: var(--pk-red); }
    .player-section-main { border-color: var(--pk-blue); }
    .player-header { margin-bottom: 15px; }
    .player-header h2 { margin: 0 0 10px; color: var(--pk-blue); font-family: var(--font-title); font-size: 1.5rem; }
    .opponent-section .player-header h2 { color: var(--pk-red); }
    .hp-bar { height: 25px; background: var(--pk-red); border-radius: 8px; border: 3px solid var(--pk-dark); margin-bottom: 5px; transition: width 0.3s; }
    .hp-text { font-size: 1rem; font-weight: bold; color: var(--pk-text); }
    .player-field { flex: 1; display: flex; flex-direction: column; gap: 10px; }
    .cards-zone { display: flex; flex-direction: column; gap: 10px; background: rgba(0, 0, 0, 0.05); border: 2px dashed var(--pk-dark); border-radius: 8px; padding: 10px; }
    .zone-label { font-size: 0.9rem; color: var(--pk-blue); font-family: var(--font-title); text-transform: uppercase; font-weight: bold; }
    .field-cards, .hand-cards { display: flex; gap: 15px; overflow-x: auto; padding: 10px 0; }
    .field-card, .hand-card { min-width: 120px; background: var(--pk-white); border: 3px solid var(--pk-dark); border-radius: 8px; padding: 10px; text-align: center; box-shadow: 3px 3px 0px var(--pk-dark); }
    
    .field-card.interactive, .hand-card.interactive { cursor: pointer; transition: transform 0.2s, box-shadow 0.2s, filter 0.2s; }
    .field-card.interactive:hover, .hand-card.interactive:hover { transform: translateY(-5px); box-shadow: 5px 5px 0px rgba(0,0,0,0.5); }
    .field-card.selected { box-shadow: 0 0 15px 5px var(--pk-yellow) !important; transform: translateY(-10px); }
    .field-card.targetable { animation: pulse-red 1.5s infinite; cursor: crosshair; }
    
    @keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(238, 21, 21, 0); } 100% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0); } }
    
    .card-image { width: 100%; height: 80px; object-fit: cover; border-radius: 5px; border: 2px solid var(--pk-dark); margin-bottom: 5px; }
    .card-name { font-size: 0.9rem; color: var(--pk-text); font-weight: bold; margin-bottom: 3px; }
    .card-hp, .card-attack { font-size: 0.8rem; background: rgba(0, 0, 0, 0.3); border-radius: 4px; padding: 2px; border: 1px solid rgba(255, 255, 255, 0.3); }
    
    .player-hand { margin-top: 15px; display: flex; flex-direction: column; gap: 10px; }
    .player-resources { display: flex; gap: 20px; padding-top: 15px; border-top: 3px dashed var(--pk-dark); font-size: 1rem; font-weight: bold; color: var(--pk-text); }
    
    .game-center { background: var(--pk-white); border: 4px solid var(--pk-dark); border-radius: 12px; padding: 20px; text-align: center; position: relative; min-height: 120px; display: flex; flex-direction: column; justify-content: center; box-shadow: 6px 6px 0px var(--pk-dark); }
    .game-phase h3 { color: var(--pk-yellow); font-family: var(--font-title); font-size: 2rem; margin: 0 0 10px; text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark); }
    .game-phase p { color: var(--pk-text); font-weight: bold; font-size: 1.2rem; margin: 0; }
    .player-actions { display: flex; gap: 15px; justify-content: center; margin-top: 15px; }
    .btn-action { padding: 12px 24px; background: var(--pk-yellow); color: #111; border: 3px solid var(--pk-dark); border-radius: 8px; font-family: var(--font-title); font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.2s; box-shadow: 4px 4px 0px var(--pk-dark); }
    .btn-action:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0px var(--pk-dark); background: #ffdf40; }
    
    .winner-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; border-radius: 8px; z-index: 10; }
    .winner-message { text-align: center; background: var(--pk-white); padding: 40px; border: 4px solid var(--pk-dark); border-radius: 12px; box-shadow: 8px 8px 0px var(--pk-dark); }
    .winner-message h2 { font-family: var(--font-title); font-size: 3rem; color: var(--pk-yellow); margin: 0 0 30px; text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark); }
    .btn-back { padding: 15px 40px; background: var(--pk-blue); color: white; border: 3px solid var(--pk-dark); border-radius: 8px; font-family: var(--font-title); font-size: 1.2rem; cursor: pointer; box-shadow: 10px 10px 0px var(--pk-dark);
      animation: modal-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes modal-pop-in {
      0% { transform: scale(0.5); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    .custom-modal h2 { transform: translate(2px, 2px); box-shadow: 2px 2px 0px var(--pk-dark); }
  `]
})
export class VsPlayerComponent implements OnInit, OnDestroy {
  availableRooms: any[] = [];
  selectedRoom: string | null = null;
  errorMessage = '';
  currentUserId: string | null = null;
  currentUserName: string = 'Player';
  gameState: GameState | null = null;
  myPlayerKey: 'player1' | 'player2' = 'player1';
  opponentPlayerKey: 'player1' | 'player2' = 'player2';
  
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(async user => {
        if (user) {
          this.currentUserId = user.id;
          try {
            const profile = await this.supabaseService.getProfile(user.id);
            this.currentUserName = profile.username || 'Player';
          } catch(e) {}
        }
      });
      this.loadAvailableRooms();
  }

  ngOnDestroy() {
    // Si el jugador abandona el componente antes de que el juego termine, se le da la victoria al otro
    if (this.gameState && !this.gameState.winner) {
      this.gameState.winner = (this.myPlayerKey === 'player1') ? 'player2' : 'player1';
      this.endGame();
    }
    
    if (this.roomSubscription) this.roomSubscription.unsubscribe();
    if (this.gameSubscription) this.gameSubscription.unsubscribe();
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
    } catch (error) {
      this.errorMessage = 'Falló al crear la sala de juego';
    }
  }

  async loadAvailableRooms(): Promise<void> {
    try {
      this.availableRooms = await this.supabaseService.getAvailableRooms();
      if (this.availableRooms.length === 0) {
        this.errorMessage = 'No hay salas disponibles en este momento';
      } else {
        this.errorMessage = '';
      }
    } catch (error) {
      this.errorMessage = 'Falló al cargar las salas disponibles';
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
    } catch (error) {
      this.errorMessage = 'Falló al unirse a la sala de juego';
    }
  }

  cancelRoom(): void {
    this.selectedRoom = null;
    this.errorMessage = '';
    if (this.roomSubscription) this.roomSubscription.unsubscribe();
    if (this.gameSubscription) this.gameSubscription.unsubscribe();
  }
  
  private listenToRoom(roomId: string) {
    this.roomSubscription = this.supabaseService.subscribeToRoomStatus(roomId, async (room) => {
      if (room.status === 'active' && room.player2_id) {
        // Opponent joined! Initialize the game
        await this.initializeOnlineGame(roomId, room.player2_id);
      }
    });
  }

  private listenToGameState(roomId: string) {
    this.gameSubscription = this.supabaseService.subscribeToGameState(roomId, (state) => {
      this.gameState = state;
      this.gameService['gameState$'].next(state); // hacky way to sync local game service state
    });
    // Try fetch existing in case we missed event
    this.supabaseService.getGameState(roomId).then(state => {
      if (state) this.gameState = state;
    }).catch(() => {});
  }

  private async initializeOnlineGame(roomId: string, player2Id: string) {
    try {
      const p1Decks = await this.supabaseService.getUserDecks(this.currentUserId!);

      // Validar que el jugador 1 tiene al menos un deck
      if (p1Decks.length === 0) {
        this.errorMessage = '❌ No tienes mazos. Por favor, crea uno en el Constructor de Mazo.';
        this.router.navigate(['/cards/deck-builder']);
        return;
      }

      let p1ActiveDeck = p1Decks.find(d => d.is_active);
      if (!p1ActiveDeck) {
        // Auto-marcar el primer deck como activo para el jugador 1
        await this.supabaseService.setActiveDeck(this.currentUserId!, p1Decks[0].id);
        p1ActiveDeck = p1Decks[0];
      }
      const p1Deck = p1ActiveDeck?.cards ? p1ActiveDeck.cards : await this.pokemonService.getRandomPokemons(20);

      const p2Decks = await this.supabaseService.getUserDecks(player2Id);

      // Validar que el jugador 2 tiene al menos un deck
      if (p2Decks.length === 0) {
        this.errorMessage = '❌ El oponente no tiene mazos creados.';
        return;
      }

      let p2ActiveDeck = p2Decks.find(d => d.is_active);
      if (!p2ActiveDeck) {
        // Auto-marcar el primer deck como activo para el jugador 2
        await this.supabaseService.setActiveDeck(player2Id, p2Decks[0].id);
        p2ActiveDeck = p2Decks[0];
      }
      const p2Deck = p2ActiveDeck?.cards ? p2ActiveDeck.cards : await this.pokemonService.getRandomPokemons(20);
      
      const p2Profile = await this.supabaseService.getProfile(player2Id);

      const state = this.gameService.initializeOnlineGame(
        this.currentUserId!, this.currentUserName, p1Deck,
        p2Profile.username || 'Opponent', p2Deck, roomId
      );
      
      await this.supabaseService.updateGameState(roomId, state);
      this.listenToGameState(roomId);
    } catch (e) {
      console.error(e);
      this.errorMessage = "Failed to initialize game state";
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
    if (this.isMyTurn() && this.gameState?.phase === 'main') {
      this.gameService.playCard(this.gameState, this.myPlayerKey === 'player1', index);
      await this.syncState();
    }
  }

  async selectFieldCard(index: number): Promise<void> {
    if (!this.gameState || !this.isMyTurn()) return;
    
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
        
        if (this.getOpponent().field.length === 0) {
          this.gameService.attack(this.gameState, this.selectedAttackerIndex, -1, this.myPlayerKey === 'player1');
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
      this.selectedAttackerIndex = null;
      this.isSelectingTarget = false;
      await this.syncState();
    }
  }

  private async syncState() {
    if (this.gameState && this.selectedRoom) {
      await this.supabaseService.updateGameState(this.selectedRoom, this.gameState);
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
    }
    this.endGame();
  }

  async endGame(): Promise<void> {
    if (this.gameState && this.currentUserId) {
      // Save game result only for player 1 to avoid duplicates, or both handle it
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
        try { await this.supabaseService.insertGameResult(result); } catch (e) {}
      }
      this.gameService.endGame(this.gameState);
    }
    this.router.navigate(['/menu']);
  }
}

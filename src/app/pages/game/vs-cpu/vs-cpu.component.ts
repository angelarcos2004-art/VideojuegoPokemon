import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { GameService } from '../../../core/services/game.service';
import { PokemonService } from '../../../core/services/pokemon.service';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { SqliteService } from '../../../core/services/sqlite.service';
import { GameState, PlayerState } from '../../../core/models/game-state.model';
import { PokemonCard } from '../../../core/models/pokemon-card.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vs-cpu',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="game-container" *ngIf="gameState">
      <!-- Top HUD (CPU info) -->
      <div class="hud cpu-hud">
        <div class="hud-info">
          <h2>{{ gameState.player2.username }}</h2>
          <div class="hp-bar-container">
            <div class="hp-bar" [style.width.%]="(gameState.player2.hp / 4000) * 100"></div>
          </div>
          <span class="hp-text">{{ gameState.player2.hp }}/4000</span>
        </div>
      </div>

      <!-- Playmat Area -->
      <div class="playmat-wrapper">
        <div class="playmat">
          
          <!-- CPU Row -->
          <div class="mat-row cpu-row">
            <!-- CPU Graveyard -->
            <div class="mat-zone graveyard-zone">
              <div class="zone-label">GY ({{ gameState.player2.graveyard.length }})</div>
            </div>
            
            <!-- CPU Monster Zones -->
            <div class="monster-zones">
              <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot">
                <div *ngIf="gameState.player2.field[slot]"
                     class="field-card pk-card-visual interactive"
                     [ngClass]="'card-type-' + (gameState.player2.field[slot]?.types?.[0] || 'default')"
                     [class.targetable]="isSelectingTarget"
                     [class.exhausted]="gameState.player2.field[slot].hasAttacked || gameState.player2.field[slot].hasUsedAbility"
                     (click)="selectTarget(slot)">
                  <img [src]="gameState.player2.field[slot].image" [alt]="gameState.player2.field[slot].name" class="card-image">
                  <div class="card-name">{{ gameState.player2.field[slot].name }}</div>
                  <div class="card-stats">
                    <span class="atk">⚔️ {{ gameState.player2.field[slot].attack }}</span>
                    <span class="hp">❤️ {{ gameState.player2.field[slot].hp }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- CPU Deck -->
            <div class="mat-zone deck-zone">
              <div class="deck-stack"></div>
              <div class="zone-label">Deck ({{ gameState.player2.deck.length }})</div>
            </div>
          </div>

          <!-- Divider / Phase Info -->
          <div class="mat-divider">
            <div class="phase-badge">{{ getCurrentPhaseText() }}</div>
            <div class="turn-badge">Turno {{ gameState.turnNumber }} - {{ gameState.currentTurn === 'player1' ? 'Tu Turno' : 'CPU Turno' }}</div>
          </div>

          <!-- Player Row -->
          <div class="mat-row player-row">
            <!-- Player Deck -->
            <div class="mat-zone deck-zone">
              <div class="deck-stack"></div>
              <div class="zone-label">Deck ({{ gameState.player1.deck.length }})</div>
            </div>
            
            <!-- Player Monster Zones -->
            <div class="monster-zones">
              <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot">
                <div *ngIf="gameState.player1.field[slot]"
                     class="field-card pk-card-visual interactive"
                     [ngClass]="'card-type-' + (gameState.player1.field[slot]?.types?.[0] || 'default')"
                     [class.selected]="selectedAttackerIndex === slot"
                     [class.exhausted]="gameState.player1.field[slot].hasAttacked || gameState.player1.field[slot].hasUsedAbility"
                     (click)="selectFieldCard(slot)">
                  <img [src]="gameState.player1.field[slot].image" [alt]="gameState.player1.field[slot].name" class="card-image">
                  <div class="card-name">{{ gameState.player1.field[slot].name }}</div>
                  <div class="card-stats">
                    <span class="atk">⚔️ {{ gameState.player1.field[slot].attack }}</span>
                    <span class="hp">❤️ {{ gameState.player1.field[slot].hp }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Player Graveyard -->
            <div class="mat-zone graveyard-zone">
              <div class="zone-label">GY ({{ gameState.player1.graveyard.length }})</div>
            </div>
          </div>

        </div>

        <!-- Winner Overlay -->
        <div *ngIf="gameState.winner" class="winner-overlay">
          <div class="winner-message">
            <h2>{{ gameState.winner === 'player1' ? '¡Ganaste!' : '¡Perdiste!' }}</h2>
            <button (click)="endGame()" class="btn-action">Volver al Menú</button>
          </div>
        </div>
      </div>

      <!-- Bottom HUD (Player Info & Actions) -->
      <div class="hud player-hud">
        <div class="hud-info">
          <h2>{{ gameState.player1.username }}</h2>
          <div class="hp-bar-container">
            <div class="hp-bar" [style.width.%]="(gameState.player1.hp / 4000) * 100"></div>
          </div>
          <span class="hp-text">{{ gameState.player1.hp }}/4000</span>
        </div>
        
        <div *ngIf="gameState.currentTurn === 'player1' && !gameState.winner" class="player-actions">
          <button (click)="playPhase()" class="btn-action phase-btn">Siguiente Fase ➔</button>
        </div>
      </div>

      <!-- Player Hand -->
      <div class="hand-container">
        <div class="hand-cards">
          <div *ngFor="let card of gameState.player1.hand; let i = index"
               class="hand-card pk-card-visual interactive"
               [ngClass]="'card-type-' + (card?.types?.[0] || 'default')"
               (click)="playCardFromHand(i)">
            <img [src]="card.image" [alt]="card.name" class="card-image">
            <div class="card-name">{{ card.name }}</div>
            <div class="card-stats">
              <span class="atk">⚔️ {{ card.attack }}</span>
              <span class="hp">❤️ {{ card.hp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Screen -->
    <div *ngIf="!gameState" class="loading-screen">
      <div class="loader"></div>
      <h2>Conectando al Tapete de Batalla...</h2>
      <p style="color: rgba(255,255,255,0.5); font-family: monospace; font-size: 1rem; margin-top: 10px;">{{ debugLog }}</p>
    </div>
  `,
  styles: [`
    .game-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      flex-direction: column;
      color: var(--pk-text);
      overflow: hidden;
      position: relative;
    }

    .hud {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
      background: var(--pk-white);
      border-bottom: 4px solid var(--pk-dark);
      z-index: 10;
    }
    .player-hud {
      border-bottom: none;
      border-top: 4px solid var(--pk-dark);
    }
    
    .hud-info {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .hud-info h2 {
      margin: 0;
      font-family: var(--font-title);
      color: var(--pk-yellow);
      font-size: 1.5rem;
      text-transform: uppercase;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }
    
    .cpu-hud h2 { color: var(--pk-red); }
    .player-hud h2 { color: var(--pk-blue); }

    .hp-bar-container {
      width: 300px;
      height: 25px;
      background: var(--pk-white);
      border-radius: 8px;
      border: 3px solid var(--pk-dark);
      overflow: hidden;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);
    }

    .hp-bar {
      height: 100%;
      background: var(--pk-red);
      transition: width 0.3s ease;
    }
    .player-hud .hp-bar { background: var(--pk-blue); }

    .hp-text {
      font-weight: bold;
      font-family: var(--font-title);
      font-size: 1.2rem;
      color: var(--pk-text);
    }

    .playmat-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 1000px;
      padding: 20px;
    }

    .playmat {
      width: 100%;
      max-width: 1200px;
      background: var(--pk-light);
      border-radius: 20px;
      border: 6px solid var(--pk-dark);
      box-shadow: 10px 10px 0px var(--pk-dark);
      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 20px;
      transform: rotateX(10deg);
      transform-style: preserve-3d;
      position: relative;
    }

    .playmat::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(var(--pk-dark) 2px, transparent 2px);
      background-size: 30px 30px;
      opacity: 0.1;
      border-radius: 14px;
      pointer-events: none;
    }

    .mat-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      z-index: 1;
    }

    .monster-zones {
      display: flex;
      gap: 15px;
      flex: 1;
      justify-content: center;
    }

    .monster-slot {
      width: 130px;
      height: 180px;
      background: var(--pk-white);
      border: 4px dashed var(--pk-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.2s ease;
      opacity: 0.8;
    }

    .player-row .monster-slot { border-color: var(--pk-blue); background: rgba(0, 198, 255, 0.1); }
    .cpu-row .monster-slot { border-color: var(--pk-red); background: rgba(255, 78, 80, 0.1); }

    .mat-zone {
      width: 130px;
      height: 180px;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
    }

    .deck-zone { border-color: var(--pk-yellow); background: var(--pk-white); }
    .graveyard-zone { border-color: #888; background: #ddd; }

    .deck-stack {
      width: 80%;
      height: 80%;
      background: var(--pk-blue);
      border: 3px solid var(--pk-dark);
      border-radius: 6px;
      box-shadow: 2px 2px 0 var(--pk-dark), 4px 4px 0 var(--pk-dark), 6px 6px 0 var(--pk-dark);
    }

    .zone-label {
      position: absolute;
      bottom: -25px;
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--pk-text);
      text-transform: uppercase;
      font-family: var(--font-title);
      letter-spacing: 1px;
      white-space: nowrap;
      background: var(--pk-white);
      padding: 2px 8px;
      border: 2px solid var(--pk-dark);
      border-radius: 4px;
    }

    .mat-divider {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      border-top: 3px dashed var(--pk-dark);
      border-bottom: 3px dashed var(--pk-dark);
      gap: 5px;
      z-index: 1;
    }

    .phase-badge {
      background: var(--pk-yellow);
      color: #111;
      padding: 5px 20px;
      border-radius: 20px;
      border: 3px solid var(--pk-dark);
      font-family: var(--font-title);
      font-size: 1.2rem;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .turn-badge {
      color: var(--pk-text);
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: var(--pk-white);
      padding: 2px 10px;
      border: 2px solid var(--pk-dark);
      border-radius: 4px;
    }

    /* Cards */
    .field-card {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 10px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      box-shadow: 4px 4px 0px var(--pk-dark);
      z-index: 5;
      opacity: 1 !important;
    }
    
    /* Hand area */
    .hand-container {
      background: var(--pk-white);
      padding: 20px;
      display: flex;
      justify-content: center;
      border-top: 4px solid var(--pk-dark);
      box-shadow: 0 -5px 0px rgba(0,0,0,0.1);
      z-index: 20;
    }

    .hand-cards {
      display: flex;
      gap: 15px;
      max-width: 100%;
      overflow-x: auto;
      padding-bottom: 10px;
    }

    .hand-card {
      min-width: 120px;
      height: 170px;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .hand-card:hover {
      transform: translateY(-15px);
      z-index: 10;
      border-color: var(--pk-yellow);
    }

    .card-image {
      width: 100%;
      height: 60%;
      object-fit: cover;
      border-radius: 4px;
      border: 2px solid var(--pk-dark);
      margin-bottom: 5px;
      background: var(--pk-light);
    }

    .card-name {
      font-size: 0.75rem;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: auto;
      color: var(--pk-text);
    }

    .card-stats {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      background: var(--pk-light);
      padding: 3px 5px;
      border-radius: 4px;
      border: 2px solid var(--pk-dark);
    }

    .card-stats .atk { color: var(--pk-red); font-weight: bold; }
    .card-stats .hp { color: var(--pk-blue); font-weight: bold; }

    /* Interactive States */
    .field-card.interactive { cursor: pointer; transition: transform 0.2s; }
    .field-card.interactive:hover { transform: translateY(-5px); z-index: 10; }
    
    .field-card.exhausted { filter: grayscale(80%) opacity(0.7); cursor: not-allowed; }
    .field-card.exhausted:hover { transform: none; }
    
    .field-card.selected {
      border-color: var(--pk-yellow);
      box-shadow: 0 0 0 4px var(--pk-yellow), 4px 4px 0px var(--pk-dark);
      transform: translateY(-10px);
    }
    
    .field-card.targetable {
      animation: target-pulse 1.5s infinite;
      cursor: crosshair;
    }

    @keyframes target-pulse {
      0% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0.7); border-color: var(--pk-red); }
      70% { box-shadow: 0 0 0 10px rgba(238, 21, 21, 0); border-color: var(--pk-red); }
      100% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0); border-color: var(--pk-red); }
    }

    .btn-action {
      background: var(--pk-yellow);
      color: #111;
      border: 3px solid var(--pk-dark);
      padding: 10px 20px;
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 4px 4px 0 var(--pk-dark);
      transition: all 0.1s;
    }
    .btn-action:active { transform: translate(4px, 4px); box-shadow: 0 0 0 var(--pk-dark); }
    
    .phase-btn {
      background: var(--pk-yellow);
    }
    
    .winner-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
    .winner-message {
      background: var(--pk-white);
      padding: 40px;
      border-radius: 20px;
      border: 6px solid var(--pk-dark);
      text-align: center;
      box-shadow: 10px 10px 0px var(--pk-yellow);
    }
    .winner-message h2 {
      font-family: var(--font-title);
      font-size: 3rem;
      color: var(--pk-blue);
      margin: 0 0 30px;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }

    .loading-screen {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: var(--pk-text);
      font-family: var(--font-title);
    }
    .loader {
      width: 50px;
      height: 50px;
      border: 5px solid var(--pk-dark);
      border-top-color: var(--pk-yellow);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class VsCpuComponent implements OnInit, OnDestroy {
  gameState: GameState | null = null;
  currentUserId: string | null = null;
  username = 'Player';
  selectedAttackerIndex: number | null = null;
  isSelectingTarget = false;
  debugLog = 'Paso 1: Componente montado...';
  private destroy$ = new Subject<void>();

  constructor(private gameService: GameService, private pokemonService: PokemonService, private supabaseService: SupabaseService, private authService: AuthService, private sqliteService: SqliteService, private router: Router, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
          this.username = user.email ? user.email.split('@')[0] : 'Player';
        }
      });

    setTimeout(() => {
      this.initializeGame();
    }, 500);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async initializeGame(): Promise<void> {
    try {
      this.debugLog = 'Paso 2: Iniciando initializeGame...'; this.cdr.detectChanges();
      let userDecks: any[] = [];
      if (this.currentUserId) {
        this.debugLog = `Paso 3: Obteniendo mazos para el usuario ${this.currentUserId}...`; this.cdr.detectChanges();
        userDecks = await this.supabaseService.getUserDecks(this.currentUserId);
        this.debugLog = `Paso 4: Mazos obtenidos (${userDecks.length})...`; this.cdr.detectChanges();
      } else {
        this.debugLog = 'Paso 3: Sin usuario actual, jugando como invitado...'; this.cdr.detectChanges();
      }
      
      let playerDeck: PokemonCard[] = [];
      if (userDecks.length > 0 && userDecks[0].cards) {
        this.debugLog = 'Paso 5: Extrayendo cartas del mazo...'; this.cdr.detectChanges();
        playerDeck = [...userDecks[0].cards];
        playerDeck = playerDeck.sort(() => 0.5 - Math.random());
      }
      
      this.debugLog = `Paso 6: Verificando tamaño del mazo (${playerDeck.length})...`; this.cdr.detectChanges();
      if (playerDeck.length < 20) {
        this.debugLog = 'Paso 7: Añadiendo cartas aleatorias al mazo del jugador...'; this.cdr.detectChanges();
        const extra = await this.pokemonService.getRandomPokemons(20 - playerDeck.length);
        playerDeck = [...playerDeck, ...extra];
      }

      this.debugLog = 'Paso 8: Generando mazo del CPU...'; this.cdr.detectChanges();
      let cpuDeck = await this.pokemonService.getRandomPokemons(20);
      if (cpuDeck.length < 20) {
        this.debugLog = 'Paso 9: Añadiendo cartas aleatorias al mazo del CPU...'; this.cdr.detectChanges();
        const extra = await this.pokemonService.getRandomPokemons(20 - cpuDeck.length);
        cpuDeck = [...cpuDeck, ...extra];
      }

      this.debugLog = 'Paso 10: Inicializando estado del juego...'; this.cdr.detectChanges();
      this.gameState = this.gameService.initializeCPUGame(
        playerDeck,
        cpuDeck,
        this.currentUserId || 'guest',
        this.username
      );

      this.debugLog = 'Paso 11: Subscribiéndose al estado...'; this.cdr.detectChanges();
      this.gameService.getGameState()
        .pipe(takeUntil(this.destroy$))
        .subscribe(state => {
          this.gameState = state;
          if (state) this.debugLog = 'Paso 12: ¡Juego cargado!'; this.cdr.detectChanges();
        });
    } catch (error: any) {
      console.error('Failed to initialize game:', error);
      alert('Error crítico inicializando: ' + (error?.message || error));
      // Fallback si la carga de base de datos falla
      try {
        const fallbackDeck = await this.pokemonService.getRandomPokemons(20);
        const fallbackCpu = await this.pokemonService.getRandomPokemons(20);
        this.gameState = this.gameService.initializeCPUGame(
          fallbackDeck,
          fallbackCpu,
          'guest',
          'Player'
        );
      } catch (e: any) {
        console.error('Fatal fallback error', e);
        alert('Error en fallback: ' + (e?.message || e));
      }
    }
  }

  getCurrentPhaseText(): string {
    const phases: { [key: string]: string } = {
      'draw': 'Fase de Robo',
      'main': 'Fase Principal',
      'battle': 'Fase de Batalla',
      'end': 'Fase de Término'
    };
    return this.gameState?.phase ? phases[this.gameState.phase] : 'Desconocido';
  }

  playPhase(): void {
    if (this.gameState && this.gameState.currentTurn === 'player1') {
      this.gameService.endTurn(this.gameState);
      
      // TypeScript type inference fix
      if ((this.gameState.currentTurn as string) === 'player2') {
        this.executeCPUTurn();
      }
    }
  }

  playCardFromHand(index: number): void {
    if (this.gameState && this.gameState.currentTurn === 'player1' && this.gameState.phase === 'main') {
      this.gameService.playCard(this.gameState, true, index);
    }
  }

  selectFieldCard(index: number): void {
    if (!this.gameState || this.gameState.currentTurn !== 'player1') return;
    
    if (this.gameState.phase === 'main') {
      const card = this.gameState.player1.field[index];
      if (!card.hasUsedAbility) {
        this.gameService.useAbility(this.gameState, index, true);
      }
    } else if (this.gameState.phase === 'battle') {
      const card = this.gameState.player1.field[index];
      if (card.hasAttacked) return;

      if (this.selectedAttackerIndex === index) {
        this.selectedAttackerIndex = null;
        this.isSelectingTarget = false;
      } else {
        this.selectedAttackerIndex = index;
        this.isSelectingTarget = true;
        
        if (this.gameState.player2.field.length === 0) {
          this.gameService.attack(this.gameState, this.selectedAttackerIndex, -1, true);
          this.selectedAttackerIndex = null;
          this.isSelectingTarget = false;
        }
      }
    }
  }

  selectTarget(index: number): void {
    if (this.isSelectingTarget && this.selectedAttackerIndex !== null && this.gameState) {
      this.gameService.attack(this.gameState, this.selectedAttackerIndex, index, true);
      this.selectedAttackerIndex = null;
      this.isSelectingTarget = false;
    }
  }

  private async executeCPUTurn(): Promise<void> {
    if (!this.gameState) return;

    // Helper para pausas
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // MAIN PHASE (ya robó carta automáticamente en endTurn del jugador)
    await delay(1500);

    // Jugar cartas (Invocación) - CPU intentará llenar el campo
    for (let i = this.gameState.player2.hand.length - 1; i >= 0; i--) {
      if (this.gameState.player2.field.length < 5) {
        await delay(800);
        this.gameService.playCard(this.gameState, false, i);
      }
    }

    // Usar habilidades (si conviene)
    await delay(1000);
    for (let i = 0; i < this.gameState.player2.field.length; i++) {
      const card = this.gameState.player2.field[i];
      if (!card.hasUsedAbility) {
        if (card.specialAbility.effect === 'heal' && this.gameState.player2.hp < 2500) {
           this.gameService.useAbility(this.gameState, i, false);
           await delay(800);
        } else if (card.specialAbility.effect !== 'heal') {
           // Usar otras habilidades agresivas
           this.gameService.useAbility(this.gameState, i, false);
           await delay(800);
        }
      }
    }

    // Pasar a BATTLE PHASE
    await delay(1000);
    this.gameService.endTurn(this.gameState); // Cambia de main a battle

    // Atacar
    if (this.gameState.player2.field.length > 0) {
      for (let i = 0; i < this.gameState.player2.field.length; i++) {
        const attacker = this.gameState.player2.field[i];
        if (!attacker || attacker.hasAttacked) continue;

        await delay(1200);
        if (this.gameState.player1.field.length === 0) {
          // Ataque directo
          this.gameService.attack(this.gameState, i, -1, false);
        } else {
          // Buscar el objetivo más débil (menos defensa/HP)
          let targetIdx = 0;
          let minHpDef = 9999;
          for (let j = 0; j < this.gameState.player1.field.length; j++) {
            const def = this.gameState.player1.field[j];
            if ((def.hp + def.defense) < minHpDef) {
              minHpDef = def.hp + def.defense;
              targetIdx = j;
            }
          }
          this.gameService.attack(this.gameState, i, targetIdx, false);
        }
      }
    }

    // Pasar a END PHASE y luego al turno del jugador
    await delay(1500);
    this.gameService.endTurn(this.gameState); // end
    this.gameService.endTurn(this.gameState); // draw -> player1 main
  }

  async endGame(): Promise<void> {
    if (this.gameState && this.currentUserId) {
      const result = {
        user_id: this.currentUserId,
        mode: 'cpu',
        winner: this.gameState.winner === 'player1' ? 'player' : 'cpu',
        created_at: new Date().toISOString()
      };

      try {
        await this.supabaseService.insertGameResult(result);
        await this.sqliteService.insertLocalGame(
          Math.random().toString(),
          this.currentUserId,
          result.winner,
          this.gameState
        );
      } catch (error) {
        console.error('Failed to save game result:', error);
      }

      this.gameService.endGame(this.gameState);
    }

    this.router.navigate(['/menu']);
  }
}

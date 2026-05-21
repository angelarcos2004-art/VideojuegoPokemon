import { Component, OnInit, OnDestroy } from '@angular/core';
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
      <div class="game-board">
        <!-- CPU Side -->
        <div class="player-section cpu-section">
          <div class="player-header">
            <h2>{{ gameState.player2.username }}</h2>
            <div class="hp-bar" [style.width.%]="(gameState.player2.hp / 4000) * 100"></div>
            <span class="hp-text">{{ gameState.player2.hp }}/4000</span>
          </div>

          <div class="player-field">
            <div class="cards-zone">
              <div class="zone-label">Campo ({{ gameState.player2.field.length }}/5)</div>
              <div class="field-cards">
                <div *ngFor="let card of gameState.player2.field; let i = index" class="field-card">
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
            <p>Turno {{ gameState.turnNumber }} - {{ gameState.currentTurn === 'player1' ? 'Tu' : 'CPU' }} Turno</p>
          </div>

          <div *ngIf="gameState.winner" class="winner-overlay">
            <div class="winner-message">
              <h2>{{ gameState.winner === 'player1' ? '¡Ganaste!' : '¡Perdiste!' }}</h2>
              <button (click)="endGame()" class="btn-back">Volver al Menú</button>
            </div>
          </div>

          <div *ngIf="gameState.currentTurn === 'player1' && !gameState.winner" class="player-actions">
            <button (click)="playPhase()" class="btn-action">Terminar Fase</button>
            <button (click)="drawPhase()" class="btn-action">Robar Carta</button>
          </div>
        </div>

        <!-- Player Side -->
        <div class="player-section player-section-main">
          <div class="player-header">
            <h2>{{ gameState.player1.username }}</h2>
            <div class="hp-bar" [style.width.%]="(gameState.player1.hp / 4000) * 100"></div>
            <span class="hp-text">{{ gameState.player1.hp }}/4000</span>
          </div>

          <div class="player-field">
            <div class="cards-zone">
              <div class="zone-label">Campo ({{ gameState.player1.field.length }}/5)</div>
              <div class="field-cards">
                <div *ngFor="let card of gameState.player1.field; let i = index"
                     class="field-card interactive"
                     (click)="selectFieldCard(i)">
                  <img [src]="card.image" [alt]="card.name" class="card-image">
                  <div class="card-name">{{ card.name }}</div>
                  <div class="card-hp">HP: {{ card.hp }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="player-hand">
            <div class="zone-label">Mano ({{ gameState.player1.hand.length }})</div>
            <div class="hand-cards">
              <div *ngFor="let card of gameState.player1.hand; let i = index"
                   class="hand-card interactive"
                   (click)="playCardFromHand(i)">
                <img [src]="card.image" [alt]="card.name" class="card-image">
                <div class="card-name">{{ card.name }}</div>
                <div class="card-attack">ATK: {{ card.attack }}</div>
              </div>
            </div>
          </div>

          <div class="player-resources">
            <span>Mazo: {{ gameState.player1.deck.length }}</span>
            <span>Cementerio: {{ gameState.player1.graveyard.length }}</span>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!gameState" class="loading-screen">
      <h2>Initializing game...</h2>
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
      padding: 20px;
      color: var(--pk-text);
    }

    .game-board {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: calc(100vh - 100px);
    }

    .player-section {
      flex: 1;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      box-shadow: 6px 6px 0px var(--pk-dark);
    }

    .cpu-section {
      border-color: var(--pk-red);
    }

    .player-section-main {
      border-color: var(--pk-blue);
    }

    .player-header {
      margin-bottom: 15px;
    }

    .player-header h2 {
      margin: 0 0 10px;
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1.5rem;
    }

    .cpu-section .player-header h2 {
      color: var(--pk-red);
    }

    .hp-bar {
      height: 25px;
      background: var(--pk-red);
      border-radius: 8px;
      border: 3px solid var(--pk-dark);
      margin-bottom: 5px;
      transition: width 0.3s;
    }

    .hp-text {
      font-size: 1rem;
      font-weight: bold;
      color: var(--pk-text);
    }

    .player-field {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .cards-zone {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: rgba(0, 0, 0, 0.05);
      border: 2px dashed var(--pk-dark);
      border-radius: 8px;
      padding: 10px;
    }

    .zone-label {
      font-size: 0.9rem;
      color: var(--pk-blue);
      font-family: var(--font-title);
      text-transform: uppercase;
      font-weight: bold;
    }

    .field-cards,
    .hand-cards {
      display: flex;
      gap: 15px;
      overflow-x: auto;
      padding: 10px 0;
    }

    .field-card,
    .hand-card {
      min-width: 120px;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 10px;
      text-align: center;
      box-shadow: 3px 3px 0px var(--pk-dark);
    }

    .field-card.interactive,
    .hand-card.interactive {
      cursor: pointer;
      transition: all 0.2s;
    }

    .field-card.interactive:hover,
    .hand-card.interactive:hover {
      border-color: var(--pk-blue);
      transform: translateY(-5px);
      box-shadow: 5px 5px 0px var(--pk-dark);
    }

    .card-image {
      width: 100%;
      height: 80px;
      object-fit: cover;
      border-radius: 5px;
      border: 2px solid var(--pk-dark);
      margin-bottom: 5px;
    }

    .card-name {
      font-size: 0.9rem;
      color: var(--pk-text);
      font-weight: bold;
      margin-bottom: 3px;
    }

    .card-hp,
    .card-attack {
      font-size: 0.8rem;
      color: var(--pk-text);
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      padding: 2px;
      border: 1px solid var(--pk-dark);
    }

    .player-hand {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .player-resources {
      display: flex;
      gap: 20px;
      padding-top: 15px;
      border-top: 3px dashed var(--pk-dark);
      font-size: 1rem;
      font-weight: bold;
      color: var(--pk-text);
    }

    .game-center {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      position: relative;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 6px 6px 0px var(--pk-dark);
    }

    .game-phase h3 {
      color: var(--pk-yellow);
      font-family: var(--font-title);
      font-size: 2rem;
      margin: 0 0 10px;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }

    .game-phase p {
      color: var(--pk-text);
      font-weight: bold;
      font-size: 1.2rem;
      margin: 0;
    }

    .player-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 15px;
    }

    .btn-action {
      padding: 12px 24px;
      background: var(--pk-yellow);
      color: #111;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .btn-action:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background: #ffdf40;
    }

    .winner-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      z-index: 10;
    }

    .winner-message {
      text-align: center;
      background: var(--pk-white);
      padding: 40px;
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .winner-message h2 {
      font-family: var(--font-title);
      font-size: 3rem;
      color: var(--pk-yellow);
      margin: 0 0 30px;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }

    .btn-back {
      padding: 15px 40px;
      background: var(--pk-blue);
      color: white;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 4px 4px 0px var(--pk-dark);
      transition: all 0.2s;
    }

    .btn-back:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .loading-screen {
      min-height: calc(100vh - 60px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2rem;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    }
  `]
})
export class VsCpuComponent implements OnInit, OnDestroy {
  gameState: GameState | null = null;
  currentUserId: string | null = null;
  username = 'Player';
  private destroy$ = new Subject<void>();

  constructor(
    private gameService: GameService,
    private pokemonService: PokemonService,
    private supabaseService: SupabaseService,
    private authService: AuthService,
    private sqliteService: SqliteService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
        }
      });

    await this.initializeGame();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async initializeGame(): Promise<void> {
    try {
      const userDecks = await this.supabaseService.getUserDecks(this.currentUserId || '');
      const playerDeck = userDecks.length > 0
        ? userDecks[0].cards
        : await this.pokemonService.getRandomPokemons(10);

      const cpuDeck = await this.pokemonService.getRandomPokemons(10);

      this.gameState = this.gameService.initializeCPUGame(
        playerDeck,
        cpuDeck,
        this.currentUserId || '',
        this.username
      );

      this.gameService.getGameState()
        .pipe(takeUntil(this.destroy$))
        .subscribe(state => {
          this.gameState = state;
        });
    } catch (error) {
      console.error('Failed to initialize game:', error);
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

  drawPhase(): void {
    if (this.gameState && this.gameState.currentTurn === 'player1') {
      this.gameService.drawCard(this.gameState, true);
    }
  }

  playPhase(): void {
    if (this.gameState && this.gameState.currentTurn === 'player1') {
      this.gameService.endTurn(this.gameState);
      // After endTurn, it should be CPU's turn
      setTimeout(() => this.executeCPUTurn(), 1000);
    }
  }

  playCardFromHand(index: number): void {
    if (this.gameState && this.gameState.currentTurn === 'player1' && this.gameState.phase === 'main') {
      this.gameService.playCard(this.gameState, true, index);
    }
  }

  selectFieldCard(index: number): void {
    if (this.gameState && this.gameState.currentTurn === 'player1' && this.gameState.phase === 'battle') {
      // For simplicity, use ability on selected card
      this.gameService.useAbility(this.gameState, index, true);
    }
  }

  private executeCPUTurn(): void {
    if (!this.gameState) return;

    // Draw phase
    this.gameService.drawCard(this.gameState, false);

    // Main phase: play cards
    for (let i = 0; i < this.gameState.player2.hand.length; i++) {
      if (this.gameState.player2.field.length < 5) {
        this.gameService.playCard(this.gameState, false, i);
      }
    }

    // Battle phase: attack
    if (this.gameState.player2.field.length > 0 && this.gameState.player1.field.length > 0) {
      const attackerIdx = 0;
      const defenderIdx = 0;
      this.gameService.attack(this.gameState, attackerIdx, defenderIdx, false);
    }

    // Use abilities if HP is low
    if (this.gameState.player2.hp < 2000) {
      for (let i = 0; i < this.gameState.player2.field.length; i++) {
        this.gameService.useAbility(this.gameState, i, false);
      }
    }

    // End turn
    this.gameService.endTurn(this.gameState);

    // Check if we need to trigger player turn again after CPU turn
    if (this.gameState && (this.gameState.currentTurn === 'player1' || this.gameState.currentTurn as any === 'player1')) {
      // Player's turn now
    }
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

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
              <div class="zone-label">Field ({{ gameState.player2.field.length }}/5)</div>
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
            <p>Turn {{ gameState.turnNumber }} - {{ gameState.currentTurn === 'player1' ? 'Your' : 'CPU' }} Turn</p>
          </div>

          <div *ngIf="gameState.winner" class="winner-overlay">
            <div class="winner-message">
              <h2>{{ gameState.winner === 'player1' ? 'You Win!' : 'You Lost!' }}</h2>
              <button (click)="endGame()" class="btn-back">Back to Menu</button>
            </div>
          </div>

          <div *ngIf="gameState.currentTurn === 'player1' && !gameState.winner" class="player-actions">
            <button (click)="playPhase()" class="btn-action">End Phase</button>
            <button (click)="drawPhase()" class="btn-action">Draw Card</button>
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
              <div class="zone-label">Field ({{ gameState.player1.field.length }}/5)</div>
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
            <div class="zone-label">Hand ({{ gameState.player1.hand.length }})</div>
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
            <span>Deck: {{ gameState.player1.deck.length }}</span>
            <span>Graveyard: {{ gameState.player1.graveyard.length }}</span>
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
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 20px;
      color: white;
    }

    .game-board {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 100vh;
    }

    .player-section {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .cpu-section {
      border-color: rgba(255, 100, 100, 0.3);
    }

    .player-section-main {
      border-color: rgba(100, 200, 100, 0.3);
    }

    .player-header {
      margin-bottom: 15px;
    }

    .player-header h2 {
      margin: 0 0 10px;
      color: #ffed4e;
    }

    .hp-bar {
      height: 20px;
      background: #ff6b6b;
      border-radius: 5px;
      margin-bottom: 5px;
      transition: width 0.3s;
    }

    .hp-text {
      font-size: 0.9rem;
      color: #aaa;
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
    }

    .zone-label {
      font-size: 0.85rem;
      color: #ffed4e;
      text-transform: uppercase;
      font-weight: bold;
    }

    .field-cards,
    .hand-cards {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding: 10px 0;
    }

    .field-card,
    .hand-card {
      min-width: 120px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 5px;
      padding: 10px;
      text-align: center;
    }

    .field-card.interactive,
    .hand-card.interactive {
      cursor: pointer;
      transition: all 0.3s;
    }

    .field-card.interactive:hover,
    .hand-card.interactive:hover {
      border-color: #ffed4e;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
    }

    .card-image {
      width: 100%;
      height: 80px;
      object-fit: cover;
      border-radius: 3px;
      margin-bottom: 5px;
    }

    .card-name {
      font-size: 0.8rem;
      color: #ffed4e;
      margin-bottom: 3px;
    }

    .card-hp,
    .card-attack {
      font-size: 0.75rem;
      color: #aaa;
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
      padding-top: 10px;
      border-top: 1px solid rgba(255, 215, 0, 0.1);
      font-size: 0.9rem;
      color: #aaa;
    }

    .game-center {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      position: relative;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .game-phase h3 {
      color: #ffed4e;
      margin: 0 0 10px;
    }

    .game-phase p {
      color: #aaa;
      margin: 0;
    }

    .player-actions {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 10px;
    }

    .btn-action {
      padding: 10px 20px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-action:hover {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .winner-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .winner-message {
      text-align: center;
    }

    .winner-message h2 {
      font-size: 2.5rem;
      color: #ffed4e;
      margin: 0 0 20px;
    }

    .btn-back {
      padding: 12px 30px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
    }

    .loading-screen {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: #ffed4e;
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
      'draw': 'Draw Phase',
      'main': 'Main Phase',
      'battle': 'Battle Phase',
      'end': 'End Phase'
    };
    return this.gameState?.phase ? phases[this.gameState.phase] : 'Unknown';
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

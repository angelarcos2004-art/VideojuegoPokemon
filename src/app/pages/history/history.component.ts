import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SupabaseService } from '../../core/services/supabase.service';
import { SqliteService } from '../../core/services/sqlite.service';
import { AuthService } from '../../core/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="history-container">
      <h1>Historial de Juegos</h1>

      <div class="filter-tabs">
        <button
          [class.active]="activeTab === 'all'"
          (click)="activeTab = 'all'; loadHistory()"
          class="tab-btn"
        >
          Todos los Juegos
        </button>
        <button
          [class.active]="activeTab === 'wins'"
          (click)="activeTab = 'wins'; loadHistory()"
          class="tab-btn"
        >
          Victorias
        </button>
        <button
          [class.active]="activeTab === 'losses'"
          (click)="activeTab = 'losses'; loadHistory()"
          class="tab-btn"
        >
          Derrotas
        </button>
      </div>

      <div *ngIf="loading" class="loading">Cargando historial de juegos...</div>

      <div *ngIf="!loading && games.length > 0" class="games-table">
        <div class="table-header">
          <div class="col-date">Fecha</div>
          <div class="col-mode">Modo</div>
          <div class="col-result">Resultado</div>
          <div class="col-opponent">Oponente</div>
        </div>
        <div *ngFor="let game of games" class="table-row" [class.win]="game.winner === 'player'">
          <div class="col-date">{{ formatDate(game.played_at) }}</div>
          <div class="col-mode">{{ formatMode(game.mode) }}</div>
          <div class="col-result" [class.win]="game.winner === 'player'">
            {{ game.winner === 'player' ? '✓ Victoria' : '✗ Derrota' }}
          </div>
          <div class="col-opponent">{{ game.opponent || 'CPU' }}</div>
        </div>
      </div>

      <div *ngIf="!loading && games.length === 0" class="no-games">
        <p>No hay juegos en el historial aún. ¡Juega para comenzar!</p>
      </div>

      <div *ngIf="!loading && games.length > 0" class="stats-summary">
        <h3>Estadísticas</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-label">Total de Juegos</span>
            <span class="stat-value">{{ getTotalGames() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Victorias</span>
            <span class="stat-value win">{{ getWins() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Derrotas</span>
            <span class="stat-value loss">{{ getLosses() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Tasa de Victoria</span>
            <span class="stat-value">{{ getWinRate() }}%</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .history-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .history-container h1 {
      text-align: center;
      color: var(--pk-yellow);
      font-size: 3rem;
      font-family: var(--font-title);
      margin-bottom: 30px;
      text-shadow: 3px 3px 0px var(--pk-blue), -1px -1px 0px var(--pk-dark), 1px -1px 0px var(--pk-dark), -1px 1px 0px var(--pk-dark), 1px 1px 0px var(--pk-dark);
    }

    .filter-tabs {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .tab-btn {
      padding: 10px 20px;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      color: var(--pk-text);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: bold;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .tab-btn:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background-color: #f0f0f0;
    }

    .tab-btn.active {
      background: var(--pk-yellow);
      color: var(--pk-text);
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: var(--pk-text);
      font-weight: bold;
    }

    .games-table {
      max-width: 1000px;
      margin: 0 auto 30px;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .table-header {
      display: grid;
      grid-template-columns: 150px 120px 120px 1fr;
      gap: 15px;
      padding: 15px;
      background: var(--pk-blue);
      border-bottom: 4px solid var(--pk-dark);
      font-weight: bold;
      color: var(--pk-yellow);
      text-shadow: 1px 1px 0px var(--pk-dark);
    }

    .table-row {
      display: grid;
      grid-template-columns: 150px 120px 120px 1fr;
      gap: 15px;
      padding: 15px;
      border-bottom: 2px solid var(--pk-dark);
      align-items: center;
      transition: background 0.2s;
      color: var(--pk-text);
      font-weight: 500;
    }
    
    .table-row:last-child {
      border-bottom: none;
    }

    .table-row:hover {
      background: #f0f0f0;
    }

    .table-row.win {
      background: rgba(100, 200, 100, 0.2);
    }

    .col-date,
    .col-mode,
    .col-opponent {
      color: var(--pk-text);
    }

    .col-result.win {
      color: #1e7025;
      font-weight: bold;
    }

    .col-result:not(.win) {
      color: var(--pk-red);
      font-weight: bold;
    }

    .no-games {
      text-align: center;
      padding: 60px 20px;
      color: var(--pk-text);
      font-size: 1.1rem;
      font-weight: bold;
    }

    .stats-summary {
      max-width: 1000px;
      margin: 0 auto;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 30px;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .stats-summary h3 {
      color: var(--pk-red);
      margin-top: 0;
      font-family: var(--font-title);
      font-size: 1.8rem;
      border-bottom: 2px dashed var(--pk-dark);
      padding-bottom: 10px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .stat-item {
      background: var(--pk-light);
      padding: 20px;
      border-radius: 10px;
      border: 2px solid var(--pk-dark);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .stat-label {
      color: var(--pk-text);
      font-size: 1rem;
      font-weight: bold;
    }

    .stat-value {
      color: var(--pk-blue);
      font-size: 2rem;
      font-weight: bold;
      font-family: var(--font-title);
    }

    .stat-value.win {
      color: #1e7025;
    }

    .stat-value.loss {
      color: var(--pk-red);
    }
  `]
})
export class HistoryComponent implements OnInit, OnDestroy {
  games: any[] = [];
  loading = false;
  activeTab = 'all';
  currentUserId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private supabaseService: SupabaseService,
    private sqliteService: SqliteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
          this.loadHistory();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadHistory(): Promise<void> {
    try {
      this.loading = true;
      if (!this.currentUserId) return;

      const remoteGames = await this.supabaseService.getUserGameResults(this.currentUserId);
      const localGames = this.sqliteService.getLocalGames(this.currentUserId);

      let allGames = [...remoteGames, ...localGames];

      if (this.activeTab === 'wins') {
        allGames = allGames.filter(g => g.winner === 'player');
      } else if (this.activeTab === 'losses') {
        allGames = allGames.filter(g => g.winner !== 'player');
      }

      this.games = allGames.sort((a, b) =>
        new Date(b.played_at || b.created_at).getTime() -
        new Date(a.played_at || a.created_at).getTime()
      );
    } catch (error) {
      console.error('Failed to load history:', error);
    } finally {
      this.loading = false;
    }
  }

  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return 'Unknown';
    }
  }

  formatMode(mode: string): string {
    return mode === 'cpu' ? 'vs CPU' : 'vs Jugador';
  }

  getTotalGames(): number {
    return this.games.length;
  }

  getWins(): number {
    return this.games.filter(g => g.winner === 'player').length;
  }

  getLosses(): number {
    return this.games.filter(g => g.winner !== 'player').length;
  }

  getWinRate(): string {
    if (this.games.length === 0) return '0';
    return Math.round((this.getWins() / this.games.length) * 100).toString();
  }
}

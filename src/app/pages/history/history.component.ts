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
      <h1>Game History</h1>

      <div class="filter-tabs">
        <button
          [class.active]="activeTab === 'all'"
          (click)="activeTab = 'all'; loadHistory()"
          class="tab-btn"
        >
          All Games
        </button>
        <button
          [class.active]="activeTab === 'wins'"
          (click)="activeTab = 'wins'; loadHistory()"
          class="tab-btn"
        >
          Wins
        </button>
        <button
          [class.active]="activeTab === 'losses'"
          (click)="activeTab = 'losses'; loadHistory()"
          class="tab-btn"
        >
          Losses
        </button>
      </div>

      <div *ngIf="loading" class="loading">Loading game history...</div>

      <div *ngIf="!loading && games.length > 0" class="games-table">
        <div class="table-header">
          <div class="col-date">Date</div>
          <div class="col-mode">Mode</div>
          <div class="col-result">Result</div>
          <div class="col-opponent">Opponent</div>
        </div>
        <div *ngFor="let game of games" class="table-row" [class.win]="game.winner === 'player'">
          <div class="col-date">{{ formatDate(game.played_at) }}</div>
          <div class="col-mode">{{ formatMode(game.mode) }}</div>
          <div class="col-result" [class.win]="game.winner === 'player'">
            {{ game.winner === 'player' ? '✓ Win' : '✗ Loss' }}
          </div>
          <div class="col-opponent">{{ game.opponent || 'CPU' }}</div>
        </div>
      </div>

      <div *ngIf="!loading && games.length === 0" class="no-games">
        <p>No games in history yet. Play a game to get started!</p>
      </div>

      <div *ngIf="!loading && games.length > 0" class="stats-summary">
        <h3>Statistics</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-label">Total Games</span>
            <span class="stat-value">{{ getTotalGames() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Wins</span>
            <span class="stat-value win">{{ getWins() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Losses</span>
            <span class="stat-value loss">{{ getLosses() }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Win Rate</span>
            <span class="stat-value">{{ getWinRate() }}%</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .history-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .history-container h1 {
      text-align: center;
      color: #ffed4e;
      margin-bottom: 30px;
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
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      color: #aaa;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .tab-btn:hover {
      border-color: #ffed4e;
      color: #ffed4e;
    }

    .tab-btn.active {
      background: rgba(255, 215, 0, 0.2);
      border-color: #ffed4e;
      color: #ffed4e;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: #ffed4e;
    }

    .games-table {
      max-width: 1000px;
      margin: 0 auto 30px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }

    .table-header {
      display: grid;
      grid-template-columns: 150px 120px 120px 1fr;
      gap: 15px;
      padding: 15px;
      background: rgba(255, 215, 0, 0.1);
      border-bottom: 1px solid rgba(255, 215, 0, 0.2);
      font-weight: bold;
      color: #ffed4e;
    }

    .table-row {
      display: grid;
      grid-template-columns: 150px 120px 120px 1fr;
      gap: 15px;
      padding: 15px;
      border-bottom: 1px solid rgba(255, 215, 0, 0.1);
      align-items: center;
      transition: background 0.3s;
    }

    .table-row:hover {
      background: rgba(255, 215, 0, 0.05);
    }

    .table-row.win {
      background: rgba(100, 200, 100, 0.1);
    }

    .col-date,
    .col-mode,
    .col-result,
    .col-opponent {
      color: #aaa;
    }

    .col-result.win {
      color: #7fff7f;
      font-weight: bold;
    }

    .col-result:not(.win) {
      color: #ff6b6b;
      font-weight: bold;
    }

    .no-games {
      text-align: center;
      padding: 60px 20px;
      color: #aaa;
      font-size: 1.1rem;
    }

    .stats-summary {
      max-width: 1000px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 30px;
    }

    .stats-summary h3 {
      color: #ffed4e;
      margin-top: 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .stat-item {
      background: rgba(0, 0, 0, 0.3);
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .stat-label {
      color: #aaa;
      font-size: 0.9rem;
    }

    .stat-value {
      color: #ffed4e;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .stat-value.win {
      color: #7fff7f;
    }

    .stat-value.loss {
      color: #ff6b6b;
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
    return mode === 'cpu' ? 'vs CPU' : 'vs Player';
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

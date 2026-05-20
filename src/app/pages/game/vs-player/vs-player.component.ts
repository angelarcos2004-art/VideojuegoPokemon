import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vs-player',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="vs-player-container">
      <h1>Play Online</h1>

      <div *ngIf="!selectedRoom" class="room-selection">
        <div class="options-grid">
          <div class="option-card">
            <h3>Create Game Room</h3>
            <p>Start a new game and wait for another player to join</p>
            <button (click)="createRoom()" class="btn-primary">Create Room</button>
          </div>
          <div class="option-card">
            <h3>Join Existing Game</h3>
            <p>Join an available game room</p>
            <button (click)="loadAvailableRooms()" class="btn-primary">Browse Rooms</button>
          </div>
        </div>

        <div *ngIf="availableRooms.length > 0" class="rooms-list">
          <h3>Available Rooms</h3>
          <div class="room-grid">
            <div *ngFor="let room of availableRooms" class="room-card">
              <p><strong>Room ID:</strong> {{ room.id }}</p>
              <p><strong>Status:</strong> {{ room.status }}</p>
              <button (click)="joinRoom(room.id)" class="btn-join">Join Room</button>
            </div>
          </div>
        </div>

        <div *ngIf="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>

      <div *ngIf="selectedRoom" class="game-waiting">
        <h2>Game Room {{ selectedRoom }}</h2>
        <p>Waiting for opponent...</p>
        <div class="spinner"></div>
        <button (click)="cancelRoom()" class="btn-cancel">Cancel</button>
      </div>
    </div>
  `,
  styles: [`
    .vs-player-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .vs-player-container h1 {
      text-align: center;
      color: #ffed4e;
      margin-bottom: 40px;
    }

    .room-selection {
      max-width: 1000px;
      margin: 0 auto;
    }

    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .option-card {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 30px;
      text-align: center;
    }

    .option-card h3 {
      color: #ffed4e;
      font-size: 1.3rem;
      margin: 0 0 15px;
    }

    .option-card p {
      color: #aaa;
      margin: 0 0 20px;
    }

    .btn-primary {
      padding: 12px 30px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-primary:hover {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
      transform: translateY(-2px);
    }

    .rooms-list {
      margin-top: 40px;
    }

    .rooms-list h3 {
      color: #ffed4e;
      margin-bottom: 20px;
      text-align: center;
    }

    .room-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .room-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 8px;
      padding: 20px;
    }

    .room-card p {
      color: #aaa;
      margin: 10px 0;
    }

    .room-card strong {
      color: #ffed4e;
    }

    .btn-join {
      width: 100%;
      padding: 10px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 15px;
      transition: all 0.3s;
    }

    .btn-join:hover {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .game-waiting {
      text-align: center;
      padding: 60px 20px;
    }

    .game-waiting h2 {
      color: #ffed4e;
      margin-bottom: 30px;
    }

    .game-waiting p {
      color: #aaa;
      font-size: 1.1rem;
      margin-bottom: 30px;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(255, 215, 0, 0.2);
      border-top-color: #ffed4e;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 30px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .btn-cancel {
      padding: 12px 30px;
      background: #666;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-cancel:hover {
      background: #888;
    }

    .error-message {
      background: rgba(255, 100, 100, 0.3);
      border: 1px solid #ff6b6b;
      color: #ff6b6b;
      padding: 15px;
      border-radius: 5px;
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class VsPlayerComponent implements OnInit, OnDestroy {
  availableRooms: any[] = [];
  selectedRoom: string | null = null;
  errorMessage = '';
  currentUserId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async createRoom(): Promise<void> {
    try {
      if (!this.currentUserId) {
        this.errorMessage = 'User not authenticated';
        return;
      }

      const room = await this.supabaseService.createGameRoom(this.currentUserId);
      this.selectedRoom = room.id;
    } catch (error) {
      console.error('Failed to create room:', error);
      this.errorMessage = 'Failed to create game room';
    }
  }

  async loadAvailableRooms(): Promise<void> {
    try {
      this.availableRooms = await this.supabaseService.getAvailableRooms();
      if (this.availableRooms.length === 0) {
        this.errorMessage = 'No available rooms at the moment';
      }
    } catch (error) {
      console.error('Failed to load rooms:', error);
      this.errorMessage = 'Failed to load available rooms';
    }
  }

  async joinRoom(roomId: string): Promise<void> {
    try {
      if (!this.currentUserId) {
        this.errorMessage = 'User not authenticated';
        return;
      }

      await this.supabaseService.joinGameRoom(roomId, this.currentUserId);
      this.selectedRoom = roomId;
    } catch (error) {
      console.error('Failed to join room:', error);
      this.errorMessage = 'Failed to join game room';
    }
  }

  cancelRoom(): void {
    this.selectedRoom = null;
    this.errorMessage = '';
  }
}

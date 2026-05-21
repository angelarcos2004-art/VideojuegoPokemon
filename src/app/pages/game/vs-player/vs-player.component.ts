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

      <div *ngIf="selectedRoom" class="game-waiting">
        <h2>Sala de Juego {{ selectedRoom }}</h2>
        <p>Esperando al oponente...</p>
        <div class="spinner"></div>
        <button (click)="cancelRoom()" class="btn-cancel">Cancelar</button>
      </div>
    </div>
  `,
  styles: [`
    .vs-player-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .vs-player-container h1 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2.5rem;
      margin-bottom: 40px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
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
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      box-shadow: 6px 6px 0px var(--pk-dark);
    }

    .option-card h3 {
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1.5rem;
      margin: 0 0 15px;
    }

    .option-card p {
      color: var(--pk-text);
      opacity: 0.8;
      font-weight: bold;
      margin: 0 0 20px;
    }

    .btn-primary {
      padding: 12px 30px;
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

    .btn-primary:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background: #ffdf40;
    }

    .rooms-list {
      margin-top: 40px;
    }

    .rooms-list h3 {
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1.8rem;
      margin-bottom: 20px;
      text-align: center;
    }

    .room-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .room-card {
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .room-card p {
      color: var(--pk-text);
      font-weight: bold;
      margin: 10px 0;
    }

    .room-card strong {
      color: var(--pk-blue);
    }

    .btn-join {
      width: 100%;
      padding: 12px;
      background: var(--pk-blue);
      color: white;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 15px;
      transition: all 0.2s;
      box-shadow: 3px 3px 0px var(--pk-dark);
    }

    .btn-join:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px var(--pk-dark);
    }

    .game-waiting {
      text-align: center;
      padding: 60px 20px;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .game-waiting h2 {
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2rem;
      margin-bottom: 30px;
    }

    .game-waiting p {
      color: var(--pk-text);
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 6px solid var(--pk-light);
      border-top-color: var(--pk-yellow);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 30px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .btn-cancel {
      padding: 12px 30px;
      background: #e0e0e0;
      color: #111;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 3px 3px 0px var(--pk-dark);
    }

    .btn-cancel:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px var(--pk-dark);
      background: #cccccc;
    }

    .error-message {
      background: #ff9d9d;
      border: 3px solid var(--pk-red);
      color: #111;
      font-weight: bold;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
      text-align: center;
      box-shadow: 4px 4px 0px var(--pk-dark);
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
        this.errorMessage = 'Usuario no autenticado';
        return;
      }

      const room = await this.supabaseService.createGameRoom(this.currentUserId);
      this.selectedRoom = room.id;
    } catch (error) {
      console.error('Failed to create room:', error);
      this.errorMessage = 'Falló al crear la sala de juego';
    }
  }

  async loadAvailableRooms(): Promise<void> {
    try {
      this.availableRooms = await this.supabaseService.getAvailableRooms();
      if (this.availableRooms.length === 0) {
        this.errorMessage = 'No hay salas disponibles en este momento';
      }
    } catch (error) {
      console.error('Failed to load rooms:', error);
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
    } catch (error) {
      console.error('Failed to join room:', error);
      this.errorMessage = 'Falló al unirse a la sala de juego';
    }
  }

  cancelRoom(): void {
    this.selectedRoom = null;
    this.errorMessage = '';
  }
}

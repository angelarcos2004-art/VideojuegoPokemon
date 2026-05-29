const fs = require('fs');

const pathHtml = 'src/app/pages/game/vs-player/vs-player.component.html';
let html = fs.readFileSync(pathHtml, 'utf8');

// I will just replace the whole lobby section up to <div class="game-container" *ngIf="gameState">
const replacement = `<app-navbar></app-navbar>

<style>
  .vs-player-wrapper { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 60px); background: var(--pk-light); background-image: var(--pk-bg-image); background-size: cover; background-position: center; }
  .vs-player-container { padding: 40px; text-align: center; font-family: var(--font-text); background: var(--pk-white); border-radius: 20px; width: 90%; max-width: 800px; border: 6px solid var(--pk-dark); box-shadow: 10px 10px 0px var(--pk-dark); position: relative;}
  .options-grid { display: flex; gap: 20px; justify-content: center; margin: 30px 0; }
  .option-card { background: var(--pk-light); padding: 20px; border-radius: 10px; border: 3px solid var(--pk-dark); flex: 1; }
  .room-grid { display: flex; flex-direction: column; gap: 10px; }
  .room-card { background: var(--pk-white); padding: 15px; border-radius: 8px; border: 2px solid var(--pk-dark); display: flex; justify-content: space-between; align-items: center; }
  .btn-primary, .btn-join, .btn-cancel { background: var(--pk-yellow); color: #111; padding: 10px 20px; border: 3px solid var(--pk-dark); border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; font-family: var(--font-title); font-size: 1.1rem; }
  .btn-primary:hover, .btn-join:hover { transform: translateY(-3px); box-shadow: 0 4px 0 var(--pk-dark); }
  .btn-cancel { background: var(--pk-red); color: white; margin-top: 20px; }
  .spinner { width: 50px; height: 50px; border: 5px solid var(--pk-light); border-top-color: var(--pk-yellow); border-radius: 50%; animation: spin 1s infinite linear; margin: 20px auto; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error-message { background: var(--pk-red); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; border: 3px solid var(--pk-dark); font-weight: bold; text-align: center; font-size: 1.2rem;}
</style>

<div class="vs-player-wrapper" *ngIf="!gameState">
    <div class="vs-player-container">
      <div class="page-header" style="max-width: 1200px; margin: 0 auto 20px; padding: 0 20px;">
        <a routerLink="/menu" class="btn-global-back">← Volver al Menú</a>
      </div>
      
      <h1>Jugar En Línea</h1>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
        <br><button (click)="cancelRoom()" class="btn-cancel" style="margin-top: 10px;">Aceptar y Volver</button>
      </div>

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
      </div>

      <div *ngIf="selectedRoom && !gameState" class="game-waiting">
        <h2>Sala de Juego {{ selectedRoom }}</h2>
        <p>Esperando al oponente...</p>
        <p style="font-size: 0.9rem; color: #555; margin-top: 10px; font-style: italic;">Estado del Servidor: {{ debugStatus }}</p>
        <div class="spinner"></div>
        <button (click)="cancelRoom()" class="btn-cancel">Cancelar y Salir</button>
      </div>

    </div>
</div>

<div class="game-container" *ngIf="gameState">`;

html = html.replace(/<style>[\s\S]*?<div class="game-container" \*ngIf="gameState">/, replacement);

fs.writeFileSync(pathHtml, html, 'utf8');
console.log('Update successful!');

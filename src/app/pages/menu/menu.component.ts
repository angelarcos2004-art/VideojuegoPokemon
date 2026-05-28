import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AudioService } from '../../core/services/audio.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="menu-container">
      <h1>Menú Principal</h1>
      <div class="menu-options">
        <a routerLink="/cards/collection" class="menu-btn">
          <span>📚</span> Colección
        </a>
        <a routerLink="/cards/deck-builder" class="menu-btn">
          <span>🛠️</span> Constructor de Mazo
        </a>
        <a routerLink="/game/cpu" class="menu-btn">
          <span>🤖</span> Jugar vs CPU
        </a>
        <a routerLink="/game/online" class="menu-btn">
          <span>🌐</span> Jugar En Línea
        </a>
        <a routerLink="/history" class="menu-btn">
          <span>📊</span> Historial
        </a>
        <a routerLink="/rules" class="menu-btn">
          <span>📖</span> Reglas
        </a>
      </div>
      <div class="settings-btn-container">
        <button (click)="showSettings = true" class="menu-btn settings-btn">
          <span>⚙️</span> Opciones de Audio
        </button>
      </div>

      <!-- Settings Modal -->
      <div *ngIf="showSettings" class="settings-overlay">
        <div class="settings-modal">
          <h2>Opciones de Audio</h2>
          
          <div class="setting-item">
            <label>Música del Menú</label>
            <input type="checkbox" [(ngModel)]="audioService.settings.menuMusic" (change)="saveSettings()">
          </div>
          
          <div class="setting-item">
            <label>Música de Batalla</label>
            <input type="checkbox" [(ngModel)]="audioService.settings.battleMusic" (change)="saveSettings()">
          </div>
          
          <div class="setting-item">
            <label>Efectos de Sonido</label>
            <input type="checkbox" [(ngModel)]="audioService.settings.effects" (change)="saveSettings()">
          </div>

          <button (click)="showSettings = false" class="close-btn">Cerrar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .menu-container h1 {
      text-align: center;
      color: var(--pk-yellow);
      font-size: 3rem;
      font-family: var(--font-title);
      margin: 40px 0;
      text-shadow: 3px 3px 0px var(--pk-blue), -1px -1px 0px var(--pk-dark), 1px -1px 0px var(--pk-dark), -1px 1px 0px var(--pk-dark), 1px 1px 0px var(--pk-dark);
    }

    .menu-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
    }

    .settings-btn-container {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }

    .settings-btn {
      width: 100%;
      max-width: 300px;
    }

    .menu-btn {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 30px;
      text-decoration: none;
      color: var(--pk-text);
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-size: 1.2rem;
      font-family: var(--font-title);
      font-weight: bold;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .menu-btn span {
      font-size: 3rem;
    }

    .menu-btn:hover {
      background: var(--pk-yellow);
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px var(--pk-dark);
      color: var(--pk-blue);
    }

    .settings-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000;
    }
    .settings-modal {
      background: var(--pk-white); border: 4px solid var(--pk-dark); border-radius: 15px; padding: 30px; width: 90%; max-width: 400px;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }
    .settings-modal h2 { margin-top: 0; color: var(--pk-blue); text-align: center; font-family: var(--font-title); font-size: 2rem; margin-bottom: 25px; }
    .setting-item {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 1.2rem; font-weight: bold;
    }
    .setting-item input[type="checkbox"] {
      width: 25px; height: 25px; cursor: pointer;
    }
    .close-btn {
      width: 100%; padding: 15px; background: var(--pk-red); color: white; border: 3px solid var(--pk-dark); border-radius: 8px; font-size: 1.2rem; font-family: var(--font-title); cursor: pointer; margin-top: 10px;
    }
    .close-btn:hover { background: #d00; }
  `]
})
export class MenuComponent implements OnInit {
  showSettings = false;

  constructor(public audioService: AudioService) {}

  ngOnInit() {
    this.audioService.playMenuMusic();
  }

  saveSettings() {
    this.audioService.saveSettings();
  }
}

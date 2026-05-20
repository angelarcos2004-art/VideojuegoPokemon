import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
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
    </div>
  `,
  styles: [`
    .menu-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .menu-container h1 {
      text-align: center;
      color: #ffed4e;
      font-size: 2.5rem;
      margin: 40px 0;
    }

    .menu-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      max-width: 900px;
      margin: 0 auto;
    }

    .menu-btn {
      background: rgba(255, 215, 0, 0.1);
      border: 2px solid rgba(255, 215, 0, 0.3);
      border-radius: 10px;
      padding: 30px;
      text-decoration: none;
      color: white;
      text-align: center;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .menu-btn span {
      font-size: 2.5rem;
    }

    .menu-btn:hover {
      background: rgba(255, 215, 0, 0.2);
      border-color: #ffed4e;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 215, 0, 0.2);
    }
  `]
})
export class MenuComponent {}

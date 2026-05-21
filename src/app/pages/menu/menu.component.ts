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

    .menu-btn {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 30px;
      text-decoration: none;
      color: var(--pk-text);
      text-align: center;
      transition: all 0.2s;
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
  `]
})
export class MenuComponent {}

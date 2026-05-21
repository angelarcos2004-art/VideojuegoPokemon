import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="results-container">
      <div class="results-card">
        <h1>Juego Terminado</h1>
        <div class="result-status">
          <p class="message">Por favor revisa tu historial de juegos para ver los resultados detallados.</p>
        </div>
        <div class="action-buttons">
          <a routerLink="/history" class="btn-primary">Ver Historial</a>
          <a routerLink="/menu" class="btn-secondary">Volver al Menú</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .results-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pk-text);
    }

    .results-card {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 60px 40px;
      max-width: 500px;
      text-align: center;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    .results-card h1 {
      color: var(--pk-yellow);
      font-size: 3rem;
      font-family: var(--font-title);
      margin: 0 0 30px;
      text-shadow: 3px 3px 0px var(--pk-blue), -1px -1px 0px var(--pk-dark), 1px -1px 0px var(--pk-dark), -1px 1px 0px var(--pk-dark), 1px 1px 0px var(--pk-dark);
    }

    .result-status {
      margin-bottom: 40px;
    }

    .message {
      color: var(--pk-text);
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.6;
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .btn-primary,
    .btn-secondary {
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 10px;
      border: 3px solid var(--pk-dark);
      font-weight: bold;
      font-family: var(--font-title);
      font-size: 1.2rem;
      transition: all 0.2s;
      display: block;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .btn-primary {
      background-color: var(--pk-yellow);
      color: var(--pk-text);
    }

    .btn-primary:hover, .btn-secondary:hover {
      box-shadow: 2px 2px 0px var(--pk-dark);
      transform: translate(2px, 2px);
    }

    .btn-secondary {
      background-color: var(--pk-white);
      color: var(--pk-text);
    }
  `]
})
export class ResultsComponent {}

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
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .results-card {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 215, 0, 0.2);
      border-radius: 15px;
      padding: 60px 40px;
      max-width: 500px;
      text-align: center;
    }

    .results-card h1 {
      color: #ffed4e;
      font-size: 3rem;
      margin: 0 0 30px;
    }

    .result-status {
      margin-bottom: 40px;
    }

    .message {
      color: #aaa;
      font-size: 1.1rem;
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
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s;
      display: block;
    }

    .btn-primary {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
    }

    .btn-primary:hover {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #ffed4e;
      border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .btn-secondary:hover {
      background: rgba(255, 215, 0, 0.2);
      border-color: #ffed4e;
    }
  `]
})
export class ResultsComponent {}

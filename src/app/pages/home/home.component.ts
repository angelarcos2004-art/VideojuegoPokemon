import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="home-container">
      <div class="hero">
        <img src="assets/images/logo.png" alt="Logo" class="hero-logo">
        <h1>Batalla de Cartas Pokémon</h1>
        <p class="subtitle">Juego de cartas estratégico inspirado en Pokémon y Yu-Gi-Oh!</p>
        <div class="buttons">
          <ng-container *ngIf="isAuthenticated$ | async; else unauthButtons">
            <div style="display: flex; gap: 20px; justify-content: center; width: 100%;">
              <a routerLink="/menu" class="btn btn-primary">Ir al Menú</a>
              <a routerLink="/game/cpu" class="btn btn-secondary">Partida Rápida</a>
            </div>
            <div style="display: flex; justify-content: center; width: 100%; margin-top: 10px;">
              <a routerLink="/game/tutorial" class="btn btn-tutorial">📚 Tutorial</a>
            </div>
          </ng-container>
          <ng-template #unauthButtons>
            <a routerLink="/login" class="btn btn-primary">Iniciar Sesión</a>
            <a routerLink="/register" class="btn btn-secondary">Registrarse</a>
          </ng-template>
      </div>
      <div class="features">
        <div class="feature">
          <h3>Jugar vs CPU</h3>
          <p>Desafía a la computadora con estrategia de cartas</p>
        </div>
        <div class="feature">
          <h3>Multijugador</h3>
          <p>Batalla contra otros jugadores en línea en tiempo real</p>
        </div>
        <div class="feature">
          <h3>Colecciona Cartas</h3>
          <p>Crea tu mazo con cientos de cartas Pokémon</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
    }

    .hero {
      text-align: center;
      margin: 40px 0 60px;
      color: var(--pk-text);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-logo {
      max-width: 300px;
      width: 100%;
      margin-bottom: 20px;
      filter: drop-shadow(4px 4px 0px var(--pk-dark));
      transition: transform 0.3s;
    }

    .hero-logo:hover {
      transform: scale(1.05);
    }

    .hero h1 {
      font-size: 4.5rem;
      font-family: var(--font-title);
      margin: 0;
      color: var(--pk-yellow);
      text-shadow: 4px 4px 0px var(--pk-blue), -2px -2px 0px var(--pk-dark), 2px -2px 0px var(--pk-dark), -2px 2px 0px var(--pk-dark), 2px 2px 0px var(--pk-dark);
      letter-spacing: 2px;
    }

    .subtitle {
      font-size: 1.4rem;
      color: var(--pk-text);
      margin: 15px 0 40px;
      font-weight: bold;
    }

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 14px 35px;
      font-family: var(--font-title);
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 12px;
      border: 3px solid var(--pk-dark);
      transition: all 0.2s;
      cursor: pointer;
      box-shadow: 5px 5px 0px var(--pk-dark);
      font-weight: bold;
    }

    .btn:hover {
      transform: translate(3px, 3px);
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .btn-primary {
      background-color: var(--pk-yellow);
      color: #111;
    }

    .btn-secondary {
      background-color: var(--pk-white);
      color: var(--pk-text);
    }

    .btn-tutorial {
      background-color: #4caf50;
      color: white;
      padding: 10px 30px;
      font-size: 1.1rem;
      margin: 20px 0 30px 0;
    }

    .btn-tutorial:hover {
      background-color: #43a047;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .feature {
      background: var(--pk-white);
      padding: 35px 25px;
      border-radius: 15px;
      border: 4px solid var(--pk-dark);
      color: var(--pk-text);
      text-align: center;
      box-shadow: 8px 8px 0px var(--pk-dark);
      transition: transform 0.2s;
    }
    
    .feature:hover {
      transform: translateY(-5px);
    }

    .feature h3 {
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 1.6rem;
      margin: 0 0 15px;
      text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
    }

    .feature p {
      margin: 0;
      color: var(--pk-text);
      opacity: 0.8;
      font-size: 1.1rem;
      font-weight: 500;
    }
  `]
})
export class HomeComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}

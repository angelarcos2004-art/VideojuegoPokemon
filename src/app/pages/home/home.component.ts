import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="home-container">
      <div class="hero">
        <h1>Batalla de Cartas Pokémon</h1>
        <p class="subtitle">Juego de cartas estratégico inspirado en Pokémon y Yu-Gi-Oh!</p>
        <div class="buttons">
          <a routerLink="/login" class="btn btn-primary">Iniciar Sesión</a>
          <a routerLink="/register" class="btn btn-secondary">Registrarse</a>
        </div>
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
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
    }

    .hero {
      text-align: center;
      margin: 80px 0 60px;
      color: white;
    }

    .hero h1 {
      font-size: 4rem;
      margin: 0;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .subtitle {
      font-size: 1.3rem;
      color: #aaa;
      margin: 10px 0 30px;
    }

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 30px;
      font-size: 1rem;
      text-decoration: none;
      border-radius: 5px;
      border: 2px solid;
      transition: all 0.3s;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border-color: #ffd700;
      font-weight: bold;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #fff;
      border-color: #fff;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .feature {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 10px;
      border: 1px solid rgba(255, 215, 0, 0.2);
      color: white;
      text-align: center;
    }

    .feature h3 {
      color: #ffed4e;
      font-size: 1.5rem;
      margin: 0 0 10px;
    }

    .feature p {
      margin: 0;
      color: #aaa;
    }
  `]
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="rules-container">
      <h1>Reglas del Juego</h1>
      <div class="rules-content">
        <section>
          <h2>Objetivo</h2>
          <p>Reduce la vida (HP) de tu oponente a 0 para ganar el juego.</p>
        </section>
        <section>
          <h2>Inicio del Juego</h2>
          <p>Cada jugador comienza con 4000 HP y roba 5 cartas de su mazo.</p>
        </section>
        <section>
          <h2>Fases del Turno</h2>
          <ul>
            <li><strong>Fase de Robo:</strong> Roba 1 carta de tu mazo</li>
            <li><strong>Fase Principal:</strong> Juega cartas de tu mano</li>
            <li><strong>Fase de Batalla:</strong> Ataca las cartas del oponente o directamente</li>
            <li><strong>Fase de Término:</strong> Termina tu turno</li>
          </ul>
        </section>
        <section>
          <h2>Mecánicas de Cartas</h2>
          <ul>
            <li>Máximo 5 cartas en el campo a la vez</li>
            <li>Daño = Ataque del Atacante - Defensa del Defensor</li>
            <li>Usa las habilidades especiales estratégicamente</li>
          </ul>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .rules-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .rules-container h1 {
      text-align: center;
      color: #ffed4e;
      font-size: 2.5rem;
      margin: 20px 0;
    }

    .rules-content {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 30px;
    }

    section {
      margin-bottom: 30px;
    }

    section h2 {
      color: #ffed4e;
      margin-bottom: 10px;
    }

    section p, section ul {
      color: #aaa;
      line-height: 1.6;
    }

    section ul {
      padding-left: 20px;
    }

    section li {
      margin-bottom: 8px;
    }

    strong {
      color: #ffed4e;
    }
  `]
})
export class RulesComponent {}

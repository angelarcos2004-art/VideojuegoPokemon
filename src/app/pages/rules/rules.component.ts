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
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .rules-container h1 {
      text-align: center;
      color: var(--pk-yellow);
      font-size: 3rem;
      font-family: var(--font-title);
      margin: 20px 0;
      text-shadow: 3px 3px 0px var(--pk-blue), -1px -1px 0px var(--pk-dark), 1px -1px 0px var(--pk-dark), -1px 1px 0px var(--pk-dark), 1px 1px 0px var(--pk-dark);
    }

    .rules-content {
      max-width: 800px;
      margin: 0 auto;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 30px;
      box-shadow: 8px 8px 0px var(--pk-dark);
    }

    section {
      margin-bottom: 30px;
    }

    section h2 {
      color: var(--pk-red);
      font-family: var(--font-title);
      margin-bottom: 10px;
      border-bottom: 2px dashed var(--pk-dark);
      padding-bottom: 5px;
    }

    section p, section ul {
      color: var(--pk-text);
      line-height: 1.6;
      font-weight: 500;
    }

    section ul {
      padding-left: 20px;
    }

    section li {
      margin-bottom: 8px;
    }

    strong {
      color: var(--pk-blue);
      font-weight: bold;
    }
  `]
})
export class RulesComponent {}

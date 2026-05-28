import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>

    <div class="rules-container">
      <div class="page-header">
        <a routerLink="/menu" class="btn-global-back">← Volver al Menú</a>
      </div>
      
      <h1>Manual de Entrenador</h1>
      
      <div class="rules-grid">
      
        <!-- Objetivo -->
        <div class="rule-card c-red">
          <h2><div class="icon-wrapper">🎯</div> Objetivo del Duelo</h2>
          <ul class="rule-list">
            <li><strong>Derrota por HP:</strong> Reduce los Puntos de Vida (HP) de tu oponente de <span class="highlight">4000 a 0</span> para ganar.</li>
            <li><strong>Deck Out:</strong> Si un jugador está obligado a robar una carta pero su <span class="highlight">mazo está vacío (0 cartas)</span>, perderá el duelo inmediatamente.</li>
          </ul>
        </div>

        <!-- Construcción y Fases -->
        <div class="rule-card c-blue">
          <h2><div class="icon-wrapper">⏱️</div> Construcción y Fases</h2>
          <ul class="rule-list">
            <li><strong>Mazos de 20 Cartas:</strong> Cada mazo debe tener exactamente 20 cartas (máximo 3 copias por carta).</li>
            <li><strong>Fase de Robo:</strong> Roba 1 carta automáticamente.</li>
            <li><strong>Fase Principal:</strong> Invoca Pokémon, coloca trampas, activa pociones o cartas de estadio.</li>
            <li><strong>Fase de Batalla:</strong> ¡Ataca! Solo los monstruos invocados en turnos anteriores o que no hayan atacado pueden golpear.</li>
          </ul>
        </div>
        
        <!-- Mecánicas de Combate -->
        <div class="rule-card c-yellow">
          <h2><div class="icon-wrapper">⚔️</div> Mecánicas de Batalla</h2>
          <ul class="rule-list">
            <li><strong>Regla de 1er Turno:</strong> El jugador que inicia el duelo no puede atacar en su primer turno.</li>
            <li><strong>Fórmula de Daño:</strong> El daño infligido es <span class="highlight">Ataque del Atacante - Defensa del Defensor</span>.</li>
            <li><strong>Ataque Directo:</strong> Si el oponente no tiene Pokémon en el campo, el ataque impactará directamente a sus HP.</li>
          </ul>
        </div>

        <!-- El Campo -->
        <div class="rule-card c-green">
          <h2><div class="icon-wrapper">🗺️</div> Zonas del Campo</h2>
          <ul class="rule-list">
            <li><strong>Zona de Monstruos:</strong> Máximo de 5 Pokémon al mismo tiempo.</li>
            <li><strong>Zona de Magias/Trampas:</strong> Máximo de 5 cartas simultáneas.</li>
            <li><strong>Extra Deck:</strong> Aquí se guardan automáticamente las Evoluciones. Puedes invocarlas sobre su forma base correspondiente.</li>
          </ul>
        </div>

        <!-- Cartas Especiales -->
        <div class="rule-card c-purple">
          <h2><div class="icon-wrapper">✨</div> Magias y Trampas</h2>
          <ul class="rule-list">
            <li><strong>Estadios:</strong> Modifican las estadísticas de forma constante para el campo. Reemplazan a los estadios anteriores.</li>
            <li><strong>Trampas:</strong> Se colocan boca abajo. Si su condición se cumple, <span class="highlight">reaccionan automáticamente</span>.</li>
            <li><strong>Equipos y Curaciones:</strong> Usa estas cartas para beneficiar directamente a un Pokémon o a tu jugador.</li>
          </ul>
        </div>

        <!-- Estados -->
        <div class="rule-card c-dark">
          <h2><div class="icon-wrapper">🧬</div> Estados Alterados</h2>
          <ul class="rule-list">
            <li><strong>Veneno:</strong> Drena -250 HP al final de cada turno.</li>
            <li><strong>Quemadura:</strong> Drena -150 HP al final de cada turno.</li>
            <li><strong>Parálisis:</strong> El Pokémon afectado no podrá atacar ese turno.</li>
          </ul>
        </div>

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
      padding: 40px 20px 80px;
    }
    
    .page-header {
      max-width: 1200px; 
      margin: 0 auto 20px; 
    }

    h1 {
      text-align: center;
      color: var(--pk-yellow);
      font-size: 3.5rem;
      font-family: var(--font-title);
      margin: 0 0 40px 0;
      text-shadow: 4px 4px 0px var(--pk-blue), -2px -2px 0px var(--pk-dark), 2px -2px 0px var(--pk-dark), -2px 2px 0px var(--pk-dark), 2px 2px 0px var(--pk-dark);
      letter-spacing: 2px;
    }

    .rules-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 25px;
      margin: 0 auto;
      max-width: 1100px;
    }

    .rule-card {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 16px;
      padding: 25px;
      box-shadow: 6px 6px 0px var(--pk-dark);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .rule-card:hover {
      transform: translateY(-8px);
      box-shadow: 10px 10px 0px var(--pk-dark);
    }
    
    .rule-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 12px;
    }

    .c-red::before { background: var(--pk-red); }
    .c-blue::before { background: var(--pk-blue); }
    .c-green::before { background: #4caf50; }
    .c-yellow::before { background: var(--pk-yellow); }
    .c-purple::before { background: #9c27b0; }
    .c-dark::before { background: var(--pk-text); }

    .rule-card h2 {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--pk-text);
      font-family: var(--font-title);
      font-size: 1.6rem;
      margin-bottom: 18px;
      border-bottom: 2px dashed #ccc;
      padding-bottom: 12px;
      margin-top: 8px;
      letter-spacing: 1px;
    }

    .icon-wrapper {
      background: var(--pk-light);
      width: 44px; height: 44px;
      display: flex; justify-content: center; align-items: center;
      border-radius: 50%; 
      border: 2px solid var(--pk-dark);
      font-size: 1.3rem;
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .rule-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .rule-list li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 14px;
      line-height: 1.5;
      font-weight: 500;
      color: var(--pk-text);
      font-size: 0.95rem;
    }

    .rule-list li::before {
      content: '▶';
      position: absolute;
      left: 0;
      top: 2px;
      color: var(--pk-blue);
      font-size: 0.8rem;
    }
    
    .rule-list li strong {
      color: var(--pk-blue);
      font-weight: 800;
    }
    
    .highlight {
      background: #ffeeb2;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      color: #111;
    }
    
    @media (max-width: 768px) {
      .rules-grid {
        grid-template-columns: 1fr;
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class RulesComponent {}

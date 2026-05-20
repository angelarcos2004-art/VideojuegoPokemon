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
      <h1>Game Rules</h1>
      <div class="rules-content">
        <section>
          <h2>Objective</h2>
          <p>Reduce your opponent's HP to 0 to win the game.</p>
        </section>
        <section>
          <h2>Game Start</h2>
          <p>Each player starts with 4000 HP and draws 5 cards from their deck.</p>
        </section>
        <section>
          <h2>Turn Phases</h2>
          <ul>
            <li><strong>Draw Phase:</strong> Draw 1 card from your deck</li>
            <li><strong>Main Phase:</strong> Play cards from your hand</li>
            <li><strong>Battle Phase:</strong> Attack opponent's cards or directly</li>
            <li><strong>End Phase:</strong> End your turn</li>
          </ul>
        </section>
        <section>
          <h2>Card Mechanics</h2>
          <ul>
            <li>Maximum 5 cards on field at once</li>
            <li>Damage = Attacker's Attack - Defender's Defense</li>
            <li>Use special abilities strategically</li>
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

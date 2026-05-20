import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-vs-player',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="vs-player-container">
      <h1>Play Online</h1>
      <p>Online multiplayer component - Coming soon</p>
    </div>
  `,
  styles: [`
    .vs-player-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }
  `]
})
export class VsPlayerComponent {}

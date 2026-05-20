import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">⚡</span>
          Pokémon Battle
        </a>
        <div class="nav-links">
          <a routerLink="/" class="nav-link">Home</a>
          <a routerLink="/rules" class="nav-link">Rules</a>
          <div *ngIf="isAuthenticated$ | async as isAuth">
            <ng-container *ngIf="isAuth; else notAuth">
              <a routerLink="/menu" class="nav-link">Menu</a>
              <a routerLink="/history" class="nav-link">History</a>
              <button (click)="logout()" class="nav-link logout-btn">Logout</button>
            </ng-container>
            <ng-template #notAuth>
              <a routerLink="/login" class="nav-link">Login</a>
              <a routerLink="/register" class="nav-link register-link">Register</a>
            </ng-template>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgba(26, 26, 46, 0.95);
      border-bottom: 2px solid rgba(255, 215, 0, 0.3);
      padding: 15px 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffed4e;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo-icon {
      font-size: 1.8rem;
    }

    .nav-links {
      display: flex;
      gap: 25px;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-link {
      color: #aaa;
      text-decoration: none;
      transition: color 0.3s;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px 0;
      font-size: 1rem;
    }

    .nav-link:hover {
      color: #ffed4e;
    }

    .register-link {
      color: #ffed4e;
      border: 1px solid #ffed4e;
      padding: 8px 16px;
      border-radius: 5px;
    }

    .register-link:hover {
      background: rgba(255, 237, 74, 0.1);
    }

    .logout-btn {
      color: #ff6b6b;
      border: 1px solid #ff6b6b;
      padding: 8px 16px;
      border-radius: 5px;
    }

    .logout-btn:hover {
      background: rgba(255, 107, 107, 0.1);
      color: #ff8888;
    }
  `]
})
export class NavbarComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  ngOnInit(): void {}

  async logout(): Promise<void> {
    try {
      await this.authService.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}

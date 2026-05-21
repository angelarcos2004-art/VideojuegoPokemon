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
        <a routerLink="/" class="logo font-title">
          <img src="assets/images/logo.png" alt="Logo" class="logo-img">
          Batalla Pokémon
        </a>
        <div class="nav-links font-game">
          <a routerLink="/" class="nav-link">Inicio</a>
          <a routerLink="/rules" class="nav-link">Reglas</a>
          <ng-container *ngIf="isAuthenticated$ | async as isAuth; else notAuth">
            <ng-container *ngIf="isAuth">
              <a routerLink="/menu" class="nav-link">Menú</a>
              <a routerLink="/history" class="nav-link">Historial</a>
              <button (click)="logout()" class="nav-link logout-btn font-game">Cerrar Sesión</button>
            </ng-container>
          </ng-container>
          <ng-template #notAuth>
            <a routerLink="/login" class="nav-link">Iniciar Sesión</a>
            <a routerLink="/register" class="nav-link register-link">Registrarse</a>
          </ng-template>
          <button class="theme-toggle" (click)="toggleTheme()" title="Alternar tema">
            {{ isDarkMode ? '🌙' : '☀️' }}
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: var(--pk-red);
      border-bottom: 4px solid var(--pk-dark);
      padding: 15px 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--pk-yellow);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      text-shadow: 2px 2px 0px var(--pk-blue);
    }

    .logo-img {
      height: 40px;
      object-fit: contain;
    }

    .nav-links {
      display: flex;
      gap: 25px;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-link {
      color: var(--pk-white);
      text-decoration: none;
      transition: all 0.3s;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px 0;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .nav-link:hover {
      color: var(--pk-yellow);
      transform: translateY(-2px);
    }

    .register-link {
      color: var(--pk-yellow);
      background-color: var(--pk-blue);
      border: 2px solid var(--pk-dark);
      padding: 8px 16px;
      border-radius: 20px;
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .register-link:hover {
      background-color: var(--pk-yellow);
      color: var(--pk-blue);
    }

    .logout-btn {
      color: var(--pk-text);
      background-color: var(--pk-white);
      border: 2px solid var(--pk-dark);
      padding: 8px 16px;
      border-radius: 20px;
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .logout-btn:hover {
      background-color: #ffcccc;
      color: var(--pk-text);
    }

    .theme-toggle {
      background: var(--pk-dark);
      color: var(--pk-yellow);
      border: 2px solid var(--pk-white);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 2px 2px 0px var(--pk-white);
      transition: all 0.2s;
    }

    .theme-toggle:hover {
      transform: scale(1.1);
    }
  `]
})
export class NavbarComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  isDarkMode = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  async logout(): Promise<void> {
    try {
      await this.authService.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}

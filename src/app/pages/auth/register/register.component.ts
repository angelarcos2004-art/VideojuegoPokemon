import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="register-container">
      <div class="register-box">
        <h2>Registrarse</h2>
        <form (ngSubmit)="register()" [class.loading]="loading">
          <div class="form-group">
            <label>Usuario:</label>
            <input type="text" [(ngModel)]="username" name="username" required [disabled]="loading">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" [(ngModel)]="email" name="email" required [disabled]="loading">
          </div>
          <div class="form-group">
            <label>Contraseña:</label>
            <input type="password" [(ngModel)]="password" name="password" required [disabled]="loading" autocomplete="new-password">
          </div>
          <div class="form-group">
            <label>Confirmar Contraseña:</label>
            <input type="password" [(ngModel)]="confirmPassword" name="confirmPassword" required [disabled]="loading" autocomplete="new-password">
          </div>
          <button type="submit" class="btn-submit" [disabled]="loading">
            {{ loading ? 'Registrando...' : 'Registrarse' }}
          </button>
          <div *ngIf="error" class="error">{{ error }}</div>
        </form>
        <p class="login-link">
          ¿Ya tienes cuenta? <a routerLink="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .register-box {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 8px 8px 0px var(--pk-dark);
      color: var(--pk-text);
    }

    .register-box h2 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2rem;
      margin: 0 0 30px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      color: var(--pk-text);
      font-weight: bold;
    }

    .form-group input {
      width: 100%;
      padding: 12px;
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      background: var(--pk-light);
      color: var(--pk-text);
      box-sizing: border-box;
      font-family: var(--font-game);
      font-size: 1rem;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--pk-blue);
      box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2);
    }

    .btn-submit {
      width: 100%;
      padding: 14px;
      background-color: var(--pk-yellow);
      color: var(--pk-text);
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 4px 4px 0px var(--pk-dark);
      margin-top: 10px;
    }

    .btn-submit:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background-color: #ffdf40;
    }

    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }

    input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .error {
      color: var(--pk-red);
      background: #ffebeb;
      border: 1px solid var(--pk-red);
      padding: 10px;
      border-radius: 5px;
      margin-top: 15px;
      text-align: center;
      font-weight: bold;
    }

    .login-link {
      text-align: center;
      margin-top: 20px;
      color: var(--pk-text);
      font-weight: bold;
    }

    .login-link a {
      color: var(--pk-blue);
      text-decoration: none;
    }

    .login-link a:hover {
      text-decoration: underline;
      color: var(--pk-red);
    }
  `]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  error = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async register(): Promise<void> {
    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    if (this.password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    if (!this.username.trim()) {
      this.error = 'El nombre de usuario es requerido';
      return;
    }

    try {
      this.loading = true;
      this.error = '';
      await this.authService.signUp(this.email, this.password, this.username);
      this.router.navigate(['/menu']);
    } catch (error: any) {
      console.error('Registration error:', error);
      this.error = error.message || 'Falló el registro. Intenta con otro email.';
    } finally {
      this.loading = false;
    }
  }
}

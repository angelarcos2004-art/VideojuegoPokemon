import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="login-container">
      <div class="login-box">
        <h2>Iniciar Sesión</h2>
        <form (ngSubmit)="login()">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" [(ngModel)]="email" name="email" required>
          </div>
          <div class="form-group">
            <label>Contraseña:</label>
            <input type="password" [(ngModel)]="password" name="password" required>
          </div>
          <button type="submit" class="btn-submit">Iniciar Sesión</button>
          <div *ngIf="error" class="error">{{ error }}</div>
        </form>
        <p class="signup-link">
          ¿No tienes cuenta? <a routerLink="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .login-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      color: white;
    }

    .login-box h2 {
      text-align: center;
      color: #ffed4e;
      margin: 0 0 30px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      color: #aaa;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      box-sizing: border-box;
    }

    .form-group input:focus {
      outline: none;
      border-color: #ffed4e;
    }

    .btn-submit {
      width: 100%;
      padding: 12px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .error {
      color: #ff6b6b;
      margin-top: 15px;
      text-align: center;
    }

    .signup-link {
      text-align: center;
      margin-top: 20px;
      color: #aaa;
    }

    .signup-link a {
      color: #ffed4e;
      text-decoration: none;
    }

    .signup-link a:hover {
      text-decoration: underline;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login(): Promise<void> {
    try {
      this.error = '';
      await this.authService.signIn(this.email, this.password);
      this.router.navigate(['/menu']);
    } catch (error: any) {
      this.error = error.message || 'Login failed';
    }
  }
}

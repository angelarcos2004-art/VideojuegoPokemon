import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="login-container">
      <div class="login-box">
        <h2>Iniciar Sesión</h2>

        <div *ngIf="isLocked" class="error" style="margin-bottom: 20px;">
          ⏱️ Demasiados intentos fallidos. Inténtalo de nuevo más tarde.
        </div>

        <form [formGroup]="form" (ngSubmit)="login()" [class.loading]="loading" *ngIf="!isLocked">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" formControlName="email" [disabled]="loading" autocomplete="username">
            <div class="error-message" *ngIf="isFieldInvalid('email')">
              <span *ngIf="form.get('email')?.errors?.['required']">El email es requerido</span>
              <span *ngIf="form.get('email')?.errors?.['email']">Email inválido (ejemplo: usuario@dominio.com)</span>
            </div>
          </div>

          <div class="form-group">
            <label>Contraseña:</label>
            <input type="password" formControlName="password" [disabled]="loading" autocomplete="current-password">
            <div class="error-message" *ngIf="isFieldInvalid('password')">
              <span *ngIf="form.get('password')?.errors?.['required']">La contraseña es requerida</span>
              <span *ngIf="form.get('password')?.errors?.['minlength']">Mínimo 6 caracteres</span>
            </div>
          </div>

          <button type="submit" class="btn-submit" [disabled]="loading || !form.valid">
            {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
          </button>

          <div *ngIf="error" class="error">{{ error }}</div>
        </form>

        <p class="signup-link">
          ¿No tienes cuenta? <a routerLink="/register">Regístrate aquí</a>
        </p>

        <p class="forgot-password-link">
          <a (click)="goToPasswordRecovery()" style="cursor: pointer; color: var(--pk-blue);">¿Olvidaste tu contraseña?</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
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

    .login-box {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 8px 8px 0px var(--pk-dark);
      color: var(--pk-text);
    }

    .login-box h2 {
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
      color: #111;
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

    .signup-link {
      text-align: center;
      margin-top: 20px;
      color: var(--pk-text);
      font-weight: bold;
    }

    .signup-link a {
      color: var(--pk-blue);
      text-decoration: none;
    }

    .signup-link a:hover {
      text-decoration: underline;
      color: var(--pk-red);
    }

    .forgot-password-link {
      text-align: center;
      margin-top: 15px;
    }

    .error-message {
      color: var(--pk-red);
      font-size: 0.85rem;
      margin-top: 5px;
    }

    .form-group input.ng-invalid.ng-touched {
      border-color: var(--pk-red);
      background-color: #ffe8e8;
    }
  `]
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error = '';
  loading = false;
  isLocked = false;

  private maxAttempts = 3;
  private lockoutDurationMinutes = 3;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.checkLockout();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  private checkLockout(): void {
    const lockoutUntil = localStorage.getItem('loginLockoutUntil');
    if (lockoutUntil && new Date().getTime() < parseInt(lockoutUntil, 10)) {
      this.isLocked = true;
    } else {
      localStorage.removeItem('loginLockoutUntil');
      localStorage.setItem('loginAttempts', '0');
      this.isLocked = false;
    }
  }

  async login(): Promise<void> {
    if (this.isLocked || !this.form.valid) return;

    const { email, password } = this.form.value;
    this.loading = true;
    this.error = '';

    try {
      await this.authService.signIn(email.trim(), password.trim());

      this.ngZone.run(() => {
        localStorage.setItem('loginAttempts', '0');
        this.loading = false;
        this.router.navigate(['/menu']);
        this.cdr.detectChanges();
      });
    } catch (error: any) {
      this.ngZone.run(() => {
        this.loading = false;
        this.handleFailedAttempt(error);
        this.cdr.detectChanges();
      });
    }
  }

  private handleFailedAttempt(error: any): void {
    let attempts = parseInt(localStorage.getItem('loginAttempts') || '0', 10);
    attempts++;

    if (attempts >= this.maxAttempts) {
      const lockoutTime = new Date().getTime() + (this.lockoutDurationMinutes * 60 * 1000);
      localStorage.setItem('loginLockoutUntil', lockoutTime.toString());
      this.isLocked = true;
      this.error = '❌ Demasiados intentos fallidos. Bloqueo de 3 minutos activado.';

      setTimeout(() => this.ngZone.run(() => this.router.navigate(['/'])), 2000);
    } else {
      localStorage.setItem('loginAttempts', attempts.toString());
      this.error = `❌ Email o contraseña incorrectos. Intento ${attempts}/${this.maxAttempts}`;
    }
  }

  goToPasswordRecovery(): void {
    this.router.navigate(['/password-recovery']);
  }
}

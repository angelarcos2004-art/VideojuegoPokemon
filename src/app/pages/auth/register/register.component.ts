import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="register-container">
      <div class="register-box">
        <h2>Registrarse</h2>
        <form [formGroup]="form" (ngSubmit)="register()" [class.loading]="loading">
          <div class="form-group">
            <label>Usuario:</label>
            <input type="text" formControlName="username" [disabled]="loading">
            <div class="error-message" *ngIf="isFieldInvalid('username')">
              <span *ngIf="form.get('username')?.errors?.['required']">El usuario es requerido</span>
              <span *ngIf="form.get('username')?.errors?.['minlength']">Mínimo 3 caracteres</span>
            </div>
          </div>

          <div class="form-group">
            <label>Email:</label>
            <input type="email" formControlName="email" [disabled]="loading">
            <div class="error-message" *ngIf="isFieldInvalid('email')">
              <span *ngIf="form.get('email')?.errors?.['required']">El email es requerido</span>
              <span *ngIf="form.get('email')?.errors?.['email']">Email inválido (ejemplo: usuario@dominio.com)</span>
            </div>
          </div>

          <div class="form-group">
            <label>Contraseña:</label>
            <input type="password" formControlName="password" [disabled]="loading" autocomplete="new-password">
            <div class="password-strength" *ngIf="form.get('password')?.value">
              <div class="strength-bar" [ngClass]="getPasswordStrength()"></div>
              <span class="strength-text">{{ getPasswordStrengthText() }}</span>
            </div>
            <div class="error-message" *ngIf="isFieldInvalid('password')">
              <span *ngIf="form.get('password')?.errors?.['required']">La contraseña es requerida</span>
              <span *ngIf="form.get('password')?.errors?.['minlength']">Mínimo 8 caracteres</span>
              <span *ngIf="form.get('password')?.errors?.['pattern']">Debe incluir mayúscula, minúscula, número y símbolo (!@#$%)</span>
            </div>
          </div>

          <div class="form-group">
            <label>Confirmar Contraseña:</label>
            <input type="password" formControlName="confirmPassword" [disabled]="loading" autocomplete="new-password">
            <div class="error-message" *ngIf="isFieldInvalid('confirmPassword')">
              <span *ngIf="form.get('confirmPassword')?.errors?.['required']">Confirma la contraseña</span>
              <span *ngIf="form.errors?.['passwordMismatch']">Las contraseñas no coinciden</span>
            </div>
          </div>

          <button type="submit" class="btn-submit" [disabled]="loading || !form.valid">
            {{ loading ? 'Registrando...' : 'Registrarse' }}
          </button>

          <div *ngIf="error" class="error">{{ error }}</div>
          <div *ngIf="success" class="success">✅ {{ success }}</div>
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

    .error-message {
      color: var(--pk-red);
      font-size: 0.85rem;
      margin-top: 5px;
    }

    .form-group input.ng-invalid.ng-touched {
      border-color: var(--pk-red);
      background-color: #ffe8e8;
    }

    .password-strength {
      margin-top: 5px;
      font-size: 0.85rem;
    }

    .strength-bar {
      height: 4px;
      border-radius: 2px;
      margin-bottom: 3px;
      background: #ddd;
    }

    .strength-bar.weak {
      background: #f56565;
      width: 30%;
    }

    .strength-bar.fair {
      background: #f6ad55;
      width: 60%;
    }

    .strength-bar.good {
      background: #4299e1;
      width: 80%;
    }

    .strength-bar.strong {
      background: #48bb78;
      width: 100%;
    }

    .strength-text {
      font-size: 0.75rem;
    }

    .strength-text.weak { color: #f56565; }
    .strength-text.fair { color: #f6ad55; }
    .strength-text.good { color: #4299e1; }
    .strength-text.strong { color: #48bb78; }

    .success {
      color: #22543d;
      background: #c6f6d5;
      border: 1px solid #22543d;
      padding: 10px;
      border-radius: 5px;
      margin-top: 15px;
      text-align: center;
      font-weight: bold;
    }
  `]
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  error = '';
  success = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!password) return null;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password);
    return regex ? null : { pattern: true };
  }

  private passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getPasswordStrength(): string {
    const password = this.form.get('password')?.value || '';
    let strength = 0;

    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    if (password.length >= 12) strength++;

    if (strength <= 1) return 'weak';
    if (strength <= 2) return 'fair';
    if (strength <= 3) return 'good';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    const texts: { [key: string]: string } = {
      weak: '⚠️ Débil',
      fair: '📊 Aceptable',
      good: '✓ Buena',
      strong: '🔒 Muy fuerte'
    };
    return texts[strength] || '';
  }

  async register(): Promise<void> {
    if (!this.form.valid) return;

    const { username, email, password } = this.form.value;
    this.loading = true;
    this.error = '';
    this.success = '';

    try {
      await this.authService.signUp(email.trim(), password, username.trim());
      this.success = 'Registro exitoso. Verifica tu email para activar la cuenta. Redireccionando a login...';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } catch (error: any) {
      console.error('Registration error:', error);
      if (error.message?.includes('already registered')) {
        this.error = '❌ Este email ya está registrado. ¿Olvidaste tu contraseña?';
      } else {
        this.error = `❌ Error en el registro: ${error.message || 'Intenta con otro email'}`;
      }
    } finally {
      this.loading = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="recovery-container">
      <div class="recovery-box">
        <h2>Recuperar Contraseña</h2>

        <div *ngIf="!emailSent" class="recovery-content">
          <p class="instructions">Ingresa tu email registrado y te enviaremos un enlace para resetear tu contraseña.</p>

          <form [formGroup]="form" (ngSubmit)="sendResetEmail()">
            <div class="form-group">
              <label>Email:</label>
              <input type="email" formControlName="email" [disabled]="loading">
              <div class="error-message" *ngIf="isFieldInvalid('email')">
                <span *ngIf="form.get('email')?.errors?.['required']">El email es requerido</span>
                <span *ngIf="form.get('email')?.errors?.['email']">Email inválido</span>
              </div>
            </div>

            <button type="submit" class="btn-submit" [disabled]="loading || !form.valid">
              {{ loading ? 'Enviando...' : 'Enviar Enlace de Recuperación' }}
            </button>

            <div *ngIf="error" class="error">{{ error }}</div>
          </form>
        </div>

        <div *ngIf="emailSent" class="recovery-success">
          <div class="success-message">
            ✅ <strong>Enlace enviado exitosamente</strong>
          </div>
          <p>Hemos enviado un enlace a <strong>{{ sentEmail }}</strong></p>
          <p>Revisa tu bandeja de entrada y haz clic en el enlace para resetear tu contraseña.</p>
          <p class="note">📧 Si no ves el email, revisa tu carpeta de spam.</p>

          <button (click)="goBack()" class="btn-submit" style="margin-top: 20px;">
            Volver a Iniciar Sesión
          </button>
        </div>

        <p class="back-link">
          <a routerLink="/login">← Volver a Login</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .recovery-container {
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

    .recovery-box {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 15px;
      padding: 40px;
      width: 100%;
      max-width: 450px;
      box-shadow: 8px 8px 0px var(--pk-dark);
      color: var(--pk-text);
    }

    .recovery-box h2 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 1.8rem;
      margin: 0 0 20px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    }

    .instructions {
      text-align: center;
      color: var(--pk-text);
      margin-bottom: 20px;
      font-size: 0.95rem;
      line-height: 1.5;
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

    .error-message {
      color: var(--pk-red);
      font-size: 0.85rem;
      margin-top: 5px;
    }

    .form-group input.ng-invalid.ng-touched {
      border-color: var(--pk-red);
      background-color: #ffe8e8;
    }

    .btn-submit {
      width: 100%;
      padding: 14px;
      background-color: var(--pk-yellow);
      color: #111;
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1rem;
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

    .recovery-success {
      text-align: center;
      padding: 20px;
      background: #f0fdf4;
      border: 2px solid #22c55e;
      border-radius: 10px;
    }

    .success-message {
      color: #22c55e;
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-weight: bold;
    }

    .recovery-success p {
      color: var(--pk-text);
      margin: 10px 0;
      line-height: 1.6;
    }

    .note {
      font-size: 0.9rem;
      color: #666;
      margin-top: 15px;
    }

    .back-link {
      text-align: center;
      margin-top: 20px;
    }

    .back-link a {
      color: var(--pk-blue);
      text-decoration: none;
      font-weight: bold;
    }

    .back-link a:hover {
      text-decoration: underline;
      color: var(--pk-red);
    }
  `]
})
export class PasswordRecoveryComponent implements OnInit {
  form!: FormGroup;
  error = '';
  loading = false;
  emailSent = false;
  sentEmail = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async sendResetEmail(): Promise<void> {
    if (!this.form.valid) return;

    const { email } = this.form.value;
    this.loading = true;
    this.error = '';

    try {
      await this.authService.sendPasswordResetEmail(email.trim());
      this.sentEmail = email;
      this.emailSent = true;
    } catch (error: any) {
      console.error('Password recovery error:', error);
      this.error = `❌ Error: ${error.message || 'No pudimos enviar el enlace. Intenta más tarde.'}`;
    } finally {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}

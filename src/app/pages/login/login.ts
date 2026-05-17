import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  email = '';
  password = '';
  hidePassword = true;
  isLoading = false;

  login(): void {
    if (this.isLoading) return;

    if (!this.email || !this.password) {
      this.snackBar.open('Preencha e-mail e senha.', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    this.isLoading = true;

    this.authService.login({ email: this.email.trim(), password: this.password })
      .subscribe({
        next: (res) => {
          if (!res.success) {
            this.snackBar.open(
              res.message || 'Falha na autenticação.',
              'Fechar',
              { duration: 4000 }
            );
            return;
          }

          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigate(['/login']);
        },
        error: (err) => {
          const msg =
            err?.error?.message ||
            (err?.status === 401
              ? 'E-mail ou senha inválidos.'
              : 'Erro ao conectar à API.');

          this.snackBar.open(msg, 'Fechar', {
            duration: 4000,
          });
        },
      });
  }
}
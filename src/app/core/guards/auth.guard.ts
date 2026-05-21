import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const isAuthenticated = await firstValueFrom(authService.isAuthenticated());
    if (isAuthenticated) {
      return true;
    }
  } catch (error) {
    console.error('Auth check error:', error);
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

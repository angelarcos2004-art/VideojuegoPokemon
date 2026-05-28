import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const supabaseService = inject(SupabaseService);
  const router = inject(Router);

  try {
    const session = await supabaseService.getSession();
    if (session) {
      return true;
    }
  } catch (error) {
    console.error('Auth check error:', error);
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

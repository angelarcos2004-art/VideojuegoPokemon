import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser$ = new BehaviorSubject<any>(null);
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private supabaseService: SupabaseService) {
    this.checkAuthStatus();
  }

  async checkAuthStatus(): Promise<void> {
    try {
      const session = await this.supabaseService.getSession();
      if (session) {
        const user = await this.supabaseService.getCurrentUser();
        this.currentUser$.next(user);
        this.isAuthenticated$.next(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  }

  async signUp(email: string, password: string, username: string): Promise<void> {
    try {
      const data = await this.supabaseService.signUp(email, password, username);
      this.currentUser$.next(data.user);
      this.isAuthenticated$.next(true);
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      const data = await this.supabaseService.signIn(email, password);
      this.currentUser$.next(data.user);
      this.isAuthenticated$.next(true);
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.supabaseService.signOut();
      this.currentUser$.next(null);
      this.isAuthenticated$.next(false);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser$.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  getCurrentUserValue(): any {
    return this.currentUser$.value;
  }
}

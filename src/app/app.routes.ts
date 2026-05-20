import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent), canActivate: [authGuard] },
  { path: 'cards/collection', loadComponent: () => import('./pages/cards/collection/collection.component').then(m => m.CollectionComponent), canActivate: [authGuard] },
  { path: 'cards/deck-builder', loadComponent: () => import('./pages/cards/deck-builder/deck-builder.component').then(m => m.DeckBuilderComponent), canActivate: [authGuard] },
  { path: 'game/cpu', loadComponent: () => import('./pages/game/vs-cpu/vs-cpu.component').then(m => m.VsCpuComponent), canActivate: [authGuard] },
  { path: 'game/online', loadComponent: () => import('./pages/game/vs-player/vs-player.component').then(m => m.VsPlayerComponent), canActivate: [authGuard] },
  { path: 'history', loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent), canActivate: [authGuard] },
  { path: 'results', loadComponent: () => import('./pages/results/results.component').then(m => m.ResultsComponent), canActivate: [authGuard] },
  { path: 'rules', loadComponent: () => import('./pages/rules/rules.component').then(m => m.RulesComponent) },
  { path: '**', redirectTo: '' }
];

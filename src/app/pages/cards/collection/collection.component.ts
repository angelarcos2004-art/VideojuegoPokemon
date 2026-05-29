import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { PokemonService } from '../../../core/services/pokemon.service';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { PokemonCard } from '../../../core/models/pokemon-card.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>

    <div class="collection-container">
      <div class="page-header" style="max-width: 1200px; margin: 0 auto 20px; padding: 0 20px;">
        <a routerLink="/menu" class="btn-global-back">← Volver al Menú</a>
      </div>
      <h1>Colección de Cartas</h1>

      <div *ngIf="message" [ngClass]="{'success': messageType === 'success', 'error': messageType === 'error'}" style="max-width: 600px; margin: 0 auto 20px;">
        {{ message }}
      </div>

      
      <div class="tabs-container" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
        <button class="btn-tab" [class.active]="activeTab === 'pokemon'" (click)="activeTab = 'pokemon'; applyFiltersAndSort()">Pokémon</button>
        <button class="btn-tab" [class.active]="activeTab === 'spells'" (click)="activeTab = 'spells'; applyFiltersAndSort()">Magias y Trampas</button>
      </div>
      <div class="controls">
        <input
          type="text"
          placeholder="Buscar cartas..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="applyFiltersAndSort()"
          class="search-input"
        >
        <select [(ngModel)]="filterType" (ngModelChange)="applyFiltersAndSort()" class="sort-select" style="margin-left: 10px;">
          <option value="all">Todos los Tipos</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Eléctrico</option>
          <option value="psychic">Psíquico</option>
          <option value="ice">Hielo</option>
          <option value="rock">Roca</option>
          <option value="default">Normal/Otro</option>
        </select>
        <select [(ngModel)]="sortBy" (ngModelChange)="applyFiltersAndSort()" class="sort-select" style="margin-left: 10px;">
          <option value="name">Ordenar por Nombre</option>
          <option value="rarity">Ordenar por Rareza</option>
          <option value="attack">Ordenar por Ataque</option>
          <option value="defense">Ordenar por Defensa</option>
          <option value="generation">Ordenar por Generación</option>
          <option value="type">Ordenar por Tipo (Elemento)</option>
        </select>
      </div>

      <div *ngIf="loading" class="loading">Cargando cartas Pokémon...</div>

      <div *ngIf="!loading && cards.length > 0" class="cards-grid">
        <div *ngFor="let card of filteredCards" class="card-item">
          <div class="card">
            <img [src]="card.image" [alt]="card.name" class="card-image">
            <div class="card-info">
              <h3>{{ card.name }}</h3>
              <div class="card-stats">
                <span class="atk">⚔️ {{ card.attack }}</span>
                <span class="hp">❤️ {{ card.hp }}</span>
                <span class="def">🛡️ {{ card.defense }}</span>
              </div>
              <div class="card-meta">
                <span class="type-badge" [class]="'type-' + card.types[0]">{{ translateType(card.types[0]) }}</span>
                <span>Nvl {{ card.level || 1 }}</span>
                <span>{{ card.rarity === 'legendary' ? 'Legendario' : (card.rarity === 'rare' ? 'Raro' : 'Común') }}</span>
              </div>
              <div class="card-desc" *ngIf="card.specialAbility">
                <strong>{{ translateAbilityName(card.specialAbility.name) }}:</strong>
                {{ translateAbilityDesc(card.specialAbility.description) }}
              </div>
              <div class="card-flavor">
                {{ card.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="!loading && cards.length === 0" class="no-cards">
        No se encontraron cartas
      </div>
    </div>
  `,
  styles: [`
    .btn-tab {
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 10px 30px;
      font-size: 1.2rem;
      font-family: var(--font-title);
      color: var(--pk-text);
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 4px 4px 0px var(--pk-dark);
      margin: 0 10px;
    }
    .btn-tab.active, .btn-tab:hover {
      background: var(--pk-yellow);
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
    }
    .collection-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .collection-container h1 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    }

    .controls {
      max-width: 600px;
      margin: 0 auto 30px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    .search-input,
    .sort-select {
      flex: 1;
      min-width: 150px;
      padding: 12px;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      background: var(--pk-white);
      color: var(--pk-text);
      font-family: var(--font-game);
      font-size: 1rem;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .search-input:focus,
    .sort-select:focus {
      outline: none;
      border-color: var(--pk-blue);
      box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2), 4px 4px 0px var(--pk-dark);
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 1.5rem;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 25px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card-item {
      perspective: 1000px;
    }

    .card {
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: 6px 6px 0px var(--pk-dark);
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 8px 8px 0px var(--pk-dark);
      border-color: var(--pk-blue);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid var(--pk-dark);
    }

    .card-info {
      padding: 15px;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;
    }

    .card-info h3 {
      margin: 0;
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1.2rem;
    }

    .card-types {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }

    .type-badge {
      padding: 4px 8px;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      border: 2px solid var(--pk-dark);
      color: #111;
    }

    .type-fire { background: #ff9d5c; }
    .type-water { background: #5c9dff; }
    .type-grass { background: #5cff9d; }
    .type-electric { background: #ffed4e; }
    .type-psychic { background: #ff5c9d; }
    .type-ice { background: #9dffff; }
    .type-default { background: #cccccc; }

    .card-stats {
      display: flex;
      justify-content: space-between;
      background: var(--pk-light);
      padding: 8px;
      border-radius: 6px;
      border: 2px solid var(--pk-dark);
      font-weight: bold;
      font-size: 0.9rem;
    }
    .atk { color: #d32f2f; }
    .hp { color: #388e3c; }
    .def { color: #1976d2; }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      font-weight: bold;
      margin-top: 5px;
    }

    .card-desc {
      background: var(--pk-light);
      border-left: 4px solid var(--pk-yellow);
      padding: 8px;
      font-size: 0.8rem;
      line-height: 1.4;
      border-radius: 4px;
      margin-top: 5px;
      color: var(--pk-text);
    }
    
    .card-flavor {
      font-size: 0.75rem;
      font-style: italic;
      color: var(--pk-text);
      opacity: 0.8;
      line-height: 1.3;
      margin-top: auto;
      padding-top: 10px;
      border-top: 1px dashed var(--pk-dark);
    }

    .btn-add {
      padding: 10px;
      background: var(--pk-yellow);
      color: #111;
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-weight: bold;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: auto;
      box-shadow: 3px 3px 0px var(--pk-dark);
    }

    .btn-add:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px var(--pk-dark);
      background: #ffdf40;
    }

    .no-cards {
      text-align: center;
      padding: 60px 20px;
      color: var(--pk-text);
      opacity: 0.7;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .success,
    .error {
      margin: 0 auto 20px;
      padding: 12px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      border: 2px solid var(--pk-dark);
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .success {
      background: #5cff9d;
      color: #111;
    }

    .error {
      background: #ff9d9d;
      color: #111;
    }
  `]
})
export class CollectionComponent implements OnInit, OnDestroy {
  activeTab: 'pokemon' | 'spells' = 'pokemon';
  cards: PokemonCard[] = [];
  filteredCards: PokemonCard[] = [];
  loading = false;
  searchTerm = '';
  sortBy = 'name';
  filterType = 'all';
  currentUserId: string | null = null;
  message = '';
  messageType: 'error' | 'success' = 'error';
  private destroy$ = new Subject<void>();
  private messageTimeout: any;

  constructor(
    private pokemonService: PokemonService,
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
        }
      });

    this.loadCards();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadCards(): Promise<void> {
    try {
      this.loading = true;
      const allCards = await this.pokemonService.getAllPokemons();
      this.cards = allCards;
      this.applyFiltersAndSort();
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      this.loading = false;
    }
  }

  applyFiltersAndSort(): void {
    let filtered = this.cards.filter(card => {
      const matchesTab = this.activeTab === 'pokemon' ? (!card.cardClass || card.cardClass === 'pokemon') : (card.cardClass === 'magic' || card.cardClass === 'trap');
      if (!matchesTab) return false;
      
      const matchType = this.filterType === 'all' || (card.types && card.types[0] === this.filterType);
      if (!matchType) return false;
      
      return card.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    switch (this.sortBy) {
      case 'rarity':
        const rarityOrder = { legendary: 0, rare: 1, common: 2 };
        filtered.sort((a, b) => (rarityOrder[a.rarity as keyof typeof rarityOrder] ?? 3) - (rarityOrder[b.rarity as keyof typeof rarityOrder] ?? 3));
        break;
      case 'attack':
        filtered.sort((a, b) => b.attack - a.attack);
        break;
      case 'defense':
        filtered.sort((a, b) => b.defense - a.defense);
        break;
      case 'generation':
        // generation is effectively mapped by ID (1-151 Gen1, etc)
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'type':
        filtered.sort((a, b) => {
          const typeA = a.types && a.types[0] ? a.types[0] : '';
          const typeB = b.types && b.types[0] ? b.types[0] : '';
          return typeA.localeCompare(typeB);
        });
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    this.filteredCards = filtered;
  }

  private showMessage(text: string, type: 'error' | 'success' = 'error'): void {
    this.message = text;
    this.messageType = type;

    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }

    this.messageTimeout = setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  translateType(type: string | undefined): string {
    if (!type) return 'Normal';
    const t = type.toLowerCase();
    const translations: {[key: string]: string} = {
      'fire': 'Fuego', 'water': 'Agua', 'grass': 'Planta', 'electric': 'Eléctrico',
      'psychic': 'Psíquico', 'ice': 'Hielo', 'dragon': 'Dragón', 'dark': 'Siniestro',
      'fairy': 'Hada', 'normal': 'Normal', 'fighting': 'Lucha', 'flying': 'Volador',
      'poison': 'Veneno', 'ground': 'Tierra', 'rock': 'Roca', 'bug': 'Bicho',
      'ghost': 'Fantasma', 'steel': 'Acero'
    };
    return (translations[t] || type).toUpperCase();
  }

  translateAbilityName(name: string | undefined): string {
    if (!name) return 'Habilidad';
    const translations: {[key: string]: string} = {
      'Burn': 'Quemadura',
      'Aqua Heal': 'Cura Acuática',
      'Spore Shield': 'Escudo de Esporas',
      'Thunder Strike': 'Impactrueno',
      'Mind Read': 'Lectura Mental',
      'Freeze': 'Congelar',
      'Basic Attack': 'Ataque Básico'
    };
    return translations[name] || name;
  }

  translateAbilityDesc(desc: string | undefined): string {
    if (!desc) return 'Sin efecto';
    const translations: {[key: string]: string} = {
      'Boost attack for next turn': 'Aumenta el ataque para el próximo turno',
      'Restore 50 HP': 'Restaura 50 puntos de salud',
      'Block next attack': 'Bloquea el próximo ataque',
      'Direct damage to opponent': 'Daño directo al oponente',
      'Draw extra card': 'Roba una carta extra',
      'Reduce opponent defense': 'Reduce la defensa del oponente',
      'Standard attack': 'Ataque estándar'
    };
    return translations[desc] || desc;
  }
}

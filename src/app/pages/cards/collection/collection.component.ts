import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="collection-container">
      <h1>Colección de Cartas</h1>
      <div class="controls">
        <input
          type="text"
          placeholder="Buscar cartas..."
          [(ngModel)]="searchTerm"
          class="search-input"
        >
        <select [(ngModel)]="sortBy" class="sort-select">
          <option value="name">Ordenar por Nombre</option>
          <option value="rarity">Ordenar por Rareza</option>
          <option value="attack">Ordenar por Ataque</option>
        </select>
      </div>

      <div *ngIf="loading" class="loading">Cargando cartas Pokémon...</div>

      <div *ngIf="!loading && cards.length > 0" class="cards-grid">
        <div *ngFor="let card of filteredCards" class="card-item">
          <div class="card">
            <img [src]="card.image" [alt]="card.name" class="card-image">
            <div class="card-info">
              <h3>{{ card.name }}</h3>
              <div class="card-types">
                <span *ngFor="let type of card.types" class="type-badge" [class]="'type-' + type">
                  {{ type }}
                </span>
              </div>
              <div class="card-stats">
                <span class="stat">HP: {{ card.hp }}</span>
                <span class="stat">ATK: {{ card.attack }}</span>
                <span class="stat">DEF: {{ card.defense }}</span>
              </div>
              <div class="card-rarity" [class]="'rarity-' + card.rarity">
                {{ card.rarity }}
              </div>
              <button (click)="addToCollection(card)" class="btn-add">
                + Agregar a Colección
              </button>
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
    .collection-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .collection-container h1 {
      text-align: center;
      color: #ffed4e;
      margin-bottom: 30px;
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
      padding: 10px;
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
    }

    .search-input::placeholder {
      color: #666;
    }

    .search-input:focus,
    .sort-select:focus {
      outline: none;
      border-color: #ffed4e;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: #ffed4e;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .card-item {
      perspective: 1000px;
    }

    .card {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card:hover {
      border-color: #ffed4e;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
      transform: translateY(-5px);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: rgba(0, 0, 0, 0.3);
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
      color: #ffed4e;
      font-size: 1.1rem;
    }

    .card-types {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }

    .type-badge {
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: bold;
      background: rgba(100, 100, 100, 0.5);
    }

    .type-fire { background: rgba(255, 100, 100, 0.6); }
    .type-water { background: rgba(100, 150, 255, 0.6); }
    .type-grass { background: rgba(100, 200, 100, 0.6); }
    .type-electric { background: rgba(255, 255, 100, 0.6); color: #000; }
    .type-psychic { background: rgba(255, 150, 255, 0.6); }
    .type-ice { background: rgba(150, 200, 255, 0.6); }
    .type-default { background: rgba(100, 100, 100, 0.6); }

    .card-stats {
      display: flex;
      gap: 10px;
      font-size: 0.9rem;
      color: #aaa;
    }

    .stat {
      background: rgba(0, 0, 0, 0.3);
      padding: 3px 8px;
      border-radius: 3px;
    }

    .card-rarity {
      font-weight: bold;
      text-transform: capitalize;
      padding: 5px;
      border-radius: 3px;
      text-align: center;
      font-size: 0.85rem;
    }

    .rarity-common { background: rgba(100, 200, 100, 0.3); color: #7fff7f; }
    .rarity-rare { background: rgba(150, 150, 255, 0.3); color: #9f9fff; }
    .rarity-legendary { background: rgba(255, 215, 0, 0.3); color: #ffed4e; }

    .btn-add {
      padding: 8px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: auto;
    }

    .btn-add:hover {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
      transform: translateY(-2px);
    }

    .no-cards {
      text-align: center;
      padding: 60px 20px;
      color: #aaa;
      font-size: 1.2rem;
    }
  `]
})
export class CollectionComponent implements OnInit, OnDestroy {
  cards: PokemonCard[] = [];
  filteredCards: PokemonCard[] = [];
  loading = false;
  searchTerm = '';
  sortBy = 'name';
  currentUserId: string | null = null;
  private destroy$ = new Subject<void>();

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
      const randomCards = await this.pokemonService.getRandomPokemons(20);
      this.cards = randomCards;
      this.applyFiltersAndSort();
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      this.loading = false;
    }
  }

  applyFiltersAndSort(): void {
    let filtered = this.cards.filter(card =>
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    switch (this.sortBy) {
      case 'rarity':
        const rarityOrder = { legendary: 0, rare: 1, common: 2 };
        filtered.sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
        break;
      case 'attack':
        filtered.sort((a, b) => b.attack - a.attack);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    this.filteredCards = filtered;
  }

  async addToCollection(card: PokemonCard): Promise<void> {
    if (!this.currentUserId) {
      console.error('User not authenticated');
      return;
    }

    try {
      await this.supabaseService.addToCollection(this.currentUserId, card.id);
      alert(`${card.name} added to collection!`);
    } catch (error) {
      console.error('Failed to add card to collection:', error);
      alert('Failed to add card');
    }
  }
}

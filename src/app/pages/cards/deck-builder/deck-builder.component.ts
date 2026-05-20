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

interface DeckCard {
  card: PokemonCard;
  quantity: number;
}

const MAX_DECK_SIZE = 20;
const MAX_CARDS_PER_TYPE = 2;

@Component({
  selector: 'app-deck-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="deck-builder-container">
      <h1>Deck Builder</h1>
      <div class="builder-content">
        <div class="available-cards">
          <h2>Available Cards</h2>
          <div class="controls">
            <input
              type="text"
              placeholder="Search cards..."
              [(ngModel)]="searchTerm"
              class="search-input"
            >
          </div>
          <div *ngIf="loading" class="loading">Loading cards...</div>
          <div *ngIf="!loading" class="cards-list">
            <div *ngFor="let card of filteredCards" class="card-option" (click)="addCardToDeck(card)">
              <img [src]="card.image" [alt]="card.name" class="small-card-image">
              <div class="card-details">
                <h4>{{ card.name }}</h4>
                <p>ATK: {{ card.attack }} | DEF: {{ card.defense }}</p>
                <span class="type-badge" [class]="'type-' + card.types[0]">{{ card.types[0] }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="deck-preview">
          <h2>Current Deck ({{ deckSize }}/{{ MAX_DECK_SIZE }})</h2>
          <div class="deck-bar" [style.width.%]="(deckSize / MAX_DECK_SIZE) * 100"></div>

          <div *ngIf="deck.length > 0" class="deck-list">
            <div *ngFor="let item of deck; let i = index" class="deck-item">
              <div class="deck-card-info">
                <h5>{{ item.card.name }}</h5>
                <span class="quantity">x{{ item.quantity }}</span>
              </div>
              <div class="deck-actions">
                <button (click)="removeCardFromDeck(i)" class="btn-remove">-</button>
              </div>
            </div>
          </div>
          <div *ngIf="deck.length === 0" class="empty-deck">
            Select cards to build your deck (20 cards max)
          </div>

          <div class="deck-controls">
            <button
              (click)="clearDeck()"
              class="btn-control btn-clear"
              [disabled]="deck.length === 0"
            >
              Clear Deck
            </button>
            <button
              (click)="saveDeck()"
              class="btn-control btn-save"
              [disabled]="deckSize !== MAX_DECK_SIZE"
            >
              Save Deck
            </button>
          </div>

          <div *ngIf="deckSaveMessage" [ngClass]="{'success': !deckSaveError, 'error': deckSaveError}">
            {{ deckSaveMessage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .deck-builder-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 40px 20px;
      color: white;
    }

    .deck-builder-container h1 {
      text-align: center;
      color: #ffed4e;
      margin-bottom: 30px;
    }

    .builder-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 900px) {
      .builder-content {
        grid-template-columns: 1fr;
      }
    }

    .available-cards,
    .deck-preview {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 10px;
      padding: 20px;
    }

    .available-cards h2,
    .deck-preview h2 {
      color: #ffed4e;
      margin-top: 0;
    }

    .controls {
      margin-bottom: 20px;
    }

    .search-input {
      width: 100%;
      padding: 10px;
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      box-sizing: border-box;
    }

    .search-input:focus {
      outline: none;
      border-color: #ffed4e;
    }

    .loading {
      text-align: center;
      color: #ffed4e;
      padding: 20px;
    }

    .cards-list {
      max-height: 600px;
      overflow-y: auto;
      border: 1px solid rgba(255, 215, 0, 0.1);
      border-radius: 5px;
      padding: 10px;
    }

    .card-option {
      display: flex;
      gap: 10px;
      padding: 10px;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 215, 0, 0.1);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      align-items: center;
    }

    .card-option:hover {
      background: rgba(255, 215, 0, 0.1);
      border-color: #ffed4e;
    }

    .small-card-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 3px;
    }

    .card-details {
      flex: 1;
      margin: 0;
    }

    .card-details h4 {
      margin: 0 0 5px;
      color: #ffed4e;
      font-size: 0.95rem;
    }

    .card-details p {
      margin: 0 0 5px;
      color: #aaa;
      font-size: 0.85rem;
    }

    .type-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: bold;
    }

    .type-fire { background: rgba(255, 100, 100, 0.6); }
    .type-water { background: rgba(100, 150, 255, 0.6); }
    .type-grass { background: rgba(100, 200, 100, 0.6); }
    .type-electric { background: rgba(255, 255, 100, 0.6); color: #000; }
    .type-psychic { background: rgba(255, 150, 255, 0.6); }
    .type-ice { background: rgba(150, 200, 255, 0.6); }
    .type-default { background: rgba(100, 100, 100, 0.6); }

    .deck-bar {
      height: 6px;
      background: #ffed4e;
      border-radius: 3px;
      margin-bottom: 20px;
      transition: width 0.3s;
    }

    .deck-list {
      max-height: 400px;
      overflow-y: auto;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 215, 0, 0.1);
      border-radius: 5px;
      padding: 10px;
    }

    .deck-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 5px;
      margin-bottom: 8px;
      border: 1px solid rgba(255, 215, 0, 0.1);
    }

    .deck-card-info {
      flex: 1;
    }

    .deck-card-info h5 {
      margin: 0 0 3px;
      color: #ffed4e;
      font-size: 0.95rem;
    }

    .quantity {
      color: #aaa;
      font-size: 0.85rem;
    }

    .deck-actions {
      display: flex;
      gap: 5px;
    }

    .btn-remove {
      padding: 5px 10px;
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-remove:hover {
      background: #ff8888;
    }

    .empty-deck {
      text-align: center;
      padding: 40px 20px;
      color: #aaa;
    }

    .deck-controls {
      display: flex;
      gap: 10px;
    }

    .btn-control {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-clear {
      background: #666;
      color: white;
    }

    .btn-clear:hover:not(:disabled) {
      background: #888;
    }

    .btn-save {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #1a1a2e;
    }

    .btn-save:hover:not(:disabled) {
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .btn-control:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .success,
    .error {
      margin-top: 15px;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
    }

    .success {
      background: rgba(100, 200, 100, 0.3);
      color: #7fff7f;
    }

    .error {
      background: rgba(255, 100, 100, 0.3);
      color: #ff6b6b;
    }
  `]
})
export class DeckBuilderComponent implements OnInit, OnDestroy {
  availableCards: PokemonCard[] = [];
  filteredCards: PokemonCard[] = [];
  deck: DeckCard[] = [];
  loading = false;
  searchTerm = '';
  deckSaveMessage = '';
  deckSaveError = false;
  currentUserId: string | null = null;
  MAX_DECK_SIZE = MAX_DECK_SIZE;
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
      const randomCards = await this.pokemonService.getRandomPokemons(30);
      this.availableCards = randomCards;
      this.applyFilter();
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      this.loading = false;
    }
  }

  applyFilter(): void {
    this.filteredCards = this.availableCards.filter(card =>
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get deckSize(): number {
    return this.deck.reduce((sum, item) => sum + item.quantity, 0);
  }

  addCardToDeck(card: PokemonCard): void {
    if (this.deckSize >= MAX_DECK_SIZE) {
      alert('Deck is full! Maximum 20 cards allowed.');
      return;
    }

    const existingCard = this.deck.find(item => item.card.id === card.id);
    if (existingCard) {
      if (existingCard.quantity >= MAX_CARDS_PER_TYPE) {
        alert(`You can only add up to ${MAX_CARDS_PER_TYPE} copies of ${card.name}`);
        return;
      }
      existingCard.quantity++;
    } else {
      this.deck.push({ card, quantity: 1 });
    }
  }

  removeCardFromDeck(index: number): void {
    if (this.deck[index].quantity > 1) {
      this.deck[index].quantity--;
    } else {
      this.deck.splice(index, 1);
    }
  }

  clearDeck(): void {
    if (confirm('Are you sure you want to clear your deck?')) {
      this.deck = [];
    }
  }

  async saveDeck(): Promise<void> {
    if (this.deckSize !== MAX_DECK_SIZE) {
      alert('Your deck must contain exactly 20 cards');
      return;
    }

    if (!this.currentUserId) {
      alert('You must be logged in to save a deck');
      return;
    }

    try {
      const deckName = prompt('Enter deck name:');
      if (!deckName) return;

      const cards = this.deck.flatMap(item =>
        Array(item.quantity).fill(item.card)
      );

      await this.supabaseService.saveDeck(this.currentUserId, deckName, cards);
      this.deckSaveMessage = 'Deck saved successfully!';
      this.deckSaveError = false;
      this.clearDeck();

      setTimeout(() => {
        this.deckSaveMessage = '';
      }, 3000);
    } catch (error) {
      this.deckSaveMessage = 'Failed to save deck';
      this.deckSaveError = true;
      console.error('Failed to save deck:', error);
    }
  }
}

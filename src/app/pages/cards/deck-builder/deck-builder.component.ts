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
      <h1>Constructor de Mazo</h1>
      <div class="builder-content">
        <div class="available-cards">
          <h2>Cartas Disponibles</h2>
          <div class="controls">
            <input
              type="text"
              placeholder="Buscar cartas..."
              [(ngModel)]="searchTerm"
              class="search-input"
            >
          </div>
          <div *ngIf="loading" class="loading">Cargando cartas...</div>
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
          <h2>Mazo Actual ({{ deckSize }}/{{ MAX_DECK_SIZE }})</h2>
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
            Selecciona cartas para construir tu mazo (máximo 20 cartas)
          </div>

          <div *ngIf="message" [ngClass]="{'success': messageType === 'success', 'error': messageType === 'error'}">
            {{ message }}
          </div>

          <div class="deck-controls">
            <button
              (click)="clearDeck()"
              class="btn-control btn-clear"
              [disabled]="deck.length === 0"
            >
              Limpiar Mazo
            </button>
            <button
              (click)="saveDeck()"
              class="btn-control btn-save"
              [disabled]="deckSize !== MAX_DECK_SIZE"
            >
              Guardar Mazo
            </button>
          </div>

          <div *ngIf="deckSaveMessage" [ngClass]="{'success': !deckSaveError, 'error': deckSaveError}">
            {{ deckSaveMessage }}
          </div>

          <!-- Modal de Guardado -->
          <div *ngIf="showSaveModal" class="modal-overlay">
            <div class="modal-content">
              <h3>Nombrar Mazo</h3>
              <p>Escribe un nombre increíble para tu mazo (máximo 20 caracteres):</p>
              <input type="text" [(ngModel)]="newDeckName" placeholder="Mi Mazo Invencible" maxlength="20" class="search-input" style="width: 100%; margin-bottom: 20px;">
              <div class="modal-actions">
                <button (click)="showSaveModal = false" class="btn-control btn-cancel">Cancelar</button>
                <button (click)="confirmSaveDeck()" class="btn-control btn-save" [disabled]="!newDeckName.trim()">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .deck-builder-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      padding: 40px 20px;
      color: var(--pk-text);
    }

    .deck-builder-container h1 {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
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
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 6px 6px 0px var(--pk-dark);
    }

    .available-cards h2,
    .deck-preview h2 {
      color: var(--pk-blue);
      font-family: var(--font-title);
      margin-top: 0;
      border-bottom: 3px solid var(--pk-dark);
      padding-bottom: 10px;
    }

    .controls {
      margin-bottom: 20px;
      margin-top: 10px;
    }

    .search-input {
      width: 100%;
      padding: 12px;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      background: var(--pk-light);
      color: var(--pk-text);
      font-family: var(--font-game);
      font-size: 1rem;
      box-sizing: border-box;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .search-input:focus {
      outline: none;
      border-color: var(--pk-blue);
      box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2), 4px 4px 0px var(--pk-dark);
    }

    .loading {
      text-align: center;
      color: var(--pk-red);
      font-family: var(--font-title);
      padding: 20px;
    }

    .cards-list {
      max-height: 600px;
      overflow-y: auto;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 10px;
      background: var(--pk-light);
    }

    .card-option {
      display: flex;
      gap: 15px;
      padding: 10px;
      margin-bottom: 10px;
      background: var(--pk-white);
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      align-items: center;
      box-shadow: 3px 3px 0px var(--pk-dark);
    }

    .card-option:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px var(--pk-dark);
      border-color: var(--pk-blue);
    }

    .small-card-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 5px;
      border: 2px solid var(--pk-dark);
    }

    .card-details {
      flex: 1;
      margin: 0;
    }

    .card-details h4 {
      margin: 0 0 5px;
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1rem;
    }

    .card-details p {
      margin: 0 0 5px;
      color: var(--pk-text);
      opacity: 0.8;
      font-weight: bold;
      font-size: 0.85rem;
    }

    .type-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.75rem;
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

    .deck-bar {
      height: 10px;
      background: var(--pk-red);
      border-radius: 5px;
      border: 2px solid var(--pk-dark);
      margin-bottom: 20px;
      margin-top: 15px;
      transition: width 0.3s;
    }

    .deck-list {
      max-height: 400px;
      overflow-y: auto;
      margin-bottom: 20px;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 10px;
      background: var(--pk-light);
    }

    .deck-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: var(--pk-white);
      border-radius: 8px;
      margin-bottom: 8px;
      border: 2px solid var(--pk-dark);
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .deck-card-info {
      flex: 1;
    }

    .deck-card-info h5 {
      margin: 0 0 3px;
      color: var(--pk-blue);
      font-family: var(--font-title);
      font-size: 1rem;
    }

    .quantity {
      color: var(--pk-text);
      font-weight: bold;
      font-size: 0.9rem;
      background: var(--pk-yellow);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid var(--pk-dark);
    }

    .deck-actions {
      display: flex;
      gap: 5px;
    }

    .btn-remove {
      padding: 5px 12px;
      background: var(--pk-red);
      color: white;
      border: 2px solid var(--pk-dark);
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s;
      box-shadow: 2px 2px 0px var(--pk-dark);
    }

    .btn-remove:hover {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0px var(--pk-dark);
      background: #ff4444;
    }

    .empty-deck {
      text-align: center;
      padding: 40px 20px;
      color: var(--pk-text);
      opacity: 0.7;
      font-weight: bold;
    }

    .deck-controls {
      display: flex;
      gap: 15px;
    }

    .btn-control {
      flex: 1;
      padding: 12px;
      border: 2px solid var(--pk-dark);
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .btn-clear {
      background: #e0e0e0;
      color: #111;
    }

    .btn-clear:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background: #cccccc;
    }

    .btn-save {
      background: var(--pk-yellow);
      color: #111;
    }

    .btn-save:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--pk-dark);
      background: #ffdf40;
    }

    .btn-control:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .success,
    .error {
      margin-top: 15px;
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

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .modal-content {
      background: var(--pk-light);
      padding: 30px;
      border-radius: 15px;
      border: 4px solid var(--pk-dark);
      width: 90%;
      max-width: 400px;
      box-shadow: 8px 8px 0px var(--pk-dark);
      text-align: center;
    }

    .modal-content h3 {
      color: var(--pk-red);
      font-family: var(--font-title);
      font-size: 1.5rem;
      margin-top: 0;
    }

    .modal-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
    }

    .btn-cancel {
      background: #e0e0e0;
      color: #111;
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
  showSaveModal = false;
  newDeckName = '';
  currentUserId: string | null = null;
  MAX_DECK_SIZE = MAX_DECK_SIZE;
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
      this.availableCards = allCards;
      this.applyFilter();
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      this.loading = false;
    }
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCards = this.availableCards.filter(card =>
      card.name.toLowerCase().includes(term) || card.types.some(t => t.includes(term))
    );
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

  get deckSize(): number {
    return this.deck.reduce((sum, item) => sum + item.quantity, 0);
  }

  addCardToDeck(card: PokemonCard): void {
    if (this.deckSize >= MAX_DECK_SIZE) {
      this.showMessage('¡El mazo está lleno! Máximo 20 cartas permitidas.');
      return;
    }

    const existingCard = this.deck.find(item => item.card.id === card.id);
    if (existingCard) {
      if (existingCard.quantity >= MAX_CARDS_PER_TYPE) {
        this.showMessage(`Sólo puedes agregar hasta ${MAX_CARDS_PER_TYPE} copias de ${card.name}`);
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

  saveDeck(): void {
    if (this.deckSize !== MAX_DECK_SIZE) {
      this.showMessage('Tu mazo debe contener exactamente 20 cartas para guardarlo.');
      return;
    }

    if (!this.currentUserId) {
      this.showMessage('Debes iniciar sesión para guardar un mazo.');
      return;
    }

    this.newDeckName = '';
    this.showSaveModal = true;
  }

  async confirmSaveDeck(): Promise<void> {
    if (!this.newDeckName.trim() || !this.currentUserId) return;
    this.showSaveModal = false;

    try {
      const cards = this.deck.flatMap(item =>
        Array(item.quantity).fill(item.card)
      );

      await this.supabaseService.saveDeck(this.currentUserId, this.newDeckName.trim(), cards);
      this.deckSaveMessage = '¡Mazo guardado exitosamente!';
      this.deckSaveError = false;
      this.newDeckName = '';

      setTimeout(() => {
        this.deckSaveMessage = '';
      }, 3000);
    } catch (error) {
      this.deckSaveMessage = 'Error al guardar el mazo. Inténtalo de nuevo.';
      this.deckSaveError = true;
      console.error('Failed to save deck:', error);
    }
  }
}

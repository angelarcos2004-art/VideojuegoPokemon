import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { GameService } from '../../../core/services/game.service';
import { PokemonService } from '../../../core/services/pokemon.service';
import { SupabaseService } from '../../../core/services/supabase.service';
import { AuthService } from '../../../core/services/auth.service';
import { SqliteService } from '../../../core/services/sqlite.service';
import { GameState } from '../../../core/models/game-state.model';
import { PokemonCard } from '../../../core/models/pokemon-card.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vs-cpu',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="game-container" *ngIf="gameState">
      
      <!-- Card Inspector -->
      <div *ngIf="hoveredCard" class="card-inspector">
        <img [src]="hoveredCard.image" [alt]="hoveredCard.name" class="inspector-image">
        <div class="inspector-details">
          <h3>{{ hoveredCard.name }}</h3>
          <div class="inspector-stats">
            <span class="atk">⚔️ {{ hoveredCard.attack }}</span>
            <span class="hp">❤️ {{ hoveredCard.hp }}</span>
            <span class="def">🛡️ {{ hoveredCard.defense }}</span>
          </div>
          <div class="inspector-meta">
            <span class="type-badge">{{ translateType(hoveredCard.types[0]) }}</span>
            <span>Nvl {{ hoveredCard.level }}</span>
            <span>{{ hoveredCard.rarity === 'legendary' ? 'Legendario' : (hoveredCard.rarity === 'rare' ? 'Raro' : 'Común') }}</span>
          </div>
          <div class="inspector-desc">
            <strong>{{ translateAbilityName(hoveredCard.specialAbility?.name) }}:</strong>
            {{ translateAbilityDesc(hoveredCard.specialAbility?.description) }}
          </div>
          <div class="inspector-flavor">
            {{ hoveredCard.description }}
          </div>
          <!-- Activate button if face-down spell in zone -->
          <button *ngIf="hoveredCard.isFaceDown && gameState.phase === 'main' && gameState.currentTurn === 'player1'" 
                  class="btn-action" style="margin-top: 10px; width: 100%;" 
                  (click)="activateSpell(gameState.player1.spellZone.indexOf(hoveredCard))">
            Activar Mágica/Trampa
          </button>
        </div>
      </div>

      
      <!-- Custom Surrender Modal -->
      <div *ngIf="showSurrenderModal" class="custom-modal-overlay">
        <div class="custom-modal">
          <h2>⚠️ Advertencia</h2>
          <p>¿Estás seguro de que quieres abandonar la partida?</p>
          <p class="modal-warning">Contará como una derrota automática.</p>
          <div class="modal-actions">
            <button (click)="confirmSurrender()" class="btn-action btn-danger">Sí, Rendirse</button>
            <button (click)="showSurrenderModal = false" class="btn-action">Cancelar</button>
          </div>
        </div>
      </div>

      <!-- Toast Messages -->
      <div *ngIf="toastMessage" class="toast-message">
        {{ toastMessage }}
      </div>

      <!-- Top HUD (CPU info) -->
      <div class="hud cpu-hud">
        <div class="hud-info">
          <h2>{{ gameState.player2.username }}</h2>
          <div class="hp-bar-container">
            <div class="hp-bar" [style.width.%]="(gameState.player2.hp / 4000) * 100"></div>
          </div>
          <span class="hp-text">{{ gameState.player2.hp }}/4000</span>
        </div>
      </div>

      <!-- Playmat Area -->
      <div class="playmat-wrapper">
        <div class="playmat">
          
          <!-- CPU Row -->
          <div class="mat-half cpu-half">
            <!-- Top row for CPU -->
            <div class="mat-row cpu-monsters">
              <div class="mat-zone graveyard-zone">
                <div class="zone-label">Cementerio ({{ gameState.player2.graveyard.length }})</div>
                <div *ngIf="gameState.player2.graveyard.length > 0" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none;">
                  <img [src]="gameState.player2.graveyard[gameState.player2.graveyard.length-1].image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              </div>
              
              <div class="monster-zones">
                <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot">
                  <div *ngIf="gameState.player2.field[slot]"
                       class="field-card pk-card-visual interactive"
                       [ngClass]="[
                         'card-type-' + (gameState.player2.field[slot]?.types?.[0] || 'default'),
                         cpuAnimations[slot] || ''
                       ]"
                       [class.targetable]="isSelectingTarget"
                       [class.exhausted]="gameState.player2.field[slot].hasAttacked || gameState.player2.field[slot].hasUsedAbility"
                       (click)="selectTarget(slot)"
                       (mouseenter)="hoveredCard = gameState.player2.field[slot]" (mouseleave)="hoveredCard = null">
                    <img [src]="gameState.player2.field[slot].image" [alt]="gameState.player2.field[slot].name" class="card-image">
                    <div class="card-name">{{ gameState.player2.field[slot].name }}</div>
                    <div class="card-stats">
                      <span class="atk">⚔️ {{ gameState.player2.field[slot].attack }}</span>
                      <span class="hp">❤️ {{ gameState.player2.field[slot].hp }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mat-zone deck-zone">
                <div class="deck-stack"></div>
                <div class="zone-label">Mazo ({{ gameState.player2.deck.length }})</div>
              </div>
            </div>

            <!-- Bottom row for CPU Spells/Traps -->
            <div class="mat-row cpu-spells">
              <div class="mat-zone extra-zone">
                <div class="zone-label">Extra ({{ gameState.player2.extraDeck.length }})</div>
                <div *ngIf="gameState.player2.extraDeck.length > 0" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none;">
                  <img src="/assets/images/fondo_carta_pokemon.jpg" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                </div>
              </div>
              <div class="monster-zones spell-zones">
                <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot spell-slot">
                  <div *ngIf="gameState.player2.spellZone[slot] as spellCard" 
                       class="field-card" 
                       [class.face-down]="spellCard.isFaceDown"
                       [class.pk-card-visual]="!spellCard.isFaceDown"
                       (mouseenter)="hoveredCard = spellCard" (mouseleave)="hoveredCard = null">
                     <img *ngIf="!spellCard.isFaceDown" [src]="spellCard.image" class="card-image" style="height: 100%;">
                  </div>
                </div>
              </div>
              <div class="mat-zone field-zone">
                <div class="zone-label">Campo</div>
                <div *ngIf="gameState.player2.fieldCard" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none; border-color: var(--pk-red);">
                  <img [src]="gameState.player2.fieldCard.image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              </div>
            </div>
          </div>

          <!-- Divider / Phase Info -->
          <div class="mat-divider">
            <div class="phase-badge">{{ getCurrentPhaseText() }}</div>
            <div class="turn-badge">Turno {{ gameState.turnNumber }} - {{ gameState.currentTurn === 'player1' ? 'Tu Turno' : 'CPU Turno' }}</div>
          </div>

          <!-- Player Row -->
          <div class="mat-half player-half">
            <!-- Top row for Player Spells/Traps -->
            <div class="mat-row player-spells">
              <div class="mat-zone field-zone interactive" (click)="placeFieldCard()" [class.highlight-slot]="selectedHandCardIndex !== null && isSelectedFieldSpell()">
                <div class="zone-label">Campo</div>
                <div *ngIf="gameState.player1.fieldCard" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none; border-color: var(--pk-yellow);">
                  <img [src]="gameState.player1.fieldCard.image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              </div>
              <div class="monster-zones spell-zones">
                <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot spell-slot" (click)="!gameState.player1.spellZone[slot] && placeCardInSlot(slot, true)" [class.highlight-slot]="selectedHandCardIndex !== null && isSelectedSpell()">
                  <div *ngIf="gameState.player1.spellZone[slot] as spellCard" 
                       class="field-card interactive" 
                       [class.face-down]="spellCard.isFaceDown"
                       [class.pk-card-visual]="!spellCard.isFaceDown"
                       (click)="$event.stopPropagation(); activateSpell(slot)"
                       (mouseenter)="hoveredCard = spellCard" (mouseleave)="hoveredCard = null">
                     <img *ngIf="!spellCard.isFaceDown" [src]="spellCard.image" class="card-image" style="height: 100%;">
                  </div>
                </div>
              </div>
              <div class="mat-zone extra-zone interactive" (click)="openExtraDeck()">
                <div class="zone-label">Extra ({{ gameState.player1.extraDeck.length }})</div>
                <div *ngIf="gameState.player1.extraDeck.length > 0" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none;">
                  <img src="/assets/images/fondo_carta_pokemon.jpg" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                </div>
              </div>
            </div>

            <!-- Bottom row for Player -->
            <div class="mat-row player-monsters">
              <div class="mat-zone deck-zone">
                <div class="deck-stack"></div>
                <div class="zone-label">Mazo ({{ gameState.player1.deck.length }})</div>
              </div>
              
              <div class="monster-zones">
                <div *ngFor="let slot of [0,1,2,3,4]" class="monster-slot" (click)="!gameState.player1.field[slot] && placeCardInSlot(slot, false)" [class.highlight-slot]="selectedHandCardIndex !== null && !isSelectedSpell()">
                  <div *ngIf="gameState.player1.field[slot]"
                       class="field-card pk-card-visual interactive"
                       [ngClass]="[
                         'card-type-' + (gameState.player1.field[slot]?.types?.[0] || 'default'),
                         playerAnimations[slot] || ''
                       ]"
                       [class.selected]="selectedAttackerIndex === slot"
                       [class.exhausted]="gameState.player1.field[slot].hasAttacked || gameState.player1.field[slot].hasUsedAbility"
                       (click)="$event.stopPropagation(); selectFieldCard(slot)"
                       (mouseenter)="hoveredCard = gameState.player1.field[slot]" (mouseleave)="hoveredCard = null">
                    <img [src]="gameState.player1.field[slot].image" [alt]="gameState.player1.field[slot].name" class="card-image">
                    <div class="card-name">{{ gameState.player1.field[slot].name }}</div>
                    <div class="card-stats">
                      <span class="atk">⚔️ {{ gameState.player1.field[slot].attack }}</span>
                      <span class="hp">❤️ {{ gameState.player1.field[slot].hp }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mat-zone graveyard-zone">
                <div class="zone-label">Cementerio ({{ gameState.player1.graveyard.length }})</div>
                <div *ngIf="gameState.player1.graveyard.length > 0" class="field-card pk-card-visual" style="position: absolute; width: 100%; height: 100%; pointer-events: none;">
                  <img [src]="gameState.player1.graveyard[gameState.player1.graveyard.length-1].image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Winner Overlay -->
        <div *ngIf="gameState.winner" class="winner-overlay">
          <div class="winner-message">
            <h2>{{ gameState.winner === 'player1' ? '¡Ganaste!' : '¡Perdiste!' }}</h2>
            <button (click)="endGame()" class="btn-action">Volver al Menú</button>
          </div>
        </div>

        <!-- Extra Deck Modal -->
        <div *ngIf="showExtraDeckModal" class="winner-overlay" style="z-index: 101;" (click)="closeExtraDeck()">
          <div class="winner-message" style="max-width: 80%; background: var(--pk-light);" (click)="$event.stopPropagation()">
            <h2 style="font-size: 2rem; margin-bottom: 20px;">Tu Deck Extra (Evoluciones)</h2>
            <p *ngIf="gameState.player1.extraDeck.length === 0" style="margin-bottom: 20px; font-family: var(--font-text);">No tienes evoluciones disponibles.</p>
            
            <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px;">
               <div *ngFor="let card of gameState.player1.extraDeck; let i = index" 
                    class="field-card pk-card-visual interactive" 
                    [ngClass]="'card-type-' + (card.types[0] || 'default')"
                    style="position: relative; width: 140px; height: 200px;"
                    (click)="selectExtraCardToEvolve(i)"
                    (mouseenter)="hoveredCard = card" (mouseleave)="hoveredCard = null">
                 <img [src]="card.image" class="card-image" style="width: 100%; height: 60%; object-fit: cover; border-bottom: 2px solid var(--pk-dark);">
                 <div class="card-name" style="font-size: 0.8rem; padding: 5px;">{{ card.name }} (Nvl {{ card.level }})</div>
                 <div style="font-size: 0.7rem; text-align: center; font-family: var(--font-text);">Click para Evolucionar</div>
               </div>
            </div>
            
            <button (click)="closeExtraDeck()" class="btn-action btn-danger">Cerrar</button>
          </div>
        </div>
      </div>

      <!-- Bottom HUD (Player Info & Actions) -->
      <div class="hud player-hud">
        <div class="hud-info">
          <h2>{{ gameState.player1.username }}</h2>
          <div class="hp-bar-container">
            <div class="hp-bar" [style.width.%]="(gameState.player1.hp / 4000) * 100"></div>
          </div>
          <span class="hp-text">{{ gameState.player1.hp }}/4000</span>
        </div>
        
        <div *ngIf="gameState.currentTurn === 'player1' && !gameState.winner" class="player-actions">
          <button (click)="playPhase()" class="btn-action phase-btn">Siguiente Fase ➔</button>
           <button (click)="surrender()" class="btn-action btn-danger" style="margin-left: 10px;">Rendirse</button>
        </div>
      </div>

      <!-- Player Hand -->
      <div class="hand-container">
        <div class="hand-cards">
          <div *ngFor="let card of gameState.player1.hand; let i = index"
               class="hand-card anim-draw pk-card-visual interactive"
               [class.selected-for-play]="selectedHandCardIndex === i"
               [style.animation-delay]="(i * 0.1) + 's'"
               [ngClass]="'card-type-' + (card?.types?.[0] || 'default')"
               (click)="playCardFromHand(i)"
               (mouseenter)="hoveredCard = card" (mouseleave)="hoveredCard = null">
            <img [src]="card.image" [alt]="card.name" class="card-image">
            <div class="card-name">{{ card.name }}</div>
            <div class="card-stats">
              <span class="atk">⚔️ {{ card.attack }}</span>
              <span class="hp">❤️ {{ card.hp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Screen -->
    <div *ngIf="!gameState" class="loading-screen">
      <div class="loader"></div>
      <h2>Conectando al Tapete de Batalla...</h2>
      <p style="color: rgba(255,255,255,0.5); font-family: monospace; font-size: 1rem; margin-top: 10px;">{{ debugLog }}</p>
    </div>
  `,
  styles: [`
    .game-container {
      min-height: calc(100vh - 60px);
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      flex-direction: column;
      color: var(--pk-text);
      overflow: hidden;
      position: relative;
    }

    .toast-message {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--pk-yellow);
      color: #111;
      padding: 15px 30px;
      font-family: var(--font-title);
      font-size: 1.5rem;
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      box-shadow: 6px 6px 0px var(--pk-dark);
      z-index: 1000;
      animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes pop-in {
      0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }

    .hud {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
      background: var(--pk-white);
      border-bottom: 4px solid var(--pk-dark);
      z-index: 10;
    }
    .player-hud {
      border-bottom: none;
      border-top: 4px solid var(--pk-dark);
    }
    
    .hud-info {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .hud-info h2 {
      margin: 0;
      font-family: var(--font-title);
      color: var(--pk-yellow);
      font-size: 1.5rem;
      text-transform: uppercase;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }
    
    .cpu-hud h2 { color: var(--pk-red); }
    .player-hud h2 { color: var(--pk-blue); }

    .hp-bar-container {
      width: 300px;
      height: 25px;
      background: var(--pk-white);
      border-radius: 8px;
      border: 3px solid var(--pk-dark);
      overflow: hidden;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);
    }

    .hp-bar {
      height: 100%;
      background: var(--pk-red);
      transition: width 0.3s ease;
    }
    .player-hud .hp-bar { background: var(--pk-blue); }

    .hp-text {
      font-weight: bold;
      font-family: var(--font-title);
      font-size: 1.2rem;
      color: var(--pk-text);
    }

    .playmat-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .playmat {
      width: 100%;
      max-width: 1200px;
      background: var(--pk-light);
      border-radius: 20px;
      border: 6px solid var(--pk-dark);
      box-shadow: 10px 10px 0px var(--pk-dark);
      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 20px;
      position: relative;
    }

    .playmat::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(var(--pk-dark) 2px, transparent 2px);
      background-size: 30px 30px;
      opacity: 0.1;
      border-radius: 14px;
      pointer-events: none;
    }

    .mat-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      z-index: 1;
    }

    .monster-zones {
      display: flex;
      gap: 15px;
      flex: 1;
      justify-content: center;
    }

    .monster-slot {
      width: 130px;
      height: 180px;
      background: var(--pk-white);
      border: 4px dashed var(--pk-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.2s ease;
      opacity: 0.8;
    }

    .player-row .monster-slot { border-color: var(--pk-blue); background: rgba(0, 198, 255, 0.1); }
    .cpu-row .monster-slot { border-color: var(--pk-red); background: rgba(255, 78, 80, 0.1); }

    .mat-zone {
      width: 130px;
      height: 180px;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
    }

    .deck-zone { border-color: var(--pk-yellow); background: var(--pk-white); }
    .graveyard-zone { border-color: #888; background: rgba(136, 136, 136, 0.2); }

    .deck-stack {
      width: 85%;
      height: 85%;
      background-image: url('/assets/images/card-back.png');
      background-size: cover;
      background-position: center;
      opacity: 1;
      border: 3px solid var(--pk-dark);
      border-radius: 6px;
      box-shadow: 2px 2px 0 var(--pk-dark), 4px 4px 0 var(--pk-dark), 6px 6px 0 var(--pk-dark);
    }

    .zone-label {
      position: absolute;
      bottom: -25px;
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--pk-text);
      text-transform: uppercase;
      font-family: var(--font-title);
      letter-spacing: 1px;
      white-space: nowrap;
      background: var(--pk-white);
      padding: 2px 8px;
      border: 2px solid var(--pk-dark);
      border-radius: 4px;
    }

    .mat-divider {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      border-top: 3px dashed var(--pk-dark);
      border-bottom: 3px dashed var(--pk-dark);
      gap: 5px;
      z-index: 1;
    }

    .phase-badge {
      background: var(--pk-yellow);
      color: #111;
      padding: 5px 20px;
      border-radius: 20px;
      border: 3px solid var(--pk-dark);
      font-family: var(--font-title);
      font-size: 1.2rem;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .turn-badge {
      color: var(--pk-text);
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: var(--pk-white);
      padding: 2px 10px;
      border: 2px solid var(--pk-dark);
      border-radius: 4px;
    }

    /* Cards */
    .field-card {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 10px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      box-shadow: 4px 4px 0px var(--pk-dark);
      z-index: 5;
      opacity: 1;
    }
    
    /* Hand area */
    .hand-container {
      background: var(--pk-white);
      padding: 20px;
      display: flex;
      justify-content: center;
      border-top: 4px solid var(--pk-dark);
      box-shadow: 0 -5px 0px rgba(0,0,0,0.1);
      z-index: 20;
    }

    .interactive:hover {
      transform: translateY(-10px) scale(1.05);
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      z-index: 100;
    }
    .selected-for-play {
      transform: translateY(-20px) scale(1.1) !important;
      box-shadow: 0 0 15px 5px var(--pk-yellow) !important;
      border-color: var(--pk-yellow) !important;
      z-index: 110;
    }
    .highlight-slot {
      border: 2px dashed var(--pk-yellow) !important;
      background-color: rgba(255, 203, 5, 0.2) !important;
      cursor: pointer;
    }
    .highlight-slot:hover {
      background-color: rgba(255, 203, 5, 0.4) !important;
    }

    .hand-cards {
      display: flex;
      gap: 15px;
      max-width: 100%;
      overflow-x: auto;
      padding-bottom: 10px;
    }

    .hand-card {
      min-width: 120px;
      height: 170px;
      background: var(--pk-white);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }

    .hand-card:hover {
      transform: translateY(-15px);
      z-index: 10;
      border-color: var(--pk-yellow);
    }

    .card-image {
      width: 100%;
      height: 60%;
      object-fit: cover;
      border-radius: 4px;
      border: 2px solid var(--pk-dark);
      margin-bottom: 5px;
      background: var(--pk-light);
    }

    .card-name {
      font-size: 0.75rem;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: auto;
      color: var(--pk-text);
    }

    .card-stats {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      background: var(--pk-light);
      padding: 3px 5px;
      border-radius: 4px;
      border: 2px solid var(--pk-dark);
    }

    .card-stats .atk { color: var(--pk-red); font-weight: bold; }
    .card-stats .hp { color: var(--pk-blue); font-weight: bold; }

    
    .btn-danger {
      background: var(--pk-red) !important;
      color: white !important;
    }

    .card-inspector {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 280px;
      background: var(--pk-white);
      border: 4px solid var(--pk-dark);
      border-radius: 12px;
      box-shadow: 8px 8px 0px var(--pk-dark);
      padding: 15px;
      z-index: 200;
      pointer-events: none;
      animation: slide-in 0.2s ease-out;
    }

    .inspector-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
      background: var(--pk-light);
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .card-inspector h3 {
      margin: 0 0 10px;
      font-family: var(--font-title);
      color: var(--pk-blue);
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
    }

    .inspector-stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-weight: bold;
      background: var(--pk-light);
      padding: 5px;
      border-radius: 6px;
      border: 2px solid var(--pk-dark);
    }
    .inspector-stats .atk { color: var(--pk-red); }
    .inspector-stats .hp { color: var(--pk-blue); }
    .inspector-stats .def { color: var(--pk-text); opacity: 0.7; }

    .inspector-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .type-badge {
      background: var(--pk-yellow);
      padding: 2px 8px;
      border-radius: 10px;
      border: 2px solid var(--pk-dark);
      color: #111; /* Always dark text on yellow badge */
    }

    .inspector-desc {
      font-size: 0.85rem;
      line-height: 1.3;
      margin-bottom: 10px;
      padding: 8px;
      background: var(--pk-light);
      color: var(--pk-text);
      border-left: 4px solid var(--pk-yellow);
    }

    .inspector-flavor {
      font-size: 0.8rem;
      font-style: italic;
      color: var(--pk-text);
      opacity: 0.7;
      text-align: center;
    }

    @keyframes slide-in {
      from { transform: translate(-20px, -50%); opacity: 0; }
      to { transform: translate(0, -50%); opacity: 1; }
    }

    
    .custom-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    
    .custom-modal {
      background: var(--pk-light);
      border: 6px solid var(--pk-dark);
      border-radius: 16px;
      padding: 30px;
      max-width: 400px;
      text-align: center;
      box-shadow: 10px 10px 0px var(--pk-dark);
      animation: modal-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes modal-pop-in {
      0% { transform: scale(0.5); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    .custom-modal h2 {
      font-family: var(--font-title);
      color: var(--pk-red);
      font-size: 2rem;
      margin-top: 0;
      text-transform: uppercase;
    }

    .custom-modal p {
      font-size: 1.1rem;
      font-weight: bold;
      color: var(--pk-text);
      margin-bottom: 10px;
    }

    .modal-warning {
      color: var(--pk-red) !important;
    }

    .modal-actions {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }

    
    .mat-half {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
    }
    .spell-slot {
      height: 100px;
      background: rgba(138, 43, 226, 0.1) !important;
      border-color: #8a2be2 !important;
    }
    .face-down {
      width: 100%;
      height: 100%;
      background: url('/assets/images/fondo_carta_pokemon.jpg') center/cover;
      border-radius: 6px;
      border: 3px solid var(--pk-dark);
    }
    .extra-zone { border-color: #6a0dad; background: rgba(106, 13, 173, 0.2); }
    .field-zone { border-color: #2e8b57; background: rgba(46, 139, 87, 0.2); }
    .field-zone.active { background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mystic-water.png') center/cover; }

    /* Interactive States */
    .field-card.interactive { cursor: pointer; transition: transform 0.2s; }
    .field-card.interactive:hover { transform: translateY(-5px); z-index: 10; }
    
    .field-card.exhausted { filter: grayscale(80%) opacity(0.7); cursor: not-allowed; }
    .field-card.exhausted:hover { transform: none; }
    
    .field-card.selected {
      border-color: var(--pk-yellow);
      box-shadow: 0 0 0 4px var(--pk-yellow), 4px 4px 0px var(--pk-dark);
      transform: translateY(-10px);
    }
    
    .field-card.targetable {
      animation: target-pulse 1.5s infinite;
      cursor: crosshair;
    }

    /* ANIMATIONS CSS */
    .anim-summon {
      animation: summon-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    .anim-attack-up {
      animation: attack-up 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
      z-index: 50 !important;
    }
    .anim-attack-down {
      animation: attack-down 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
      z-index: 50 !important;
    }
    .anim-damage {
      animation: damage-shake 0.4s ease-in-out forwards;
    }
    .anim-die {
      animation: die-fade 0.5s forwards;
    }

    @keyframes target-pulse {
      0% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0.7); border-color: var(--pk-red); }
      70% { box-shadow: 0 0 0 10px rgba(238, 21, 21, 0); border-color: var(--pk-red); }
      100% { box-shadow: 0 0 0 0 rgba(238, 21, 21, 0); border-color: var(--pk-red); }
    }

    @keyframes summon-pop {
      0% { transform: scale(0.1) translateY(50px); opacity: 0; }
      70% { transform: scale(1.1) translateY(-10px); opacity: 1; }
      100% { transform: scale(1) translateY(0); }
    }

    @keyframes attack-up {
      0% { transform: translateY(0); }
      50% { transform: translateY(-80px) scale(1.1); box-shadow: 0 0 20px var(--pk-yellow); }
      100% { transform: translateY(0); }
    }

    @keyframes attack-down {
      0% { transform: translateY(0); }
      50% { transform: translateY(80px) scale(1.1); box-shadow: 0 0 20px var(--pk-red); }
      100% { transform: translateY(0); }
    }

    @keyframes damage-shake {
      0% { transform: translateX(0); filter: drop-shadow(0 0 0 var(--pk-red)); }
      25% { transform: translateX(-10px); filter: drop-shadow(0 0 10px var(--pk-red)); }
      50% { transform: translateX(10px); filter: drop-shadow(0 0 10px var(--pk-red)); }
      75% { transform: translateX(-10px); filter: drop-shadow(0 0 10px var(--pk-red)); }
      100% { transform: translateX(0); filter: drop-shadow(0 0 0 transparent); }
    }

    @keyframes die-fade {
      0% { transform: scale(1); opacity: 1; filter: grayscale(0); }
      100% { transform: scale(0.5) rotate(180deg); opacity: 0; filter: grayscale(1); }
    }

    .btn-action {
      background: var(--pk-yellow);
      color: #111;
      border: 3px solid var(--pk-dark);
      padding: 10px 20px;
      border-radius: 8px;
      font-family: var(--font-title);
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 4px 4px 0 var(--pk-dark);
      transition: all 0.1s;
    }
    .btn-action:active { transform: translate(4px, 4px); box-shadow: 0 0 0 var(--pk-dark); }
    
    .phase-btn {
      background: var(--pk-yellow);
    }
    
    .winner-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
    .winner-message {
      background: var(--pk-white);
      padding: 40px;
      border-radius: 20px;
      border: 6px solid var(--pk-dark);
      text-align: center;
      box-shadow: 10px 10px 0px var(--pk-yellow);
    }
    .winner-message h2 {
      font-family: var(--font-title);
      font-size: 3rem;
      color: var(--pk-blue);
      margin: 0 0 30px;
      text-shadow: -2px -2px 0 var(--pk-dark), 2px -2px 0 var(--pk-dark), -2px 2px 0 var(--pk-dark), 2px 2px 0 var(--pk-dark);
    }

    .loading-screen {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--pk-light);
      background-image: var(--pk-bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: var(--pk-text);
      font-family: var(--font-title);
    }
    .loader {
      width: 50px;
      height: 50px;
      border: 5px solid var(--pk-dark);
      border-top-color: var(--pk-yellow);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
      box-shadow: 4px 4px 0px var(--pk-dark);
    }
    
    .deck-stack {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/fondo_carta_pokemon.jpg');
      background-size: cover;
      background-position: center;
      border: 3px solid var(--pk-dark);
      border-radius: 8px;
      box-shadow: -2px -2px 0 var(--pk-dark), -4px -4px 0 var(--pk-dark), -6px -6px 0 var(--pk-dark);
      transform: translate(6px, 6px);
    }
    
    .anim-draw {
      animation: draw-card 0.5s ease-out both;
    }
    @keyframes draw-card {
      0% { 
        transform: translate(var(--dx, -380px), var(--dy, -450px)) scale(0.4) rotateY(180deg); 
      }
      100% { 
        transform: translate(0, 0) scale(1) rotateY(0deg); 
      }
    }

    /* Battle State Classes */
    .selected {
      border-color: #facc15 !important;
      box-shadow: 0 0 20px rgba(250, 204, 21, 0.8) !important;
      transform: translateY(-15px) !important;
      z-index: 10;
    }
    
    .targetable {
      animation: pulse-red 1.5s infinite;
      cursor: crosshair !important;
      border-color: var(--pk-red) !important;
    }
    
    @keyframes pulse-red {
      0% { box-shadow: 0 0 0px var(--pk-red); }
      50% { box-shadow: 0 0 20px var(--pk-red); }
      100% { box-shadow: 0 0 0px var(--pk-red); }
    }

    /* Battle Animations */
    .anim-attack-up { animation: attack-up 0.4s ease-in-out; }
    @keyframes attack-up {
      0% { transform: translateY(0); }
      50% { transform: translateY(-50px) scale(1.1); z-index: 10; }
      100% { transform: translateY(0); }
    }

    .anim-damage { animation: damage-shake 0.4s ease-in-out; }
    @keyframes damage-shake {
      0%, 100% { transform: translateX(0); filter: brightness(1); }
      25% { transform: translateX(-10px); filter: brightness(2) hue-rotate(-50deg); }
      75% { transform: translateX(10px); filter: brightness(2) hue-rotate(-50deg); }
    }

    .anim-die { animation: die-fade 0.5s forwards; }

    @keyframes spin { to { transform: rotate(360deg); } }

  `]
})
export class VsCpuComponent implements OnInit, OnDestroy {
  gameState: GameState | null = null;
  currentUserId: string | null = null;
  username = 'Player';
  
  selectedAttackerIndex: number | null = null;
  isSelectingTarget = false;
  hoveredCard: PokemonCard | null = null;
  
  debugLog = 'Paso 1: Componente montado...';
  toastMessage = '';
  toastTimeout: any;

  playerAnimations: string[] = ['', '', '', '', ''];
  cpuAnimations: string[] = ['', '', '', '', ''];
  selectedHandCardIndex: number | null = null;

  showExtraDeckModal = false;
  selectedExtraCardIndex: number | null = null;
  isEvolving = false;

  private turnTimer: any;
  private destroy$ = new Subject<void>();

  constructor(
    private gameService: GameService,
    private pokemonService: PokemonService,
    private supabaseService: SupabaseService,
    private authService: AuthService,
    private sqliteService: SqliteService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.currentUserId = user.id;
          this.username = user.email ? user.email.split('@')[0] : 'Player';
        }
      });

    setTimeout(() => {
      this.initializeGame();
    }, 500);
  }

  ngOnDestroy(): void {
    // If game is not finished and user leaves, count it as a loss automatically
    if (this.gameState && !this.gameState.winner) {
      this.gameState.winner = 'player2';
      this.endGame();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  showToast(msg: string) {
    this.toastMessage = msg;
    this.cdr.detectChanges();
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastMessage = '';
      this.cdr.detectChanges();
    }, 3000);
  }

  async initializeGame(): Promise<void> {
    try {
      this.debugLog = 'Paso 2: Iniciando initializeGame...'; this.cdr.detectChanges();
      let userDecks: any[] = [];
      if (this.currentUserId) {
        this.debugLog = `Paso 3: Obteniendo mazos para el usuario ${this.currentUserId}...`; this.cdr.detectChanges();
        userDecks = await this.supabaseService.getUserDecks(this.currentUserId);
        this.debugLog = `Paso 4: Mazos obtenidos (${userDecks.length})...`; this.cdr.detectChanges();
      } else {
        this.debugLog = 'Paso 3: Sin usuario actual, jugando como invitado...'; this.cdr.detectChanges();
      }

      // Validar que existe al menos un deck y uno esté marcado como activo
      if (userDecks.length === 0) {
        this.showToast('❌ No tienes mazos. Por favor, crea uno en el Constructor de Mazo.');
        this.router.navigate(['/cards/deck-builder']);
        return;
      }

      let activeDeck = userDecks.find(d => d.is_active);
      if (!activeDeck) {
        // Auto-marcar el primer deck como activo
        this.debugLog = 'Paso 4b: Ningún mazo activo, marcando el primero...'; this.cdr.detectChanges();
        await this.supabaseService.setActiveDeck(this.currentUserId!, userDecks[0].id);
        activeDeck = userDecks[0];
        this.showToast(`✓ Mazo "${activeDeck.name}" establecido como activo automáticamente.`);
      }

      let playerDeck: PokemonCard[] = [];
      this.debugLog = 'Paso 5: Extrayendo cartas del mazo...'; this.cdr.detectChanges();
      if (activeDeck.cards) {
         playerDeck = [...activeDeck.cards];
         playerDeck = playerDeck.sort(() => 0.5 - Math.random());
      }
      
      this.debugLog = `Paso 6: Verificando tamaño del mazo (${playerDeck.length})...`; this.cdr.detectChanges();
      if (playerDeck.length < 20) {
        this.debugLog = 'Paso 7: Añadiendo cartas aleatorias al mazo del jugador...'; this.cdr.detectChanges();
        const extra = await this.pokemonService.getRandomPokemons(20 - playerDeck.length);
        playerDeck = [...playerDeck, ...extra];
      }

      this.debugLog = 'Paso 8: Generando mazo del CPU...'; this.cdr.detectChanges();
      let cpuDeck = await this.pokemonService.getRandomPokemons(20);
      if (cpuDeck.length < 20) {
        this.debugLog = 'Paso 9: Añadiendo cartas aleatorias al mazo del CPU...'; this.cdr.detectChanges();
        const extra = await this.pokemonService.getRandomPokemons(20 - cpuDeck.length);
        cpuDeck = [...cpuDeck, ...extra];
      }

      this.debugLog = 'Paso 10: Inicializando estado del juego...'; this.cdr.detectChanges();
      this.gameState = this.gameService.initializeCPUGame(
        playerDeck,
        cpuDeck,
        this.currentUserId || 'guest',
        this.username
      );

      this.debugLog = 'Paso 11: Subscribiéndose al estado...'; this.cdr.detectChanges();
      this.gameService.getGameState()
        .pipe(takeUntil(this.destroy$))
        .subscribe(state => {
          this.gameState = state;
          if (state) {
            this.debugLog = 'Paso 12: ¡Juego cargado!';
            if (this.gameState?.turnNumber === 1 && this.gameState?.currentTurn === 'player1') {
              this.showToast('¡Comienza el Duelo! Fase Principal: Invoca monstruos.');
              // Set dynamic origin for animation
              setTimeout(() => {
                const deckEl = document.querySelector('.player-half .deck-zone');
                const deckRect = deckEl ? deckEl.getBoundingClientRect() : null;
                const handElements = document.querySelectorAll('.hand-card');
                
                handElements.forEach((el, i) => {
                  if (deckRect) {
                    const handRect = el.getBoundingClientRect();
                    const dx = deckRect.left + (deckRect.width / 2) - (handRect.left + (handRect.width / 2));
                    const dy = deckRect.top + (deckRect.height / 2) - (handRect.top + (handRect.height / 2));
                    (el as HTMLElement).style.setProperty('--dx', `${dx}px`);
                    (el as HTMLElement).style.setProperty('--dy', `${dy}px`);
                  }
                  
                  el.classList.remove('anim-draw');
                  void (el as HTMLElement).offsetWidth; // trigger reflow
                  el.classList.add('anim-draw');
                });
              }, 50);
            }
          }
          this.cdr.detectChanges();
        });
    } catch (error: any) {
      console.error('Error inicializando el juego:', error);
      this.showToast('Error crítico inicializando el juego');  // Fallback si la carga de base de datos falla
      try {
        const fallbackDeck = await this.pokemonService.getRandomPokemons(20);
        const fallbackCpu = await this.pokemonService.getRandomPokemons(20);
        this.gameState = this.gameService.initializeCPUGame(
          fallbackDeck,
          fallbackCpu,
          'guest',
          'Player'
        );
      } catch (e: any) {
        console.error('Fallback falló:', e);
        this.showToast('Error crítico cargando Pokémon de respaldo');
      }
    }
  }

  getCurrentPhaseText(): string {
    const phases: { [key: string]: string } = {
      'draw': 'Fase de Robo',
      'main': 'Fase Principal',
      'battle': 'Fase de Batalla',
      'end': 'Fase de Término'
    };
    return this.gameState?.phase ? phases[this.gameState.phase] : 'Desconocido';
  }

  playPhase(): void {
    if (this.gameState && this.gameState.currentTurn === 'player1') {
      this.gameService.endTurn(this.gameState);
      
      const phase = this.gameState.phase;
      this.selectedHandCardIndex = null; // Clear selection on phase end
      if (phase === 'main') this.showToast('Fase Principal: Juega cartas o activa habilidades.');
      if (phase === 'battle') this.showToast('Fase de Batalla: Selecciona un monstruo para atacar.');

      // TypeScript type inference fix
      if ((this.gameState.currentTurn as string) === 'player2') {
        this.showToast('Turno de la CPU...');
        this.executeCPUTurn();
      }
    }
  }

  async playCardFromHand(index: number) {
    if (!this.gameState) return;
    if (this.gameState.currentTurn !== 'player1') {
      this.showToast('No es tu turno.');
      return;
    }
    if (this.gameState.phase !== 'main') {
      this.showToast('Sólo puedes jugar cartas durante la Fase Principal.');
      return;
    }

    if (this.selectedHandCardIndex === index) {
      this.selectedHandCardIndex = null;
    } else {
      this.selectedHandCardIndex = index;
      this.showToast('Carta seleccionada. Haz clic en una zona vacía para colocarla.');
    }
    this.cdr.detectChanges();
  }

  isSelectedSpell(): boolean {
    if (!this.gameState || this.selectedHandCardIndex === null) return false;
    const cardToPlay = this.gameState.player1.hand[this.selectedHandCardIndex];
    if (cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field') return false;
    return cardToPlay.cardClass === 'magic' || cardToPlay.cardClass === 'trap';
  }

  isSelectedFieldSpell(): boolean {
    if (!this.gameState || this.selectedHandCardIndex === null) return false;
    const cardToPlay = this.gameState.player1.hand[this.selectedHandCardIndex];
    return cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field';
  }

  placeFieldCard() {
    if (!this.gameState || this.gameState.currentTurn !== 'player1' || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null || !this.isSelectedFieldSpell()) {
       if (this.gameState.player1.fieldCard) {
           this.hoveredCard = this.gameState.player1.fieldCard;
       }
       return;
    }
    
    const success = this.gameService.playCard(this.gameState, true, this.selectedHandCardIndex);
    if (success) {
      this.selectedHandCardIndex = null;
      this.showToast('¡Carta de Estadio activada globalmente!');
      this.cdr.detectChanges();
    }
  }

  placeCardInSlot(slot: number, isSpellZone: boolean) {
    if (!this.gameState || this.gameState.currentTurn !== 'player1' || this.gameState.phase !== 'main') return;
    if (this.selectedHandCardIndex === null) return;
    
    const cardToPlay = this.gameState.player1.hand[this.selectedHandCardIndex];
    const isSpell = cardToPlay.cardClass === 'magic' || cardToPlay.cardClass === 'trap';
    
    if (cardToPlay.cardClass === 'magic' && cardToPlay.magicEffect === 'field') {
      this.showToast('Las cartas de Campo deben colocarse en la zona de Campo a la izquierda.');
      return;
    }

    if (isSpell !== isSpellZone) {
      this.showToast(isSpell ? 'Esta carta debe ir en la zona de magias y trampas.' : 'Esta carta debe ir en la zona de monstruos.');
      return;
    }
    
    const success = this.gameService.playCard(this.gameState, true, this.selectedHandCardIndex, slot);
    if (success) {
      this.selectedHandCardIndex = null;
      if (isSpell) {
         this.showToast('Colocada boca abajo.');
      } else {
         this.playerAnimations[slot] = 'anim-summon';
         setTimeout(() => { this.playerAnimations[slot] = ''; this.cdr.detectChanges(); }, 600);
      }
    }
    this.cdr.detectChanges();
  }

  selectFieldCard(index: number): void {
    if (!this.gameState || this.gameState.currentTurn !== 'player1') return;
    
    const card = this.gameState.player1.field[index];

    if (this.isEvolving && this.selectedExtraCardIndex !== null) {
      const success = this.gameService.evolvePokemon(this.gameState, true, index, this.selectedExtraCardIndex);
      if (success) {
        this.showToast(`¡Tu Pokémon ha evolucionado a ${this.gameState.player1.field[index].name}!`);
        this.playerAnimations[index] = 'anim-summon';
        setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
      } else {
        this.showToast('No puedes evolucionar este Pokémon. Debe ser el mismo tipo y nivel inferior.');
      }
      this.isEvolving = false;
      this.selectedExtraCardIndex = null;
      this.cdr.detectChanges();
      return;
    }

    if (this.gameState.phase === 'main') {
      if (!card.hasUsedAbility) {
        this.gameService.useAbility(this.gameState, index, true);
        this.playerAnimations[index] = 'anim-summon'; // Reusamos animacion como buff
        this.cdr.detectChanges();
        this.showToast(`${card.name} usó su habilidad.`);
        setTimeout(() => { this.playerAnimations[index] = ''; this.cdr.detectChanges(); }, 600);
      } else {
        this.showToast('Este monstruo ya usó su habilidad este turno.');
      }
    } else if (this.gameState.phase === 'battle') {
      if (card.hasAttacked) {
        this.showToast('Este monstruo ya atacó.');
        return;
      }

      if (this.selectedAttackerIndex === index) {
        this.selectedAttackerIndex = null;
        this.isSelectingTarget = false;
        this.showToast('Ataque cancelado.');
      } else {
        this.selectedAttackerIndex = index;
        this.isSelectingTarget = true;
        
        if (this.gameState.player2.field.length === 0) {
          // Ataque directo si no hay defensores
          this.executePlayerAttack(index, -1);
        } else {
          this.showToast('Selecciona un monstruo enemigo como objetivo.');
        }
      }
    }
    this.cdr.detectChanges(); // FORZAR ACTUALIZACIÓN VISUAL DE LA SELECCIÓN
  }

  
  openExtraDeck(): void {
    if (!this.gameState || this.gameState.currentTurn !== 'player1') return;
    if (this.gameState.phase !== 'main') {
       this.showToast('Solo puedes acceder al Deck Extra en tu Fase Principal.');
       return;
    }
    this.showExtraDeckModal = true;
    this.isEvolving = false;
    this.selectedExtraCardIndex = null;
    this.cdr.detectChanges();
  }

  closeExtraDeck(): void {
    this.showExtraDeckModal = false;
    this.isEvolving = false;
    this.selectedExtraCardIndex = null;
    this.cdr.detectChanges();
  }

  selectExtraCardToEvolve(index: number): void {
    this.selectedExtraCardIndex = index;
    this.isEvolving = true;
    this.showExtraDeckModal = false;
    this.showToast('Selecciona a qué Pokémon en tu campo deseas evolucionar.');
    this.cdr.detectChanges();
  }

  activateSpell(index: number): void {
    if (!this.gameState || this.gameState.phase !== 'main' || this.gameState.currentTurn !== 'player1') return;
    const card = this.gameState.player1.spellZone[index];
    if (card && card.isFaceDown) {
      if (card.cardClass === 'trap') {
        this.showToast('Las trampas se activan automáticamente en respuesta a eventos.');
      } else {
        const effectMessage = this.gameService.activateSpellTrap(this.gameState, index, true);
        if (effectMessage) {
          this.showToast(effectMessage);
        }
      }
      this.hoveredCard = null;
      this.cdr.detectChanges();
    }
  }

  selectTarget(index: number): void {
    if (this.isSelectingTarget && this.selectedAttackerIndex !== null && this.gameState) {
      this.executePlayerAttack(this.selectedAttackerIndex, index);
    }
  }

  async executePlayerAttack(attackerIdx: number, targetIdx: number) {
    if (!this.gameState) return;

    this.isSelectingTarget = false;
    this.selectedAttackerIndex = null;

    // Efectuar logica en el engine PRIMERO
    const result = this.gameService.attack(this.gameState, attackerIdx, targetIdx, true);

    if (result.cancelled) {
      this.showToast(result.trapMessage || '¡Ataque bloqueado por una trampa!');
      return;
    }

    // Animación de ataque (Player sube hacia arriba)
    this.playerAnimations[attackerIdx] = 'anim-attack-up';
    this.cdr.detectChanges();
    await new Promise(r => setTimeout(r, 200)); // Espera al climax de la animación

    if (targetIdx !== -1) {
      // Animación de daño al objetivo
      this.cpuAnimations[targetIdx] = 'anim-damage';
      this.cdr.detectChanges();
      
      await new Promise(r => setTimeout(r, 400));
      
      if (result.targetDied) {
        this.cpuAnimations[targetIdx] = 'anim-die';
        this.cdr.detectChanges();
        await new Promise(r => setTimeout(r, 500));
      }
    } else {
      // Daño directo
      await new Promise(r => setTimeout(r, 400));
    }
    
    // Limpiar animaciones
    this.playerAnimations[attackerIdx] = '';
    if (targetIdx !== -1) this.cpuAnimations[targetIdx] = '';
    this.cdr.detectChanges();
  }

  private async executeCPUTurn(): Promise<void> {
    if (!this.gameState) return;
    try {

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // MAIN PHASE
    this.showToast('CPU: Fase Principal');
    
    // Wait for the draw phase 1000ms timeout to complete before playing cards
    let waitTime = 0;
    while (this.gameState?.phase !== 'main' && waitTime < 2000) {
      await delay(100);
      waitTime += 100;
    }
    
    await delay(200);

    // Jugar cartas (Invocación)
    for (let i = this.gameState.player2.hand.length - 1; i >= 0; i--) {
      const fieldCount = this.gameState.player2.field.filter(c => !!c).length;
      if (fieldCount < 5) {
        await delay(200);

        // Find empty slot for animation
        let emptySlot = 0;
        for (let s = 0; s < 5; s++) {
          if (!this.gameState.player2.field[s]) { emptySlot = s; break; }
        }

        this.gameService.playCard(this.gameState, false, i);
        this.cpuAnimations[emptySlot] = 'anim-summon';
        this.cdr.detectChanges();
        setTimeout(() => { this.cpuAnimations[emptySlot] = ''; this.cdr.detectChanges(); }, 600);
      }
    }

    // Activar cartas mágicas de la CPU (no trampas)
    if (this.gameState.player2.spellZone) {
      for (let i = 0; i < this.gameState.player2.spellZone.length; i++) {
        const card = this.gameState.player2.spellZone[i];
        if (card && card.isFaceDown && card.cardClass !== 'trap') {
          await delay(300);
          const effectMessage = this.gameService.activateSpellTrap(this.gameState, i, false);
          if (effectMessage) {
            this.showToast(`CPU: ${effectMessage}`);
          }
          this.cdr.detectChanges();
        }
      }
    }

    // Pasar a BATTLE PHASE
    await delay(200);
    this.gameService.endTurn(this.gameState);
    this.showToast('CPU: Fase de Batalla');
    await delay(150);

    // Atacar
    if (this.gameState.player2.field.some(c => !!c)) {
      for (let i = 0; i < 5; i++) {
        const attacker = this.gameState.player2.field[i];
        if (!attacker || attacker.hasAttacked) continue;

        await delay(150);
        let targetIdx = -1;

        const hasDefenders = this.gameState.player1.field.some(c => !!c);
        if (!hasDefenders) {
          targetIdx = -1; // Ataque directo
        } else {
          // Buscar objetivo mas debil
          let minHpDef = 9999;
          for (let j = 0; j < 5; j++) {
            const def = this.gameState.player1.field[j];
            if (!def) continue;
            if ((def.hp + def.defense) < minHpDef) {
              minHpDef = def.hp + def.defense;
              targetIdx = j;
            }
          }
        }

        // Animación de ataque (CPU baja hacia abajo)
        this.cpuAnimations[i] = 'anim-attack-down';
        this.cdr.detectChanges();
        await delay(200);

        // Ejecutar ataque primero para ver si hay bloqueos
        const result = this.gameService.attack(this.gameState, i, targetIdx, false);

        if (result.cancelled) {
           this.showToast(result.trapMessage || '¡Tu trampa bloqueó el ataque enemigo!');
           this.cpuAnimations[i] = '';
           this.cdr.detectChanges();
           await delay(400);
           continue;
        }

        let targetDied = result.targetDied;
        if (targetIdx !== -1) {
          this.playerAnimations[targetIdx] = 'anim-damage';
          this.cdr.detectChanges();

          await delay(150);

          if (targetDied) {
            this.playerAnimations[targetIdx] = 'anim-die';
            this.cdr.detectChanges();
            await delay(200);
          }
        } else {
          await delay(150);
        }
        this.cpuAnimations[i] = '';
        if (targetIdx !== -1) this.playerAnimations[targetIdx] = '';
        this.cdr.detectChanges();
        
        // Si ganó la CPU en este golpe
        if (this.gameState.winner) break;
      }
    }

    // Pasar a END PHASE y luego al turno del jugador
    await delay(200);
    this.gameService.endTurn(this.gameState); // end
    this.gameService.endTurn(this.gameState); // draw -> player1 main
    this.showToast('¡Tu Turno! Fase Principal');
    this.cdr.detectChanges();
    } catch (e) {
      console.error('Error in CPU turn', e);
      this.showToast('Error en turno CPU, forzando pase de turno.');
      // Force end turn safely
      this.gameState.currentTurn = 'player1';
      this.gameState.phase = 'main';
      this.cdr.detectChanges();
    }
  }

  
  showSurrenderModal = false;
  
  surrender() {
    this.showSurrenderModal = true;
  }

  confirmSurrender() {
    this.showSurrenderModal = false;
    if (this.gameState) this.gameState.winner = 'player2';
    this.endGame();
  }

  async endGame(): Promise<void> {
    if (this.gameState && this.currentUserId) {
      const isPlayerWinner = this.gameState.winner === 'player1';
      const result = {
        mode: 'cpu',
        winner_id: isPlayerWinner ? this.currentUserId : null,
        loser_id: !isPlayerWinner ? this.currentUserId : null,
        created_at: new Date().toISOString()
      };

      try {
        await this.supabaseService.insertGameResult(result);
        await this.sqliteService.insertLocalGame(
          Math.random().toString(),
          this.currentUserId,
          isPlayerWinner ? 'player' : 'cpu',
          this.gameState
        );
      } catch (error) {
        console.error('Failed to save game result:', error);
      }

      this.gameService.endGame(this.gameState);
    }

    this.router.navigate(['/menu']);
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
}

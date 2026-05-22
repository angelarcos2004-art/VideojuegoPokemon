import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { PlayerState } from '../models/player.model';
import { PokemonCard } from '../models/pokemon-card.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameState$ = new BehaviorSubject<GameState | null>(null);

  constructor() {}

  initializeCPUGame(playerDeck: PokemonCard[], cpuDeck: PokemonCard[], userId: string, username: string): GameState {
    const player1State: PlayerState = {
      userId,
      username,
      hp: 4000,
      hand: this.drawCards(playerDeck, 5),
      deck: playerDeck.slice(5),
      field: [],
      graveyard: []
    };

    const player2State: PlayerState = {
      userId: 'cpu',
      username: 'CPU',
      hp: 4000,
      hand: this.drawCards(cpuDeck, 5),
      deck: cpuDeck.slice(5),
      field: [],
      graveyard: []
    };

    const gameState: GameState = {
      gameMode: 'cpu',
      phase: 'draw',
      currentTurn: 'player1',
      player1: player1State,
      player2: player2State,
      turnNumber: 1
    };

    this.gameState$.next(gameState);
    return gameState;
  }

  initializeOnlineGame(player1Id: string, player1Name: string, player1Deck: PokemonCard[], player2Name: string, player2Deck: PokemonCard[], roomId: string): GameState {
    const player1State: PlayerState = {
      userId: player1Id,
      username: player1Name,
      hp: 4000,
      hand: this.drawCards(player1Deck, 5),
      deck: player1Deck.slice(5),
      field: [],
      graveyard: []
    };

    const player2State: PlayerState = {
      userId: '',
      username: player2Name,
      hp: 4000,
      hand: this.drawCards(player2Deck, 5),
      deck: player2Deck.slice(5),
      field: [],
      graveyard: []
    };

    const gameState: GameState = {
      roomId,
      gameMode: 'online',
      phase: 'draw',
      currentTurn: 'player1',
      player1: player1State,
      player2: player2State,
      turnNumber: 1
    };

    this.gameState$.next(gameState);
    return gameState;
  }

  getGameState() {
    return this.gameState$.asObservable();
  }

  getCurrentGameState(): GameState | null {
    return this.gameState$.value;
  }

  private drawCards(deck: PokemonCard[], count: number): PokemonCard[] {
    return deck.slice(0, count);
  }

  drawCard(state: GameState, isPlayer1: boolean): void {
    const player = isPlayer1 ? state.player1 : state.player2;
    if (player.deck.length > 0) {
      const card = player.deck.shift();
      if (card) {
        player.hand.push(card);
      }
    }
  }

  playCard(state: GameState, isPlayer1: boolean, cardIndex: number): boolean {
    const player = isPlayer1 ? state.player1 : state.player2;
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return false;
    }
    
    if (cardIndex >= 0 && cardIndex < player.hand.length && player.field.length < 5) {
      const card = player.hand.splice(cardIndex, 1)[0];
      card.hasAttacked = false;
      card.hasUsedAbility = false;
      player.field.push(card);
      return true;
    }
    return false;
  }

  attack(state: GameState, attackerIndex: number, defenderIndex: number, isPlayer1: boolean): void {
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'battle') {
      return;
    }

    const player = isPlayer1 ? state.player1 : state.player2;
    const defenderPlayer = isPlayer1 ? state.player2 : state.player1;
    const attacker = player.field[attackerIndex];
    
    if (!attacker || attacker.hasAttacked) return;

    if (defenderIndex >= 0) {
      const defender = defenderPlayer.field[defenderIndex];
      if (defender) {
        const damage = Math.max(0, attacker.attack - defender.defense);
        defender.hp -= damage;
        attacker.hasAttacked = true;

        if (defender.hp <= 0) {
          const deadCard = defenderPlayer.field.splice(defenderIndex, 1)[0];
          defenderPlayer.graveyard.push(deadCard);
        }
      }
    } else {
      // Direct attack if opponent has no cards
      if (defenderPlayer.field.length === 0) {
        defenderPlayer.hp -= Math.max(0, attacker.attack);
        attacker.hasAttacked = true;
      }
    }

    this.checkWinCondition(state);
  }

  useAbility(state: GameState, cardIndex: number, isPlayer1: boolean): void {
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return;
    }

    const player = isPlayer1 ? state.player1 : state.player2;
    const opponent = isPlayer1 ? state.player2 : state.player1;
    const card = player.field[cardIndex];

    if (card && !card.hasUsedAbility) {
      const ability = card.specialAbility;
      card.hasUsedAbility = true;
      
      switch (ability.effect) {
        case 'heal':
          player.hp = Math.min(player.hp + ability.value, 4000);
          break;
        case 'boost_attack':
          card.attack += ability.value;
          break;
        case 'reduce_defense':
          opponent.field.forEach(c => c.defense = Math.max(0, c.defense - ability.value));
          break;
        case 'draw_card':
          this.drawCard(state, isPlayer1);
          break;
        case 'block':
          break;
        case 'direct_damage':
          opponent.hp -= ability.value;
          break;
        case 'revive':
          if (player.graveyard.length > 0) {
            const revivedCard = player.graveyard.shift();
            if (revivedCard && player.field.length < 5) {
              revivedCard.hasAttacked = false;
              revivedCard.hasUsedAbility = false;
              player.field.push(revivedCard);
            }
          }
          break;
      }
    }

    this.checkWinCondition(state);
  }

  endTurn(state: GameState): void {
    state.phase = state.phase === 'end' ? 'draw' : this.getNextPhase(state.phase);

    if (state.phase === 'draw') {
      state.currentTurn = state.currentTurn === 'player1' ? 'player2' : 'player1';
      state.turnNumber++;
      
      // Reset card flags for the active player
      const activePlayer = state.currentTurn === 'player1' ? state.player1 : state.player2;
      activePlayer.field.forEach(card => {
        card.hasAttacked = false;
        card.hasUsedAbility = false;
      });
      
      // Auto-draw card
      this.drawCard(state, state.currentTurn === 'player1');
      // Advance automatically to main phase after drawing
      setTimeout(() => {
        if (state) state.phase = 'main';
      }, 1000);
    }
  }

  private getNextPhase(phase: string): 'draw' | 'main' | 'battle' | 'end' {
    const phases: ('draw' | 'main' | 'battle' | 'end')[] = ['draw', 'main', 'battle', 'end'];
    const index = phases.indexOf(phase as any);
    return phases[(index + 1) % phases.length];
  }

  private checkWinCondition(state: GameState): void {
    if (state.player1.hp <= 0) {
      state.winner = 'player2';
    } else if (state.player2.hp <= 0) {
      state.winner = 'player1';
    }
  }

  endGame(state: GameState): void {
    this.gameState$.next(null);
  }
}

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

  private prepareDecks(fullDeck: PokemonCard[]): { main: PokemonCard[], extra: PokemonCard[] } {
    const main: PokemonCard[] = [];
    const extra: PokemonCard[] = [];
    
    for (const card of fullDeck) {
      // Evolutions go to extra deck
      if (card.cardClass === 'pokemon' && card.level > 1) {
        extra.push(card);
      } else {
        main.push(card);
      }
    }
    return { main, extra };
  }

  initializeCPUGame(playerDeck: PokemonCard[], cpuDeck: PokemonCard[], userId: string, username: string): GameState {
    const p1Decks = this.prepareDecks(playerDeck);
    const p2Decks = this.prepareDecks(cpuDeck);

    const player1State: PlayerState = {
      userId,
      username,
      hp: 4000,
      hand: this.drawCards(p1Decks.main, 5),
      deck: p1Decks.main.slice(5),
      extraDeck: p1Decks.extra,
      field: [],
      spellZone: [],
      graveyard: []
    };

    const player2State: PlayerState = {
      userId: 'cpu',
      username: 'CPU',
      hp: 4000,
      hand: this.drawCards(p2Decks.main, 5),
      deck: p2Decks.main.slice(5),
      extraDeck: p2Decks.extra,
      field: [],
      spellZone: [],
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
    const p1Decks = this.prepareDecks(player1Deck);
    const p2Decks = this.prepareDecks(player2Deck);

    const player1State: PlayerState = {
      userId: player1Id,
      username: player1Name,
      hp: 4000,
      hand: this.drawCards(p1Decks.main, 5),
      deck: p1Decks.main.slice(5),
      extraDeck: p1Decks.extra,
      field: [],
      spellZone: [],
      graveyard: []
    };

    const player2State: PlayerState = {
      userId: '',
      username: player2Name,
      hp: 4000,
      hand: this.drawCards(p2Decks.main, 5),
      deck: p2Decks.main.slice(5),
      extraDeck: p2Decks.extra,
      field: [],
      spellZone: [],
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

  playCard(state: GameState, isPlayer1: boolean, cardIndex: number, slotIndex?: number): boolean {
    const player = isPlayer1 ? state.player1 : state.player2;
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return false;
    }
    
    if (cardIndex >= 0 && cardIndex < player.hand.length) {
      const card = player.hand[cardIndex];
      const isSpellOrTrap = card.cardClass === 'magic' || card.cardClass === 'trap';
      const isFieldSpell = card.cardClass === 'magic' && card.magicEffect === 'field';

      if (isFieldSpell) {
         const playedCard = player.hand.splice(cardIndex, 1)[0];
         // Mover carta de campo anterior al cementerio si existe
         if (player.fieldCard) {
            if(!player.graveyard) player.graveyard = [];
            player.graveyard.push(player.fieldCard);
         }
         player.fieldCard = playedCard;
         player.fieldCard.isFaceDown = false; // Las de campo entran activas
         this.applyFieldEffect(state);
         return true;
      }

      const zone = isSpellOrTrap ? player.spellZone : player.field;
      
      // Ensure the zone has 5 slots
      while (zone.length < 5) zone.push(null as any);
      
      if (slotIndex !== undefined) {
         if (zone[slotIndex]) return false; // slot taken
         const playedCard = player.hand.splice(cardIndex, 1)[0];
         if (isSpellOrTrap) playedCard.isFaceDown = true;
         else { playedCard.hasAttacked = false; playedCard.hasUsedAbility = false; }
         zone[slotIndex] = playedCard;
         if (!isSpellOrTrap) {
            this.triggerTraps(state, 'on_summon', isPlayer1 ? 'player2' : 'player1', { summonedCard: playedCard, player: isPlayer1 ? 'player1' : 'player2' });
         }
         return true;
      } else {
         let emptyIndex = -1;
         for (let i = 0; i < 5; i++) {
           if (!zone[i]) { emptyIndex = i; break; }
         }
         
         if (emptyIndex !== -1) {
           const playedCard = player.hand.splice(cardIndex, 1)[0];
           if (isSpellOrTrap) playedCard.isFaceDown = true;
           else { playedCard.hasAttacked = false; playedCard.hasUsedAbility = false; }
           zone[emptyIndex] = playedCard;
           if (!isSpellOrTrap) {
              this.triggerTraps(state, 'on_summon', isPlayer1 ? 'player2' : 'player1', { summonedCard: playedCard, player: isPlayer1 ? 'player1' : 'player2' });
           }
           return true;
         }
      }
    }
    return false;
  }

  activateSpellTrap(state: GameState, cardIndex: number, isPlayer1: boolean): string {
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return '';
    }
    const player = isPlayer1 ? state.player1 : state.player2;
    const opponent = isPlayer1 ? state.player2 : state.player1;
    if(!player.spellZone) player.spellZone = [];
    const card = player.spellZone[cardIndex];

    if (card && card.isFaceDown) {
      if (card.cardClass === 'trap') {
        return 'trap';
      }
      card.isFaceDown = false;
      let effectMessage = '';

      if (card.specialAbility || card.magicEffect) {
        const effectName = card.specialAbility ? card.specialAbility.effect : card.magicEffect;
        const effectValue = card.specialAbility ? card.specialAbility.value : (card.effectValue || 0);

        switch (effectName) {
          case 'heal':
            player.hp = Math.min(player.hp + effectValue, 4000);
            effectMessage = `¡Poción usada! +${effectValue} HP`;
            break;
          case 'boost_attack':
          case 'boost_atk':
            player.field.forEach(c => { if (c) c.attack += effectValue; });
            effectMessage = `¡Boost ATK! +${effectValue} ATK a tus criaturas`;
            break;
          case 'boost_def':
            player.field.forEach(c => { if (c) c.defense += effectValue; });
            effectMessage = `¡Boost DEF! +${effectValue} DEF a tus criaturas`;
            break;
          case 'reduce_defense':
            opponent.field.forEach(c => { if (c) c.defense = Math.max(0, c.defense - effectValue); });
            effectMessage = `¡Ataque enemigo reducido! -${effectValue} DEF`;
            break;
          case 'draw_card':
            this.drawCard(state, isPlayer1);
            effectMessage = '¡Carta robada!';
            break;
          case 'direct_damage':
            opponent.hp -= effectValue;
            effectMessage = `¡Daño directo! -${effectValue} HP al enemigo`;
            break;
          case 'field':
            player.field.forEach(c => { if (c) { c.attack += effectValue; c.defense += effectValue; } });
            effectMessage = `¡Estadio activado! +${effectValue} ATK/DEF`;
            break;
        }
      }

      player.spellZone[cardIndex] = null as any;
      if(!player.graveyard) player.graveyard = [];
      player.graveyard.push(card);
      this.checkWinCondition(state);
      return effectMessage;
    }
    return '';
  }

  attack(state: GameState, attackerIndex: number, defenderIndex: number, isPlayer1: boolean): { cancelled: boolean, targetDied: boolean, trapMessage?: string } {
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'battle') {
      return { cancelled: false, targetDied: false };
    }

    const player = isPlayer1 ? state.player1 : state.player2;
    const defenderPlayer = isPlayer1 ? state.player2 : state.player1;
    const attacker = player.field[attackerIndex];
    let targetDied = false;

    if (!attacker || attacker.hasAttacked) return { cancelled: false, targetDied: false };

    if (defenderIndex >= 0) {
      const defender = defenderPlayer.field[defenderIndex];
      if (defender) {
        // Trigger on_attack traps BEFORE damage calculation
        const trapResult = this.triggerTraps(state, 'on_attack', isPlayer1 ? 'player2' : 'player1', { attacker, defender });
        if (trapResult.cancelled) {
           attacker.hasAttacked = true;
           this.checkWinCondition(state);
           return { cancelled: true, targetDied: false, trapMessage: trapResult.effectMessage };
        }

        const damage = Math.max(0, attacker.attack - defender.defense);
        defender.hp -= damage;
        attacker.hasAttacked = true;

        if (defender.hp <= 0) {
          targetDied = true;
          const deadCard = defenderPlayer.field[defenderIndex];
          defenderPlayer.field[defenderIndex] = null as any;
          if(!defenderPlayer.graveyard) defenderPlayer.graveyard = [];
          defenderPlayer.graveyard.push(deadCard);
        }
      }
    } else {
      // Direct attack if opponent has no cards
      const hasDefenders = defenderPlayer.field.some(c => !!c);
      if (!hasDefenders) {
        // Trigger on_attack traps for direct attacks too!
        const trapResult = this.triggerTraps(state, 'on_attack', isPlayer1 ? 'player2' : 'player1', { attacker, defender: null });
        if (trapResult.cancelled) {
           attacker.hasAttacked = true;
           this.checkWinCondition(state);
           return { cancelled: true, targetDied: false, trapMessage: trapResult.effectMessage };
        }

        defenderPlayer.hp -= Math.max(0, attacker.attack);
        attacker.hasAttacked = true;
      }
    }

    this.checkWinCondition(state);
    return { cancelled: false, targetDied };
  }

  useAbility(state: GameState, cardIndex: number, isPlayer1: boolean): void {
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return;
    }

    const player = isPlayer1 ? state.player1 : state.player2;
    const opponent = isPlayer1 ? state.player2 : state.player1;
    const card = player.field[cardIndex];

    if (card && !card.hasUsedAbility) {
      if (!card.specialAbility) return;
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
          opponent.field.forEach(c => { if (c) c.defense = Math.max(0, c.defense - ability.value); });
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
          if (player.graveyard && player.graveyard.length > 0) {
            const revivedCard = player.graveyard.shift();
            let emptyIndex = -1;
            while (player.field.length < 5) player.field.push(null as any);
            for (let i = 0; i < 5; i++) { if (!player.field[i]) { emptyIndex = i; break; } }
            
            if (revivedCard && emptyIndex !== -1) {
              revivedCard.hasAttacked = false;
              revivedCard.hasUsedAbility = false;
              player.field[emptyIndex] = revivedCard;
            } else if (revivedCard) {
              // No space, return to graveyard
              player.graveyard.unshift(revivedCard);
            }
          }
          break;
      }
    }

    this.checkWinCondition(state);
  }

  endTurn(state: GameState): void {
    state.phase = state.phase === 'end' ? 'draw' : this.getNextPhase(state.phase, state.turnNumber);

    if (state.phase === 'draw') {
      state.currentTurn = state.currentTurn === 'player1' ? 'player2' : 'player1';
      state.turnNumber++;
      
      // Reset card flags for the active player
      const activePlayer = state.currentTurn === 'player1' ? state.player1 : state.player2;
      activePlayer.field.forEach(card => {
        if (card) {
          card.hasAttacked = false;
          card.hasUsedAbility = false;
        }
      });
      
      // Auto-draw card
      this.drawCard(state, state.currentTurn === 'player1');
      // Advance automatically to main phase after drawing
      setTimeout(() => {
        if (state) state.phase = 'main';
      }, 1000);
    }
  }

  private getNextPhase(phase: string, turnNumber: number): 'draw' | 'main' | 'battle' | 'end' {
    const phases: ('draw' | 'main' | 'battle' | 'end')[] = ['draw', 'main', 'battle', 'end'];
    let index = phases.indexOf(phase as any);
    
    // Regla de Yu-Gi-Oh!: El jugador que va primero en el Turno 1 no puede atacar.
    // Saltamos la fase de batalla si es el turno 1 y estamos en la fase principal.
    if (turnNumber === 1 && phase === 'main') {
      return 'end';
    }

    return phases[(index + 1) % phases.length];
  }

  // Activa trampas automáticamente en respuesta a eventos. Retorna objeto con cancelación y mensaje del efecto.
  private triggerTraps(state: GameState, trigger: 'on_attack' | 'on_summon', trapOwner: 'player1' | 'player2', data: any): { cancelled: boolean, trapName?: string, effectMessage?: string } {
    const player = trapOwner === 'player1' ? state.player1 : state.player2;
    const opponent = trapOwner === 'player1' ? state.player2 : state.player1;
    let actionCancelled = false;
    let trapName = '';
    let effectMessage = '';

    if (!player.spellZone) return { cancelled: false };

    // Buscar una trampa boca abajo que coincida con el trigger
    for (let i = 0; i < player.spellZone.length; i++) {
      const card = player.spellZone[i];
      if (card && card.isFaceDown && card.cardClass === 'trap' && card.trapTrigger === trigger) {

        // ¡Se activa la trampa!
        trapName = card.name;
        card.isFaceDown = false;
        const effectValue = card.effectValue || 0;

        // Lógica dura para trampas específicas (Protección, Trampa Rocas, etc.)
        if (trigger === 'on_attack') {
           actionCancelled = true;
           effectMessage = `¡${trapName} activada! Ataque bloqueado.`;
        } else if (trigger === 'on_summon') {
           // Daño al monstruo invocado
           const summoned = data.summonedCard;
           if (summoned) {
              summoned.hp -= effectValue;
              effectMessage = `¡${trapName} activada! -${effectValue} HP al monstruo invocado.`;
              if (summoned.hp <= 0) {
                 // El monstruo invocado muere instantáneamente por la trampa
                 const zone = opponent.field;
                 const idx = zone.indexOf(summoned);
                 if (idx !== -1) {
                    zone[idx] = null as any;
                    if (!opponent.graveyard) opponent.graveyard = [];
                    opponent.graveyard.push(summoned);
                    effectMessage += ` ¡Monstruo destruido!`;
                 }
              }
           }
        }

        // Destruir la trampa
        player.spellZone[i] = null as any;
        if (!player.graveyard) player.graveyard = [];
        player.graveyard.push(card);

        // Solo activamos 1 trampa a la vez para este evento
        break;
      }
    }

    return { cancelled: actionCancelled, trapName, effectMessage };
  }

  applyFieldEffect(state: GameState): void {
    // Restaurar stats base primero (no lo hacemos para no romper buffos previos, 
    // en un juego completo se tendría atk/def actual y original)
    // Efecto simple: Sumar al ATK/DEF según el tipo
    const applyToPlayer = (player: PlayerState, fieldCard: PokemonCard) => {
       const typeToBuff = fieldCard.name.includes('Soleado') ? 'fire' : 
                          fieldCard.name.includes('Lluvia') ? 'water' :
                          fieldCard.name.includes('Roca') ? 'rock' : null;
       const buffValue = fieldCard.effectValue || 200;
       
       if (typeToBuff) {
          player.field.forEach(c => {
             if (c && c.types.includes(typeToBuff)) {
                // Buff solo visual o se acumula (simplificado)
                c.attack += buffValue;
                c.defense += buffValue;
             }
          });
       }
    };

    if (state.player1.fieldCard) {
       applyToPlayer(state.player1, state.player1.fieldCard);
       applyToPlayer(state.player2, state.player1.fieldCard);
    }
    if (state.player2.fieldCard) {
       applyToPlayer(state.player1, state.player2.fieldCard);
       applyToPlayer(state.player2, state.player2.fieldCard);
    }
  }

  evolvePokemon(state: GameState, isPlayer1: boolean, fieldIndex: number, extraDeckIndex: number): boolean {
    const player = isPlayer1 ? state.player1 : state.player2;
    const fieldCard = player.field[fieldIndex];
    const extraCard = player.extraDeck[extraDeckIndex];

    if (!fieldCard || !extraCard) return false;
    
    // Regla simple: Mismo tipo primario y Nivel > Nivel Actual
    if (extraCard.types[0] === fieldCard.types[0] && extraCard.level > fieldCard.level) {
       // Enviamos la preevolución al cementerio
       if (!player.graveyard) player.graveyard = [];
       player.graveyard.push(fieldCard);
       
       // Ponemos la evolución en el campo
       extraCard.hasAttacked = false;
       extraCard.hasUsedAbility = false;
       player.field[fieldIndex] = extraCard;
       
       // Quitamos la carta del extra deck
       player.extraDeck.splice(extraDeckIndex, 1);
       return true;
    }
    return false;
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

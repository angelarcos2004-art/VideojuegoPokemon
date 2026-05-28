import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { PlayerState } from '../models/player.model';
import { PokemonCard } from '../models/pokemon-card.model';
import { ALL_POKEMON_CARDS } from '../models/all-pokemon-cards';
import { AudioService } from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameState$ = new BehaviorSubject<GameState | null>(null);

  constructor(private audioService: AudioService) {}

  private prepareDecks(fullDeck: PokemonCard[]): { main: PokemonCard[], extra: PokemonCard[] } {
    const main: PokemonCard[] = [];
    const extra: PokemonCard[] = [];
    
    for (const card of fullDeck) {
      const isPokemon = card.cardClass === 'pokemon' || !card.cardClass;
      if (isPokemon && card.level > 3) {
        // Solo enviar al Extra Deck si el jugador también incluyó una pre-evolución en su mazo principal
        const hasPreEvolution = fullDeck.some(c => 
          (c.cardClass === 'pokemon' || !c.cardClass) && 
          c.types[0] === card.types[0] && 
          c.level < card.level
        );

        if (hasPreEvolution) {
          extra.push(card);
        } else {
          main.push(card);
        }
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
      phase: 'main',
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
      phase: 'main',
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
    } else {
      // Deck Out!
      state.winner = isPlayer1 ? 'player2' : 'player1';
    }
  }

  private applyFieldBuffsToCard(card: PokemonCard, player1FieldCard: PokemonCard | undefined, player2FieldCard: PokemonCard | undefined, isPlayer1: boolean) {
    const applyField = (fieldCard: PokemonCard, isOwner: boolean) => {
       const typeToBuff = fieldCard.name.includes('Soleado') ? 'fire' : 
                          fieldCard.name.includes('Lluvia') ? 'water' :
                          fieldCard.name.includes('Roca') ? 'rock' : null;
       const buffValue = fieldCard.effectValue || 200;
       
       if (typeToBuff && card.types.includes(typeToBuff)) {
          card.attack += buffValue;
          card.defense += buffValue;
       } else if (fieldCard.name.includes('Fortaleza Mística')) {
          if (isOwner) {
            card.attack += buffValue;
            card.defense += buffValue;
          }
       }
    };

    if (player1FieldCard) applyField(player1FieldCard, isPlayer1);
    if (player2FieldCard) applyField(player2FieldCard, !isPlayer1);
  }

  discardCardFromField(state: GameState, isPlayer1: boolean, slotIndex: number, isSpellZone: boolean = false): void {
    const player = isPlayer1 ? state.player1 : state.player2;
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return;
    }
    const zone = isSpellZone ? player.spellZone : player.field;
    if (slotIndex >= 0 && slotIndex < zone.length && zone[slotIndex]) {
      const discardedCard = zone[slotIndex];
      zone[slotIndex] = null as any; // Empty the slot
      if (!player.graveyard) player.graveyard = [];
      player.graveyard.push(discardedCard);
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
            this.applyFieldBuffsToCard(playedCard, state.player1.fieldCard, state.player2.fieldCard, isPlayer1);
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
              this.applyFieldBuffsToCard(playedCard, state.player1.fieldCard, state.player2.fieldCard, isPlayer1);
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
          case 'heal': {
            const target = player.field[cardIndex];
            if (target) {
              const baseCard = ALL_POKEMON_CARDS.find(c => c.id === target.id);
              const maxHp = baseCard ? baseCard.hp : 1000;
              target.hp = Math.min(target.hp + effectValue, maxHp);
              effectMessage = `¡Poción usada! ${target.name} fue curado.`;
            } else {
              effectMessage = `Poción falló: No hay Pokémon en esta columna.`;
            }
            break;
          }
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
            // Field spells should be played to the field zone, not the spell zone
            // Just in case it somehow got here:
            player.field.forEach(c => { if (c) { c.attack += effectValue; c.defense += effectValue; } });
            effectMessage = `¡Efecto de campo aplicado! +${effectValue} ATK/DEF`;
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

    if (attacker.status === 'paralyzed') {
      attacker.hasAttacked = true;
      attacker.status = null;
      return { cancelled: true, targetDied: false, trapMessage: `¡Ataque falló! ${attacker.name} estaba paralizado.` };
    }

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
          
          // ¡Daño de Penetración / Daño Excedente!
          // Si el daño fue tan grande que los HP quedaron en negativo, ese daño sobrante va al jugador.
          const excessDamage = Math.abs(defender.hp);
          if (excessDamage > 0) {
             defenderPlayer.hp -= excessDamage;
          }

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
        case 'burn':
          this.applyStatusToRandomOpponent(opponent, 'burned');
          break;
        case 'poison':
          this.applyStatusToRandomOpponent(opponent, 'poisoned');
          break;
        case 'paralyze':
          this.applyStatusToRandomOpponent(opponent, 'paralyzed');
          break;
      }
    }

    this.checkWinCondition(state);
  }

  private applyStatusToRandomOpponent(opponent: PlayerState, status: 'burned' | 'poisoned' | 'paralyzed') {
    const validTargets = opponent.field.filter(c => c && c.status !== status);
    if (validTargets.length > 0) {
      const target = validTargets[Math.floor(Math.random() * validTargets.length)];
      target.status = status;
    }
  }

  discardCard(state: GameState, isPlayer1: boolean, cardIndex: number): void {
    const player = isPlayer1 ? state.player1 : state.player2;
    if (state.currentTurn !== (isPlayer1 ? 'player1' : 'player2') || state.phase !== 'main') {
      return;
    }
    if (cardIndex >= 0 && cardIndex < player.hand.length) {
      const discardedCard = player.hand.splice(cardIndex, 1)[0];
      if (!player.graveyard) player.graveyard = [];
      player.graveyard.push(discardedCard);
    }
  }

  endTurn(state: GameState): void {
    if (state.winner) return;
    state.phase = state.phase === 'end' ? 'draw' : this.getNextPhase(state.phase, state.turnNumber);

    if (state.phase === 'end') {
      this.processStatuses(state.player1);
      this.processStatuses(state.player2);
      this.checkWinCondition(state);
      state.phase = 'draw';
    }

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
    
    // Regla de Yu-Gi-Oh! modificada: Ni el jugador 1 ni el jugador 2 pueden atacar en su primer turno.
    // Saltamos la fase de batalla si es el turno 1 o 2 y estamos en la fase principal.
    if (turnNumber <= 2 && phase === 'main') {
      return 'end';
    }

    return phases[(index + 1) % phases.length];
  }

  private processStatuses(player: PlayerState): void {
    let hasDeaths = false;
    player.field.forEach(card => {
      if (card && card.status) {
        if (card.status === 'burned') {
          card.hp -= 150; // Burn damage
        } else if (card.status === 'poisoned') {
          card.hp -= 250; // Poison is stronger
          this.audioService.playPoisonSound();
        }
        
        if (card.hp <= 0) {
          hasDeaths = true;
        }
      }
    });

    if (hasDeaths) {
      for (let i = 0; i < player.field.length; i++) {
         const card = player.field[i];
         if (card && card.hp <= 0) {
            player.field[i] = null as any;
            if (!player.graveyard) player.graveyard = [];
            player.graveyard.push(card);
         }
      }
    }
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
    const applyToPlayer = (player: PlayerState, fieldCard: PokemonCard, isOwner: boolean) => {
       const typeToBuff = fieldCard.name.includes('Soleado') ? 'fire' : 
                          fieldCard.name.includes('Lluvia') ? 'water' :
                          fieldCard.name.includes('Roca') ? 'rock' : null;
       const buffValue = fieldCard.effectValue || 200;
       
       if (typeToBuff) {
          player.field.forEach(c => {
             if (c && c.types.includes(typeToBuff)) {
                c.attack += buffValue;
                c.defense += buffValue;
             }
          });
       } else if (fieldCard.name.includes('Fortaleza Mística')) {
          if (isOwner) {
            player.field.forEach(c => {
               if (c) {
                  c.attack += buffValue;
                  c.defense += buffValue;
               }
            });
          }
       }
    };

    if (state.player1.fieldCard) {
       applyToPlayer(state.player1, state.player1.fieldCard, true);
       applyToPlayer(state.player2, state.player1.fieldCard, false);
    }
    if (state.player2.fieldCard) {
       applyToPlayer(state.player1, state.player2.fieldCard, false);
       applyToPlayer(state.player2, state.player2.fieldCard, true);
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
       this.applyFieldBuffsToCard(extraCard, state.player1.fieldCard, state.player2.fieldCard, isPlayer1);
       player.field[fieldIndex] = extraCard;
       
       // Quitamos la carta del extra deck
       player.extraDeck.splice(extraDeckIndex, 1);
       return true;
    }
    return false;
  }

  applyTargetedMagic(state: GameState, isPlayer1: boolean, fieldIndex: number, handCardIndex: number): boolean {
    const player = isPlayer1 ? state.player1 : state.player2;
    const target = player.field[fieldIndex];
    const spell = player.hand[handCardIndex];

    if (!target || !spell || spell.cardClass !== 'magic') return false;

    if (spell.magicEffect === 'heal') {
      const baseCard = ALL_POKEMON_CARDS.find(c => c.id === target.id);
      const maxHp = baseCard ? baseCard.hp : 1000;
      target.hp = Math.min(target.hp + (spell.effectValue || 0), maxHp);
    } else {
      return false; 
    }

    player.hand.splice(handCardIndex, 1);
    if (!player.graveyard) player.graveyard = [];
    player.graveyard.push(spell);

    return true;
  }

  private checkWinCondition(state: GameState): void {
    if (state.player1.hp <= 0) {
      state.winner = 'player2';
      this.gameState$.next(state);
    } else if (state.player2.hp <= 0) {
      state.winner = 'player1';
      this.gameState$.next(state);
    }
  }

  endGame(state: GameState): void {
    this.gameState$.next(null);
  }
}

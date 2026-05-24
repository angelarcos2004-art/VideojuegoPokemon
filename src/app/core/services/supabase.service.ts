import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { PokemonCard } from '../models/pokemon-card.model';
import { ALL_POKEMON_CARDS } from '../models/all-pokemon-cards';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.anonKey
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }

  async signUp(email: string, password: string, username: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username
        }
      }
    });

    if (error) throw error;

    return data;
  }

  async signIn(email: string, password: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  }

  async signOut(): Promise<void> {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getSession(): Promise<any> {
    const { data } = await this.supabase.auth.getSession();
    return data.session;
  }

  async getCurrentUser(): Promise<any> {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  async createProfile(userId: string, email: string, username: string): Promise<void> {
    const { error } = await this.supabase
      .from('profiles')
      .insert([{ id: userId, email, username }]);

    if (error) throw error;
  }

  async getProfile(userId: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  }

  async insertGameResult(result: any): Promise<void> {
    const { error } = await this.supabase
      .from('game_results')
      .insert([result]);

    if (error) throw error;
  }

  async createGameRoom(player1Id: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('game_rooms')
      .insert([{ player1_id: player1Id, status: 'waiting' }])
      .select();

    if (error) throw error;
    return data?.[0];
  }

  async joinGameRoom(roomId: string, player2Id: string): Promise<void> {
    const { error } = await this.supabase
      .from('game_rooms')
      .update({ player2_id: player2Id, status: 'active' })
      .eq('id', roomId);

    if (error) throw error;
  }

  async updateGameState(roomId: string, state: any): Promise<void> {
    const { error } = await this.supabase
      .from('game_state')
      .upsert({ room_id: roomId, state_json: JSON.stringify(state), updated_at: new Date().toISOString() });

    if (error) throw error;
  }

  async getGameState(roomId: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('game_state')
      .select('state_json')
      .eq('room_id', roomId)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // ignore row not found
    return data ? JSON.parse(data.state_json) : null;
  }

  subscribeToGameState(roomId: string, callback: (payload: any) => void) {
    return this.supabase
      .channel(`game_room_${roomId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'game_state', filter: `room_id=eq.${roomId}` },
        (payload) => {
          if (payload.new && (payload.new as any).state_json) {
            callback(JSON.parse((payload.new as any).state_json));
          }
        }
      )
      .subscribe();
  }

  subscribeToRoomStatus(roomId: string, callback: (payload: any) => void) {
    return this.supabase
      .channel(`room_status_${roomId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'game_rooms', filter: `id=eq.${roomId}` },
        (payload) => {
          callback(payload.new);
        }
      )
      .subscribe();
  }

  async getAvailableRooms(): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('game_rooms')
      .select('*')
      .eq('status', 'waiting')
      .limit(10);

    if (error) throw error;
    return data || [];
  }

  async saveDeck(userId: string, deckName: string, cards: any[]): Promise<void> {
    // 1. Crear el mazo y obtener su ID
    const { data: deckData, error: deckError } = await this.supabase
      .from('decks')
      .insert([{ user_id: userId, name: deckName }])
      .select('id')
      .single();

    if (deckError) throw deckError;
    const deckId = deckData.id;

    // 2. Calcular cantidades
    const cardCounts = new Map<number, number>();
    for (const card of cards) {
      cardCounts.set(card.id, (cardCounts.get(card.id) || 0) + 1);
    }

    // 3. Insertar las cartas en deck_cards
    const deckCardsData = Array.from(cardCounts.entries()).map(([cardId, qty]) => ({
      deck_id: deckId,
      pokemon_card_id: cardId,
      quantity: qty
    }));

    const { error: cardsError } = await this.supabase
      .from('deck_cards')
      .insert(deckCardsData);

    if (cardsError) throw cardsError;
  }

  async updateDeck(deckId: string, deckName: string, cards: any[]): Promise<void> {
    // 1. Actualizar el nombre del mazo
    const { error: deckError } = await this.supabase
      .from('decks')
      .update({ name: deckName })
      .eq('id', deckId);

    if (deckError) throw deckError;

    // 2. Eliminar las cartas antiguas asociadas al mazo
    const { error: deleteError } = await this.supabase
      .from('deck_cards')
      .delete()
      .eq('deck_id', deckId);

    if (deleteError) throw deleteError;

    // 3. Insertar las nuevas cartas
    const cardCounts = new Map<number, number>();
    for (const card of cards) {
      cardCounts.set(card.id, (cardCounts.get(card.id) || 0) + 1);
    }

    const deckCardsData = Array.from(cardCounts.entries()).map(([cardId, qty]) => ({
      deck_id: deckId,
      pokemon_card_id: cardId,
      quantity: qty
    }));

    const { error: cardsError } = await this.supabase
      .from('deck_cards')
      .insert(deckCardsData);

    if (cardsError) throw cardsError;
  }

  async deleteDeck(deckId: string): Promise<void> {
    const { error } = await this.supabase
      .from('decks')
      .delete()
      .eq('id', deckId);

    if (error) throw error;
  }

  async getUserDecks(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('decks')
      .select('id, name, created_at, deck_cards(quantity, pokemon_cards(*))')
      .eq('user_id', userId);

    if (error) throw error;
    
    // Reconstruir el array de cartas plano que espera el juego
    return (data || []).map(deck => {
      const flatCards: any[] = [];
      if (deck.deck_cards) {
        deck.deck_cards.forEach((dc: any) => {
          const card = dc.pokemon_cards;
          if (card) {
             const match = ALL_POKEMON_CARDS.find(c => c.id === card.id);
             const formattedCard = {
               ...card,
               specialAbility: card.special_ability || card.specialAbility,
               description: match ? match.description : card.description
             };
             // Añadir tantas copias de la carta como indique quantity
             for (let i = 0; i < dc.quantity; i++) {
               flatCards.push(formattedCard);
             }
          }
        });
      }
      
      return {
        ...deck,
        cards: flatCards
      };
    });
  }

  async addToCollection(userId: string, card: PokemonCard): Promise<void> {
    const { error: cardError } = await this.supabase
      .from('pokemon_cards')
      .upsert([{ 
        id: card.id, 
        name: card.name, 
        image: card.image, 
        types: card.types, 
        hp: card.hp, 
        attack: card.attack, 
        defense: card.defense, 
        special_ability: card.specialAbility, 
        level: card.level, 
        rarity: card.rarity, 
        description: card.description 
      }]);

    if (cardError) {
      console.error('Supabase Upsert Card Error:', cardError);
      throw cardError;
    }

    // Check if user already has this card
    const { data: existing } = await this.supabase
      .from('user_collection')
      .select('quantity')
      .eq('user_id', userId)
      .eq('pokemon_card_id', card.id)
      .single();

    if (existing) {
      const { error } = await this.supabase
        .from('user_collection')
        .update({ quantity: existing.quantity + 1 })
        .eq('user_id', userId)
        .eq('pokemon_card_id', card.id);
      if (error) {
        console.error('Supabase Update Collection Error:', error);
        throw error;
      }
    } else {
      const { error } = await this.supabase
        .from('user_collection')
        .insert([{ user_id: userId, pokemon_card_id: card.id, quantity: 1 }]);
      if (error) {
        console.error('Supabase Insert Collection Error:', error);
        throw error;
      }
    }
  }

  async getUserCollection(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('user_collection')
      .select('*, pokemon_cards(*)')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }

  async getUserGameResults(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('game_results')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }
}

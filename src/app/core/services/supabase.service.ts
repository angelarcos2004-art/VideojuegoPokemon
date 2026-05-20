import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

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
      password
    });

    if (error) throw error;

    if (data.user) {
      await this.createProfile(data.user.id, email, username);
    }

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
      .upsert({ room_id: roomId, state_json: JSON.stringify(state), updated_at: new Date() });

    if (error) throw error;
  }

  async getGameState(roomId: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('game_state')
      .select('state_json')
      .eq('room_id', roomId)
      .single();

    if (error) throw error;
    return data ? JSON.parse(data.state_json) : null;
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
    const { error } = await this.supabase
      .from('decks')
      .insert([{ user_id: userId, name: deckName, cards_json: JSON.stringify(cards) }]);

    if (error) throw error;
  }

  async getUserDecks(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('decks')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }

  async addToCollection(userId: string, pokemonId: number): Promise<void> {
    const { error } = await this.supabase
      .from('user_collection')
      .insert([{ user_id: userId, pokemon_card_id: pokemonId, quantity: 1 }]);

    if (error) throw error;
  }

  async getUserCollection(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('user_collection')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }

  async getUserGameResults(userId: string): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('game_results')
      .select('*')
      .or(`winner_id.eq.${userId},loser_id.eq.${userId}`);

    if (error) throw error;
    return data || [];
  }
}

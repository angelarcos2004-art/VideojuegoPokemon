import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PokemonCard, SpecialAbility } from '../models/pokemon-card.model';
import { SqliteService } from './sqlite.service';

import { ALL_POKEMON_CARDS } from '../models/all-pokemon-cards';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.pokeapi.baseUrl;
  private abilityMap: { [key: string]: SpecialAbility } = {
    fire: { name: 'Burn', description: 'Boost attack for next turn', effect: 'boost_attack', value: 10 },
    water: { name: 'Aqua Heal', description: 'Restore 50 HP', effect: 'heal', value: 50 },
    grass: { name: 'Spore Shield', description: 'Block next attack', effect: 'block', value: 0 },
    electric: { name: 'Thunder Strike', description: 'Direct damage to opponent', effect: 'direct_damage', value: 50 },
    psychic: { name: 'Mind Read', description: 'Draw extra card', effect: 'draw_card', value: 1 },
    ice: { name: 'Freeze', description: 'Reduce opponent defense', effect: 'reduce_defense', value: 15 },
    default: { name: 'Basic Attack', description: 'Standard attack', effect: 'direct_damage', value: 0 }
  };

  constructor(
    private http: HttpClient,
    private sqliteService: SqliteService
  ) {}

  async getPokemon(id: number): Promise<PokemonCard> {
    return this.searchPokemonByName(id.toString());
  }

  async searchPokemonByName(nameOrId: string): Promise<PokemonCard> {
    const cacheKey = `pokemon_${nameOrId}`;
    
    // Fast, synchronous local storage cache
    try {
      const cachedStr = localStorage.getItem(cacheKey);
      if (cachedStr) {
        return JSON.parse(cachedStr) as PokemonCard;
      }
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }

    try {
      const response = await firstValueFrom(
        this.http.get<any>(`${this.baseUrl}/pokemon/${nameOrId}`)
      );
      const card = this.mapToPokemonCard(response);
      
      try {
        localStorage.setItem(cacheKey, JSON.stringify(card));
        // Also cache by ID if searched by name
        localStorage.setItem(`pokemon_${card.id}`, JSON.stringify(card));
      } catch (e) {
        // Ignore cache save error
      }
      
      return card;
    } catch (error) {
      console.error(`Failed to fetch Pokémon ${nameOrId}:`, error);
      throw error;
    }
  }

  async getAllPokemons(): Promise<PokemonCard[]> {
    // 100% INMEDIATO: Usar la base de datos interna con 1025 Pokémon
    return ALL_POKEMON_CARDS;
  }

  async getRandomPokemons(count: number): Promise<PokemonCard[]> {
    const shuffled = [...ALL_POKEMON_CARDS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  private generateRandomIds(count: number): number[] {
    const ids: number[] = [];
    for (let i = 0; i < count; i++) {
      // Existen 1025 Pokémon en la Pokédex Nacional actualmente (hasta la Generación 9)
      ids.push(Math.floor(Math.random() * 1025) + 1);
    }
    return ids;
  }

  private mapToPokemonCard(data: any): PokemonCard {
    const hp = (data.stats[0]?.base_stat || 50) * 10;
    const attack = (data.stats[1]?.base_stat || 50) * 2;
    const defense = (data.stats[2]?.base_stat || 50) * 2;
    const level = Math.floor((data.base_experience || 60) / 30);
    const type = data.types?.[0]?.type?.name || 'default';

    const rarity = data.base_experience > 200 ? 'legendary' : data.base_experience > 100 ? 'rare' : 'common';

    return {
      id: data.id,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      image: data.sprites?.other?.['official-artwork']?.front_default || data.sprites?.front_default || '',
      types: data.types?.map((t: any) => t.type.name) || [],
      hp: Math.min(hp, 1200),
      attack,
      defense,
      specialAbility: this.abilityMap[type] || this.abilityMap['default'],
      level: Math.max(1, level),
      rarity,
      description: ALL_POKEMON_CARDS.find(c => c.id === data.id)?.description || `A powerful ${type}-type Pokémon.`
    };
  }
}

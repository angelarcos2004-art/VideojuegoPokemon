export interface SpecialAbility {
  name: string;
  description: string;
  effect: 'heal' | 'boost_attack' | 'reduce_defense' | 'draw_card' | 'block' | 'direct_damage' | 'revive';
  value: number;
}

export interface PokemonCard {
  id: number;
  name: string;
  image: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
  specialAbility: SpecialAbility;
  level: number;
  rarity: 'common' | 'rare' | 'legendary';
  description: string;
}

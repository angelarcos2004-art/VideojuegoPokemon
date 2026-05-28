export interface SpecialAbility {
  name: string;
  description: string;
  effect: 'heal' | 'boost_attack' | 'reduce_defense' | 'draw_card' | 'block' | 'direct_damage' | 'revive' | 'burn' | 'poison' | 'paralyze';
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
  specialAbility?: SpecialAbility;
  level: number;
  rarity: 'common' | 'rare' | 'legendary';
  description: string;
  cardClass?: 'pokemon' | 'magic' | 'trap';
  magicEffect?: 'heal' | 'boost_atk' | 'boost_def' | 'field';
  trapTrigger?: 'on_attack' | 'on_summon';
  effectValue?: number;
  hasAttacked?: boolean;
  hasUsedAbility?: boolean;
  isFaceDown?: boolean;
  status?: 'burned' | 'poisoned' | 'paralyzed' | null;
}

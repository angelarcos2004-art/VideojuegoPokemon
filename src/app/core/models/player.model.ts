import { PokemonCard } from './pokemon-card.model';

export interface PlayerState {
  userId: string;
  username: string;
  hp: number;
  hand: PokemonCard[];
  deck: PokemonCard[];
  field: PokemonCard[];
  spellZone: PokemonCard[];
  fieldCard?: PokemonCard;
  graveyard: PokemonCard[];
}

export interface Player {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

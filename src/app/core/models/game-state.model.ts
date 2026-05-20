import { PlayerState } from './player.model';

export interface GameState {
  roomId?: string;
  gameMode: 'cpu' | 'online';
  phase: 'draw' | 'main' | 'battle' | 'end';
  currentTurn: 'player1' | 'player2';
  player1: PlayerState;
  player2: PlayerState;
  winner?: string;
  turnNumber: number;
  createdAt?: Date;
  updatedAt?: Date;
}

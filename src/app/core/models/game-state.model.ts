import { PlayerState } from './player.model';

export type { PlayerState };

export interface GameState {
  roomId?: string;
  gameMode: 'cpu' | 'online';
  phase: 'draw' | 'main' | 'battle' | 'end';
  currentTurn: 'player1' | 'player2';
  player1: PlayerState;
  player2: PlayerState;
  winner?: string;
  turnNumber: number;
  lastAttack?: {
    attackerId: 'player1' | 'player2';
    attackerIndex: number;
    targetIndex: number;
    timestamp: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

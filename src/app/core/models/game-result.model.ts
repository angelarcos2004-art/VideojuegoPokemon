export interface GameResult {
  id: string;
  roomId?: string;
  player1Id: string;
  player1Name: string;
  player2Id: string;
  player2Name: string;
  winnerId: string;
  loserId: string;
  gameMode: 'cpu' | 'online';
  turnCount: number;
  playedAt: Date;
}

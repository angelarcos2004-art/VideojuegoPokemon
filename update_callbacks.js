const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// Update listenToRoom
const listenToRoomRegex = /private listenToRoom\(roomId: string\) {[\s\S]*?this\.roomSubscription = this\.supabaseService\.subscribeToRoomStatus\(roomId, async \(room\) => {[\s\S]*?if \(room\.status === 'active' && room\.player2_id\) {[\s\S]*?\/\/ Opponent joined! Initialize the game[\s\S]*?await this\.initializeOnlineGame\(roomId, room\.player2_id\);[\s\S]*?}[\s\S]*?}\);[\s\S]*?}/;

const listenToRoomReplacement = `private listenToRoom(roomId: string) {
    this.roomSubscription = this.supabaseService.subscribeToRoomStatus(roomId, (room) => {
      this.ngZone.run(async () => {
        if (room.status === 'active' && room.player2_id) {
          // Opponent joined! Initialize the game
          await this.initializeOnlineGame(roomId, room.player2_id);
          this.cdr.detectChanges();
        }
      });
    });
  }`;

// Update listenToGameState
const listenToGameStateRegex = /private listenToGameState\(roomId: string\) {[\s\S]*?this\.gameSubscription = this\.supabaseService\.subscribeToGameState\(roomId, \(state\) => {[\s\S]*?this\.gameState = state;[\s\S]*?this\.gameService\['gameState\$'\]\.next\(state\);[\s\S]*?if \(state\.winner && !this\.showGameOver\) {[\s\S]*?this\.handleGameOver\(\);[\s\S]*?}[\s\S]*?}\);[\s\S]*?\/\/ Try fetch existing in case we missed event[\s\S]*?this\.supabaseService\.getGameState\(roomId\)\.then\(state => {[\s\S]*?if \(state\) this\.gameState = state;[\s\S]*?}\)\.catch\(\(\) => {}\);[\s\S]*?}/;

const listenToGameStateReplacement = `private listenToGameState(roomId: string) {
    this.gameSubscription = this.supabaseService.subscribeToGameState(roomId, (state) => {
      this.ngZone.run(() => {
        this.gameState = state;
        this.gameService['gameState$'].next(state);
        if (state.winner && !this.showGameOver) {
          this.handleGameOver();
        }
        this.cdr.detectChanges();
      });
    });
    // Try fetch existing in case we missed event
    this.supabaseService.getGameState(roomId).then(state => {
      if (state) {
        this.ngZone.run(() => {
          this.gameState = state;
          this.cdr.detectChanges();
        });
      }
    }).catch(() => {});
  }`;

content = content.replace(listenToRoomRegex, listenToRoomReplacement);
content = content.replace(listenToGameStateRegex, listenToGameStateReplacement);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated callbacks with NgZone!');

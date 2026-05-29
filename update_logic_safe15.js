const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /this\.listenToRoom\(room\.id\);/,
  `this.debugStatus = 'Jugador 1: Sala creada, esperando oponente...';\n      this.listenToRoom(room.id);`
);

content = content.replace(
  /private listenToRoom\(roomId: string\) {\n    this\.debugStatus = 'Escuchando sala...';/,
  `private listenToRoom(roomId: string) {\n    this.debugStatus = 'Jugador 1: Escuchando WebSocket de la sala...';`
);

content = content.replace(
  /async joinRoom\(roomId: string\): Promise<void> {\n    try {\n      if \(!this\.currentUserId\) {/,
  `async joinRoom(roomId: string): Promise<void> {\n    try {\n      this.debugStatus = 'Jugador 2: Intentando unirse...';\n      if (!this.currentUserId) {`
);

content = content.replace(
  /this\.listenToGameState\(roomId\);\n      this\.cdr\.detectChanges\(\);/,
  `this.listenToGameState(roomId);\n      this.debugStatus = 'Jugador 2: Unido exitosamente. Esperando que Jugador 1 cree el tablero...';\n      this.cdr.detectChanges();`
);

content = content.replace(
  /this\.errorMessage = 'Falló al unirse a la sala de juego';/,
  `this.errorMessage = 'Falló al unirse a la sala: ' + (error as Error).message;\n      this.debugStatus = 'Error al unirse';`
);

// Update listenToGameState to log
content = content.replace(
  /private listenToGameState\(roomId: string\) {/,
  `private listenToGameState(roomId: string) {\n    if(this.myPlayerKey === 'player2') this.debugStatus = 'Jugador 2: Escuchando GameState...';`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

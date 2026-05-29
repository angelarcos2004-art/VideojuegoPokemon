const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// Add debug status string
content = content.replace(
  /tutorialMessage = '';/,
  `tutorialMessage = '';\n  debugStatus = 'Iniciado';`
);

// Update listenToRoom to track status
content = content.replace(
  /private listenToRoom\(roomId: string\) {/,
  `private listenToRoom(roomId: string) {\n    this.debugStatus = 'Escuchando sala...';`
);

content = content.replace(
  /if \(room\.status === 'active' && room\.player2_id && !this\.gameState\) {/,
  `if (room.status === 'active' && room.player2_id && !this.gameState) {\n          this.debugStatus = 'Sala activa (WebSocket). Inicializando...';`
);

content = content.replace(
  /if \(data && data\.status === 'active' && data\.player2_id && !this\.gameState\) {/,
  `if (data && data.status === 'active' && data.player2_id && !this.gameState) {\n          this.debugStatus = 'Sala activa (Polling). Inicializando...';`
);

// Update initializeOnlineGame to track status
content = content.replace(
  /private async initializeOnlineGame\(roomId: string, player2Id: string\) {[\s\S]*?try {/,
  `private async initializeOnlineGame(roomId: string, player2Id: string) {\n    try {\n      this.debugStatus = 'Preparando mazos...';`
);

content = content.replace(
  /const p2Decks = await this\.supabaseService\.getUserDecks\(player2Id\);/,
  `this.debugStatus = 'Obteniendo mazo del oponente...';\n      const p2Decks = await this.supabaseService.getUserDecks(player2Id);`
);

content = content.replace(
  /let p2Profile = null;/,
  `this.debugStatus = 'Obteniendo perfil del oponente...';\n      let p2Profile = null;`
);

content = content.replace(
  /const state = this\.gameService\.initializeOnlineGame\(/,
  `this.debugStatus = 'Generando estado inicial...';\n      const state = this.gameService.initializeOnlineGame(`
);

content = content.replace(
  /await this\.supabaseService\.updateGameState\(roomId, state\);/,
  `this.debugStatus = 'Guardando estado en DB...';\n      await this.supabaseService.updateGameState(roomId, state);\n      this.debugStatus = 'Estado guardado exitosamente. Esperando sync...';`
);

content = content.replace(
  /this\.errorMessage = "Failed to initialize game state";/,
  `this.errorMessage = "Fallo al inicializar: " + (e as Error).message;\n      this.debugStatus = 'Error de inicialización';`
);

fs.writeFileSync(path, content, 'utf8');

const pathHtml = 'src/app/pages/game/vs-player/vs-player.component.html';
let html = fs.readFileSync(pathHtml, 'utf8');

html = html.replace(
  /<p>Esperando al oponente\.\.\.<\/p>/,
  `<p>Esperando al oponente...</p>\n        <p style="font-size: 0.8rem; color: #666; margin-top: 10px;">Estado: {{ debugStatus }}</p>`
);

// Let's also fix the styling for the vs-player-container so it covers the screen properly
html = html.replace(
  /\.vs-player-container \{ padding: 40px; text-align: center; font-family: var\(--font-text\); background: rgba\(255,255,255,0\.8\); border-radius: 15px; margin: 20px auto; max-width: 800px; border: 4px solid var\(--pk-dark\); \}/,
  `.vs-player-wrapper { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 60px); background: var(--pk-light); background-image: var(--pk-bg-image); background-size: cover; background-position: center; }\n  .vs-player-container { padding: 40px; text-align: center; font-family: var(--font-text); background: var(--pk-white); border-radius: 20px; width: 90%; max-width: 800px; border: 6px solid var(--pk-dark); box-shadow: 10px 10px 0px var(--pk-dark); }`
);

html = html.replace(
  /<div class="vs-player-container" \*ngIf="!gameState">/,
  `<div class="vs-player-wrapper" *ngIf="!gameState">\n    <div class="vs-player-container">`
);

html = html.replace(
  /<\/div>\n        <div \*ngIf="errorMessage" class="error-message"/,
  `</div>\n    </div>\n        <div *ngIf="errorMessage" class="error-message"`
);

// Wait, the previous replacement inserted `</div>` at the end. We need to be careful with div matching.
// Let's just reconstruct the wrapper.
fs.writeFileSync(pathHtml, html, 'utf8');
console.log('Update successful!');

const fs = require('fs');
const file = './src/app/pages/game/vs-player/vs-player.component.ts';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/this\.gameService\['evolvePokemon'\]\(this\.gameState, index, this\.selectedExtraDeckIndex, this\.myPlayerKey === 'player1'\);/, 'this.gameService.evolvePokemon(this.gameState, this.myPlayerKey === "player1", index, this.selectedExtraDeckIndex);');

fs.writeFileSync(file, code);

const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace showToast method calls with showToastMsg
content = content.replace(/this\.showToast\(/g, 'this.showToastMsg(');

// Remove duplicate showToast method definition
content = content.replace(/showToast\(msg: string\) \{ this\.showToastMsg\(msg\); \}\n?/g, '');

// Fix healPokemon: we will just remove the heal block since it wasn't implemented in GameService
content = content.replace(
  /if \(handCard && handCard\.cardClass === 'magic' && handCard\.magicEffect === 'heal'\) \{[\s\S]*?return;\n        \}/,
  ''
);

// Fix activateSpell -> activateSpellTrap
// Wait, the signature of activateSpellTrap is `activateSpellTrap(state: GameState, cardIndex: number, isPlayer1: boolean)`
content = content.replace(
  /this\.gameService\.activateSpell\(this\.gameState, this\.myPlayerKey === 'player1', index\)/,
  `this.gameService.activateSpellTrap(this.gameState, index, this.myPlayerKey === 'player1')`
);

// Fix useAbility return type void check
// `const success = this.gameService.useAbility(...)` -> `this.gameService.useAbility(...); const success = true;`
content = content.replace(
  /const success = this\.gameService\.useAbility\(this\.gameState, index, this\.myPlayerKey === 'player1'\);\n      if \(success\) \{/,
  `this.gameService.useAbility(this.gameState, index, this.myPlayerKey === 'player1');\n      const success = true;\n      if (success) {`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

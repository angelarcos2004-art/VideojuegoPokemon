const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.html';
let content = fs.readFileSync(path, 'utf8');

// Replace Turno del CPU with Turno del Oponente
content = content.replace(
  /\{\{ isMyTurn\(\) \? 'Tu Turno' : 'CPU Turno' \}\}/g,
  `{{ isMyTurn() ? 'Tu Turno' : 'Turno del Oponente' }}`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

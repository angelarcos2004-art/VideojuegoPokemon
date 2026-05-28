const fs = require('fs');
const file = './src/app/pages/game/vs-player/vs-player.component.ts';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  "import { PokemonService } from '../../../core/services/pokemon.service';", 
  "import { PokemonService } from '../../../core/services/pokemon.service';\nimport { AudioService } from '../../../core/services/audio.service';"
);

fs.writeFileSync(file, code);

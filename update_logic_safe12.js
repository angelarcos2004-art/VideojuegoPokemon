const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /const p2Profile = await this\.supabaseService\.getProfile\(player2Id\);/,
  `let p2Profile = null;
      try {
        p2Profile = await this.supabaseService.getProfile(player2Id);
      } catch (err) {
        console.warn("Could not fetch opponent profile:", err);
      }`
);

content = content.replace(
  /p2Profile\.username \|\| 'Opponent'/g,
  `p2Profile?.username || 'Opponent'`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

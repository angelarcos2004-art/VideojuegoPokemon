const fs = require('fs');

const path = 'src/app/core/services/supabase.service.ts';
let content = fs.readFileSync(path, 'utf8');

// Change event: 'UPDATE' to event: '*'
content = content.replace(
  /\{ event: 'UPDATE', schema: 'public', table: 'game_state', filter: \`room_id=eq.\$\{roomId\}\` \}/,
  `{ event: '*', schema: 'public', table: 'game_state', filter: \`room_id=eq.\$\{roomId\}\` }`
);

fs.writeFileSync(path, content, 'utf8');

const path2 = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content2 = fs.readFileSync(path2, 'utf8');

// Change pollInterval to continuous polling instead of clearing interval
content2 = content2.replace(
  /const pollInterval = setInterval\(\(\) => \{[\s\S]*?\}\)\.catch\(\(\) => \{\}\);\n    \}, 3000\);/,
  `const pollInterval = setInterval(() => {
      if (this.selectedRoom !== roomId) {
        clearInterval(pollInterval);
        return;
      }
      this.supabaseService.getGameState(roomId).then(state => {
        if (state) {
          this.ngZone.run(() => {
            // Check if turns or phases changed to avoid unnecessary CDR, but just set it
            if (JSON.stringify(this.gameState) !== JSON.stringify(state)) {
               this.gameState = state;
               this.gameService['gameState$'].next(state);
               this.cdr.detectChanges();
            }
          });
        }
      }).catch(() => {});
    }, 2000);`
);

fs.writeFileSync(path2, content2, 'utf8');

console.log('Update successful!');

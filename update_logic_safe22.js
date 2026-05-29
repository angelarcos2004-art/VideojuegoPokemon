const fs = require('fs');

const path2 = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content2 = fs.readFileSync(path2, 'utf8');

// The faulty string literal issue was from `this.gameService['gameState$']` where `$` interacted with replace.
// Let's use a function replacer so we don't have to worry about regex substitution strings!

content2 = content2.replace(
  /const pollInterval = setInterval\(\(\) => \{[\s\S]*?\}\)\.catch\(\(\) => \{\}\);\n    \}, 3000\);/,
  function() {
    return `const pollInterval = setInterval(() => {
      if (this.selectedRoom !== roomId) {
        clearInterval(pollInterval);
        return;
      }
      this.supabaseService.getGameState(roomId).then(state => {
        if (state) {
          this.ngZone.run(() => {
            if (JSON.stringify(this.gameState) !== JSON.stringify(state)) {
               this.gameState = state;
               this.gameService.gameState$.next(state);
               this.cdr.detectChanges();
            }
          });
        }
      }).catch(() => {});
    }, 2000);`;
  }
);

fs.writeFileSync(path2, content2, 'utf8');

console.log('Update successful!');

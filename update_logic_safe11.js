const fs = require('fs');

const pathHtml = 'src/app/pages/game/vs-player/vs-player.component.html';
let html = fs.readFileSync(pathHtml, 'utf8');

// Move error-message out of room-selection
html = html.replace(
  /<div \*ngIf="errorMessage" class="error-message">[\s\S]*?<\/div>\s*<\/div>/,
  `</div>\n        <div *ngIf="errorMessage" class="error-message" style="background: var(--pk-red); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; border: 3px solid var(--pk-dark); font-weight: bold; text-align: center;">\n          {{ errorMessage }}\n          <br><button (click)="cancelRoom()" class="btn-action" style="margin-top: 10px;">Volver</button>\n        </div>`
);

// Add basic styles to lobby
const styleTag = `
<style>
  .vs-player-container { padding: 40px; text-align: center; font-family: var(--font-text); background: rgba(255,255,255,0.8); border-radius: 15px; margin: 20px auto; max-width: 800px; border: 4px solid var(--pk-dark); }
  .options-grid { display: flex; gap: 20px; justify-content: center; margin: 30px 0; }
  .option-card { background: var(--pk-light); padding: 20px; border-radius: 10px; border: 3px solid var(--pk-dark); flex: 1; }
  .room-grid { display: flex; flex-direction: column; gap: 10px; }
  .room-card { background: var(--pk-white); padding: 15px; border-radius: 8px; border: 2px solid var(--pk-dark); display: flex; justify-content: space-between; align-items: center; }
  .btn-primary, .btn-join, .btn-cancel { background: var(--pk-yellow); color: #111; padding: 10px 20px; border: 3px solid var(--pk-dark); border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
  .btn-primary:hover, .btn-join:hover { transform: translateY(-3px); box-shadow: 0 4px 0 var(--pk-dark); }
  .btn-cancel { background: var(--pk-red); color: white; margin-top: 20px; }
  .spinner { width: 50px; height: 50px; border: 5px solid var(--pk-light); border-top-color: var(--pk-yellow); border-radius: 50%; animation: spin 1s infinite linear; margin: 20px auto; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
`;
html = styleTag + '\n' + html;

fs.writeFileSync(pathHtml, html, 'utf8');
console.log('Update successful!');

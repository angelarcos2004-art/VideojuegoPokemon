const fs = require('fs');
const file = './src/app/pages/game/vs-player/vs-player.component.ts';
let code = fs.readFileSync(file, 'utf8');

const tStartMatch = code.match(/template: `([\s\S]*?)`,\s*styles:/);
if (tStartMatch) {
  const template = tStartMatch[1];
  const openDivs = (template.match(/<div/g) || []).length;
  const closeDivs = (template.match(/<\/div>/g) || []).length;
  console.log('Open:', openDivs, 'Close:', closeDivs);

  if (closeDivs > openDivs) {
    let diff = closeDivs - openDivs;
    let newCode = code;
    for (let i = 0; i < diff; i++) {
      const lastDiv = newCode.lastIndexOf('</div>', newCode.indexOf('`,\n  styles:'));
      if (lastDiv > -1) {
          newCode = newCode.substring(0, lastDiv) + newCode.substring(lastDiv + 6);
      }
    }
    fs.writeFileSync(file, newCode);
    console.log('Fixed', diff, 'divs');
  }
}

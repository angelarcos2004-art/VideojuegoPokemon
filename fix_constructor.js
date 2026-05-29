const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

const target = "    private router: Router\r\n  ) {}";
const target2 = "    private router: Router\n  ) {}";

const replacement = "    private router: Router,\n    private cdr: ChangeDetectorRef,\n    private ngZone: NgZone\n  ) {}";

if (content.includes(target)) {
  content = content.replace(target, replacement);
} else if (content.includes(target2)) {
  content = content.replace(target2, replacement);
} else {
  // Try regex
  content = content.replace(/private router:\s*Router\s*\)\s*\{}/, replacement);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed constructor!');

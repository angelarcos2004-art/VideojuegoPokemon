const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Add NgZone and ChangeDetectorRef
content = content.replace(
  "import { Component, OnInit, OnDestroy } from '@angular/core';",
  "import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';"
);

// 2. Add injections
content = content.replace(
  "    private router: Router\n  ) {}",
  "    private router: Router,\n    private cdr: ChangeDetectorRef,\n    private ngZone: NgZone\n  ) {}"
);

// 3. Fix listenToRoom
content = content.replace(
  /private listenToRoom\(roomId: string\) {\s*this\.roomSubscription = this\.supabaseService\.subscribeToRoomStatus\(roomId, async \(room\) => {\s*if \(room\.status === 'active' && room\.player2_id\) {\s*\/\/ Opponent joined! Initialize the game\s*await this\.initializeOnlineGame\(roomId, room\.player2_id\);\s*}\s*}\);\s*}/g,
  `private listenToRoom(roomId: string) {
    this.roomSubscription = this.supabaseService.subscribeToRoomStatus(roomId, (room) => {
      this.ngZone.run(async () => {
        if (room.status === 'active' && room.player2_id) {
          await this.initializeOnlineGame(roomId, room.player2_id);
          this.cdr.detectChanges();
        }
      });
    });
  }`
);

// 4. Fix listenToGameState
content = content.replace(
  /private listenToGameState\(roomId: string\) {\s*this\.gameSubscription = this\.supabaseService\.subscribeToGameState\(roomId, \(state\) => {\s*this\.gameState = state;\s*this\.gameService\['gameState\$'\]\.next\(state\); \/\/ hacky way to sync local game service state\s*}\);\s*\/\/ Try fetch existing in case we missed event\s*this\.supabaseService\.getGameState\(roomId\)\.then\(state => {\s*if \(state\) this\.gameState = state;\s*}\)\.catch\(\(\) => {}\);\s*}/g,
  `private listenToGameState(roomId: string) {
    this.gameSubscription = this.supabaseService.subscribeToGameState(roomId, (state) => {
      this.ngZone.run(() => {
        this.gameState = state;
        this.gameService['gameState$'].next(state);
        this.cdr.detectChanges();
      });
    });
    this.supabaseService.getGameState(roomId).then(state => {
      if (state) {
        this.ngZone.run(() => {
          this.gameState = state;
          this.cdr.detectChanges();
        });
      }
    }).catch(() => {});
  }`
);

// 5. Fix UI updates
content = content.replace(/this\.listenToRoom\(room\.id\);\s*} catch/g, "this.listenToRoom(room.id);\n      this.cdr.detectChanges();\n    } catch");
content = content.replace(/this\.errorMessage = '';\s*}\s*} catch/g, "this.errorMessage = '';\n      }\n      this.cdr.detectChanges();\n    } catch");
content = content.replace(/this\.listenToGameState\(roomId\);\s*} catch/g, "this.listenToGameState(roomId);\n      this.cdr.detectChanges();\n    } catch");

// 6. UI Ghost Rooms fix (cancelRoom / ngOnDestroy)
content = content.replace(
  /async cancelRoom\(\): Promise<void> {\s*this\.selectedRoom = null;/g,
  `async cancelRoom(): Promise<void> {
    if (this.selectedRoom && !this.gameState && this.myPlayerKey === 'player1') {
      try {
        await this.supabaseService.deleteGameRoom(this.selectedRoom);
      } catch (e) {}
    }
    this.selectedRoom = null;`
);

content = content.replace(
  /ngOnDestroy\(\) {\s*\/\/ Si el jugador abandona/g,
  `ngOnDestroy() {
    if (this.selectedRoom && !this.gameState && this.myPlayerKey === 'player1') {
      this.supabaseService.deleteGameRoom(this.selectedRoom).catch(()=>{});
    }
    // Si el jugador abandona`
);

// 7. Format IDs
content = content.replace(
  "<p><strong>ID de Sala:</strong> {{ room.id }}</p>\n              <p><strong>Estado:</strong> {{ room.status }}</p>",
  "Sala #{{ room.id | slice:0:4 | uppercase }}"
);

content = content.replace(
  "<h2>Sala de Juego {{ selectedRoom }}</h2>",
  "<h2>Sala de Juego #{{ selectedRoom ? selectedRoom.substring(0, 4).toUpperCase() : '' }}</h2>"
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');

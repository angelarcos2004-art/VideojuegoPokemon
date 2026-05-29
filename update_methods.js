const fs = require('fs');

const path = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content = fs.readFileSync(path, 'utf8');

// Update createRoom
const createRoomRegex = /this\.opponentPlayerKey = 'player2';\s*this\.listenToRoom\(room\.id\);\s*} catch/g;
const createRoomReplacement = `this.opponentPlayerKey = 'player2';\n      this.listenToRoom(room.id);\n      this.cdr.detectChanges();\n    } catch`;

// Update loadAvailableRooms
const loadAvailableRoomsRegex = /this\.errorMessage = '';\s*}\s*} catch/g;
const loadAvailableRoomsReplacement = `this.errorMessage = '';\n      }\n      this.cdr.detectChanges();\n    } catch`;

// Update joinRoom
const joinRoomRegex = /this\.listenToGameState\(roomId\);\s*this\.audioService\.playBattleMusic\(\);\s*} catch/g;
const joinRoomReplacement = `this.listenToGameState(roomId);\n      this.audioService.playBattleMusic();\n      this.cdr.detectChanges();\n    } catch`;

content = content.replace(createRoomRegex, createRoomReplacement);
content = content.replace(loadAvailableRoomsRegex, loadAvailableRoomsReplacement);
content = content.replace(joinRoomRegex, joinRoomReplacement);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated methods with cdr.detectChanges()!');

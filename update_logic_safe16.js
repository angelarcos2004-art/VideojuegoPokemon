const fs = require('fs');

const path = 'src/app/core/services/supabase.service.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /async joinGameRoom\(roomId: string, player2Id: string\): Promise<void> {[\s\S]*?if \(error\) throw error;\n  }/,
  `async joinGameRoom(roomId: string, player2Id: string): Promise<void> {
    const { data, error } = await this.supabase
      .from('game_rooms')
      .update({ player2_id: player2Id, status: 'active' })
      .eq('id', roomId)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      throw new Error('RLS Blocked: 0 rows updated');
    }
  }`
);

fs.writeFileSync(path, content, 'utf8');

const path2 = 'src/app/pages/game/vs-player/vs-player.component.ts';
let content2 = fs.readFileSync(path2, 'utf8');

content2 = content2.replace(
  /this\.errorMessage = 'Falló al unirse a la sala: ' \+ \(error as Error\)\.message;/,
  `this.errorMessage = 'Falló al unirse a la sala. Es posible que el ID del oponente sea igual al tuyo (mismo usuario), o que la sala ya no esté esperando jugadores. Detalle: ' + (error as Error).message;`
);

fs.writeFileSync(path2, content2, 'utf8');

console.log('Update successful!');

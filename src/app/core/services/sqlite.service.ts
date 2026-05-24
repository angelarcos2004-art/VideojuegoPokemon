import { Injectable } from '@angular/core';
import initSqlJs, { Database } from 'sql.js';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private db: Database | null = null;
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
      });
      this.db = new SQL.Database();
      this.createTables();
      this.initialized = true;
    } catch (e) {
      console.error('Failed to init SqlJs:', e);
      throw e;
    }
  }

  private createTables(): void {
    if (!this.db) return;

    this.db.run(`
      CREATE TABLE IF NOT EXISTS pokemon_cache (
        id INTEGER PRIMARY KEY,
        name TEXT UNIQUE,
        data_json TEXT,
        fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS local_config (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS cpu_games (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        result TEXT,
        state_json TEXT,
        played_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS local_history (
        id TEXT PRIMARY KEY,
        mode TEXT,
        result TEXT,
        opponent TEXT,
        played_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  run(sql: string, params: any[] = []): void {
    if (!this.db) throw new Error('Database not initialized');
    this.db.run(sql, params);
  }

  exec(sql: string): any[] {
    if (!this.db) throw new Error('Database not initialized');
    return this.db.exec(sql);
  }

  query(sql: string, params: any[] = []): any[] {
    if (!this.db) throw new Error('Database not initialized');
    const stmt = this.db.prepare(sql);
    stmt.bind(params);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  }

  insertPokemonCache(name: string, data: any): void {
    const dataJson = JSON.stringify(data);
    this.run(
      `INSERT OR REPLACE INTO pokemon_cache (name, data_json) VALUES (?, ?)`,
      [name, dataJson]
    );
  }

  getPokemonCache(name: string): any | null {
    const result = this.query(
      `SELECT data_json FROM pokemon_cache WHERE name = ?`,
      [name]
    );
    if (result.length > 0) {
      return JSON.parse(result[0].data_json);
    }
    return null;
  }

  insertLocalGame(id: string, userId: string, result: string, state: any): void {
    const stateJson = JSON.stringify(state);
    this.run(
      `INSERT INTO cpu_games (id, user_id, result, state_json) VALUES (?, ?, ?, ?)`,
      [id, userId, result, stateJson]
    );
  }

  getLocalGames(userId: string): any[] {
    const results = this.query(
      `SELECT * FROM cpu_games WHERE user_id = ? ORDER BY played_at DESC`,
      [userId]
    );
    return results.map(r => ({
      ...r,
      mode: 'cpu',
      winner: r.result,
      created_at: r.played_at
    }));
  }
}

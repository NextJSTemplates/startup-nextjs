/**
 * Adaptateur SQLite pour la base de données
 * Implémentation simple et efficace pour commencer
 */

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { DatabaseAdapter, User, AuthError } from './database';

export class SQLiteAdapter implements DatabaseAdapter {
  private db: Database<sqlite3.Database, sqlite3.Statement> | null = null;
  
  constructor(private dbPath: string = './database.sqlite') {}

  private async getDb() {
    if (!this.db) {
      this.db = await open({
        filename: this.dbPath,
        driver: sqlite3.Database
      });
      
      // Créer les tables si elles n'existent pas
      await this.initializeTables();
    }
    return this.db;
  }

  private async initializeTables() {
    if (!this.db) return;

    // Table des utilisateurs
    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        linkedin_url TEXT,
        user_type TEXT NOT NULL CHECK(user_type IN ('admin', 'enterprise', 'client', 'coach_therapist')),
        hashed_password TEXT NOT NULL,
        is_verified INTEGER DEFAULT 0,
        reset_token TEXT,
        reset_token_expiry TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now'))
      )
    `);

    // Index pour optimiser les requêtes
    await this.db.exec(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_reset_token ON users(reset_token);
    `);
  }

  async createUser(userData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    linkedin_url?: string;
    user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
    hashedPassword: string;
  }): Promise<User> {
    const db = await this.getDb();
    
    const result = await db.run(`
      INSERT INTO users (first_name, last_name, email, phone, linkedin_url, user_type, hashed_password)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [userData.first_name, userData.last_name, userData.email, userData.phone, userData.linkedin_url || null, userData.user_type, userData.hashedPassword]);

    if (!result.lastID) {
      throw new AuthError('Erreur lors de la création de l\'utilisateur', 'USER_NOT_FOUND');
    }

    const user = await db.get(`
      SELECT * FROM users WHERE id = ?
    `, [result.lastID]);

    return this.mapDbUserToUser(user);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const db = await this.getDb();
    
    const user = await db.get(`
      SELECT * FROM users WHERE email = ?
    `, [email]);

    return user ? this.mapDbUserToUser(user) : null;
  }

  async getUserById(id: number): Promise<User | null> {
    const db = await this.getDb();
    
    const user = await db.get(`
      SELECT * FROM users WHERE id = ?
    `, [id]);

    return user ? this.mapDbUserToUser(user) : null;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    const db = await this.getDb();
    
    const updates: string[] = [];
    const values: any[] = [];
    
    if (data.first_name !== undefined) {
      updates.push('first_name = ?');
      values.push(data.first_name);
    }
    
    if (data.last_name !== undefined) {
      updates.push('last_name = ?');
      values.push(data.last_name);
    }
    
    if (data.phone !== undefined) {
      updates.push('phone = ?');
      values.push(data.phone);
    }
    
    if (data.linkedin_url !== undefined) {
      updates.push('linkedin_url = ?');
      values.push(data.linkedin_url);
    }
    
    if (data.user_type !== undefined) {
      updates.push('user_type = ?');
      values.push(data.user_type);
    }
    
    if (data.hashedPassword !== undefined) {
      updates.push('hashed_password = ?');
      values.push(data.hashedPassword);
    }
    
    if (data.isVerified !== undefined) {
      updates.push('is_verified = ?');
      values.push(data.isVerified ? 1 : 0);
    }
    
    if (data.resetToken !== undefined) {
      updates.push('reset_token = ?');
      values.push(data.resetToken);
    }
    
    if (data.resetTokenExpiry !== undefined) {
      updates.push('reset_token_expiry = ?');
      values.push(data.resetTokenExpiry?.toISOString());
    }
    
    updates.push('updated_at = datetime("now")');
    values.push(id);
    
    await db.run(`
      UPDATE users SET ${updates.join(', ')} WHERE id = ?
    `, values);

    const updatedUser = await this.getUserById(id);
    if (!updatedUser) {
      throw new AuthError('Utilisateur introuvable après mise à jour', 'USER_NOT_FOUND');
    }
    
    return updatedUser;
  }

  async deleteUser(id: number): Promise<void> {
    const db = await this.getDb();
    
    await db.run(`DELETE FROM users WHERE id = ?`, [id]);
  }

  async verifyUser(id: number): Promise<void> {
    await this.updateUser(id, { isVerified: true });
  }

  async setResetToken(email: string, token: string, expiry: Date): Promise<void> {
    const db = await this.getDb();
    
    await db.run(`
      UPDATE users SET 
        reset_token = ?,
        reset_token_expiry = ?,
        updated_at = datetime('now')
      WHERE email = ?
    `, [token, expiry.toISOString(), email]);
  }

  async getUserByResetToken(token: string): Promise<User | null> {
    const db = await this.getDb();
    
    const user = await db.get(`
      SELECT * FROM users WHERE reset_token = ?
    `, [token]);

    return user ? this.mapDbUserToUser(user) : null;
  }

  async clearResetToken(id: number): Promise<void> {
    const db = await this.getDb();
    
    await db.run(`
      UPDATE users SET 
        reset_token = NULL,
        reset_token_expiry = NULL,
        updated_at = datetime('now')
      WHERE id = ?
    `, [id]);
  }

  private mapDbUserToUser(dbUser: any): User {
    return {
      id: dbUser.id,
      email: dbUser.email,
      first_name: dbUser.first_name,
      last_name: dbUser.last_name,
      phone: dbUser.phone,
      linkedin_url: dbUser.linkedin_url || undefined,
      user_type: dbUser.user_type,
      hashedPassword: dbUser.hashed_password,
      isVerified: Boolean(dbUser.is_verified),
      resetToken: dbUser.reset_token || undefined,
      resetTokenExpiry: dbUser.reset_token_expiry ? new Date(dbUser.reset_token_expiry) : undefined,
      createdAt: new Date(dbUser.created_at),
      updatedAt: new Date(dbUser.updated_at)
    };
  }

  async getAllUsers(): Promise<User[]> {
    const db = await this.getDb();
    const dbUsers = await db.all('SELECT * FROM users ORDER BY created_at DESC');
    
    return dbUsers.map(dbUser => ({
      id: dbUser.id,
      email: dbUser.email,
      hashedPassword: dbUser.hashed_password,
      first_name: dbUser.first_name,
      last_name: dbUser.last_name,
      phone: dbUser.phone,
      linkedin_url: dbUser.linkedin_url || undefined,
      user_type: dbUser.user_type,
      isVerified: Boolean(dbUser.is_verified),
      createdAt: new Date(dbUser.created_at),
      updatedAt: new Date(dbUser.updated_at)
    }));
  }



  async close(): Promise<void> {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }
}

// Instance singleton pour utilisation globale
let dbInstance: SQLiteAdapter | null = null;

export function getDatabase(): SQLiteAdapter {
  if (!dbInstance) {
    dbInstance = new SQLiteAdapter(process.env.DATABASE_PATH || './database.sqlite');
  }
  return dbInstance;
}
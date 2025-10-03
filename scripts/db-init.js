/**
 * Script pour initialiser et visualiser la base de données
 * Utilisation: node scripts/db-init.js
 */

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

async function initDatabase() {
  console.log('🔧 Initialisation de la base de données...');
  
  const dbPath = path.join(__dirname, '..', 'database.sqlite');
  console.log(`📍 Chemin de la base: ${dbPath}`);
  
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    
    await db.exec(`
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
    
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_reset_token ON users(reset_token);
    `);
    
    console.log('✅ Tables créées avec succès !');
    
    const tables = await db.all(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name NOT LIKE 'sqlite_%'
    `);
    
    console.log('\n📊 Tables dans la base de données:');
    tables.forEach(table => {
      console.log(`  - ${table.name}`);
    });
    
    const schema = await db.all(`PRAGMA table_info(users)`);
    console.log('\n🔍 Structure de la table users:');
    schema.forEach(col => {
      console.log(`  - ${col.name}: ${col.type} ${col.notnull ? 'NOT NULL' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
    });
    
    // Compter les utilisateurs existants
    const userCount = await db.get('SELECT COUNT(*) as count FROM users');
    console.log(`\n👥 Nombre d'utilisateurs: ${userCount.count}`);
    
    if (userCount.count > 0) {
      const users = await db.all('SELECT id, email, first_name, last_name, phone, user_type, created_at FROM users');
      console.log('\n📝 Utilisateurs existants:');
      users.forEach(user => {
        console.log(`  - ID: ${user.id} | ${user.first_name} ${user.last_name} (${user.email}) | ${user.phone} | Type: ${user.user_type} | Créé: ${user.created_at}`);
      });
    }
    
    await db.close();
    console.log('\n✨ Initialisation terminée !');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
  }
}

// Exécuter le script
if (require.main === module) {
  initDatabase();
}

module.exports = { initDatabase };
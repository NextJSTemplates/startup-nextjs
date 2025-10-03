/**
 * Script pour mettre à jour le schéma de la base de données
 * Ajouter les nouveaux types d'utilisateurs client et coach_therapist
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');

console.log('🔄 Mise à jour du schéma de la base de données...');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base:', err.message);
    process.exit(1);
  }
});

// SQLite ne permet pas de modifier les contraintes CHECK directement
// On doit recréer la table avec la nouvelle contrainte

db.serialize(() => {
  // 1. Créer une nouvelle table temporaire avec la nouvelle contrainte
  db.run(`
    CREATE TABLE users_new (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      user_type TEXT NOT NULL,
      hashed_password TEXT NOT NULL,
      is_verified INTEGER DEFAULT 0,
      reset_token TEXT,
      reset_token_expiry TEXT,
      created_at TEXT DEFAULT datetime('now'),
      updated_at TEXT DEFAULT datetime('now'),
      linkedin_url TEXT
    )
  `, (err) => {
    if (err) {
      console.error('❌ Erreur lors de la création de la nouvelle table:', err.message);
      db.close();
      process.exit(1);
    }
    console.log('✅ Nouvelle table créée avec succès');
  });

  // 2. Copier toutes les données de l'ancienne table
  db.run(`
    INSERT INTO users_new 
    SELECT * FROM users
  `, (err) => {
    if (err) {
      console.error('❌ Erreur lors de la copie des données:', err.message);
      db.close();
      process.exit(1);
    }
    console.log('✅ Données copiées avec succès');
  });

  // 3. Supprimer l'ancienne table
  db.run(`DROP TABLE users`, (err) => {
    if (err) {
      console.error('❌ Erreur lors de la suppression de l\'ancienne table:', err.message);
      db.close();
      process.exit(1);
    }
    console.log('✅ Ancienne table supprimée');
  });

  // 4. Renommer la nouvelle table
  db.run(`ALTER TABLE users_new RENAME TO users`, (err) => {
    if (err) {
      console.error('❌ Erreur lors du renommage:', err.message);
      db.close();
      process.exit(1);
    }
    console.log('✅ Table renommée avec succès');

    // 5. Vérifier que tout fonctionne
    db.all(`SELECT COUNT(*) as count FROM users`, (err, rows) => {
      if (err) {
        console.error('❌ Erreur lors de la vérification:', err.message);
        db.close();
        process.exit(1);
      }

      console.log(`✅ ${rows[0].count} utilisateur(s) trouvé(s) dans la nouvelle table`);
      console.log('🎉 Mise à jour du schéma terminée avec succès !');
      db.close();
    });
  });
});
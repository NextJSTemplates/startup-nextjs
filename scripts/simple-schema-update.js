/**
 * Script simple pour mettre à jour le schéma
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');

console.log('🔄 Mise à jour simple du schéma...');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base:', err.message);
    process.exit(1);
  }
});

db.serialize(() => {
  console.log('📋 Étapes de migration:');
  
  console.log('1. Création de la table temporaire...');
  db.run("CREATE TABLE users_temp AS SELECT * FROM users", (err) => {
    if (err) {
      console.error('❌ Erreur étape 1:', err.message);
      db.close();
      process.exit(1);
    }
    console.log('✅ Table temporaire créée');
    
    console.log('2. Suppression de l\'ancienne table...');
    db.run("DROP TABLE users", (err) => {
      if (err) {
        console.error('❌ Erreur étape 2:', err.message);
        db.close();
        process.exit(1);
      }
      console.log('✅ Ancienne table supprimée');
      
      console.log('3. Recréation de la table users...');
      db.run(`
        CREATE TABLE users (
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
          console.error('❌ Erreur étape 3:', err.message);
          db.close();
          process.exit(1);
        }
        console.log('✅ Nouvelle table créée');
        
        console.log('4. Restauration des données...');
        db.run("INSERT INTO users SELECT * FROM users_temp", (err) => {
          if (err) {
            console.error('❌ Erreur étape 4:', err.message);
            db.close();
            process.exit(1);
          }
          console.log('✅ Données restaurées');
          
          console.log('5. Nettoyage...');
          db.run("DROP TABLE users_temp", (err) => {
            if (err) {
              console.error('❌ Erreur étape 5:', err.message);
              db.close();
              process.exit(1);
            }
            console.log('✅ Nettoyage terminé');
            
            db.all("SELECT COUNT(*) as count FROM users", (err, rows) => {
              if (err) {
                console.error('❌ Erreur vérification:', err.message);
                db.close();
                process.exit(1);
              }
              
              console.log(`✅ ${rows[0].count} utilisateur(s) trouvé(s)`);
              console.log('🎉 Mise à jour du schéma terminée !');
              db.close();
            });
          });
        });
      });
    });
  });
});
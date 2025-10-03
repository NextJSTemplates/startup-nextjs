/**
 * Script pour mettre à jour les types d'utilisateurs dans la base de données
 * Nouveau mapping:
 * - admin → admin (inchangé)
 * - enterprise → enterprise (inchangé)
 * - business_analyst → client (nouveau nom)
 * - Nouveau type: coach_therapist
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');

console.log('🔄 Mise à jour des types d\'utilisateurs...');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base:', err.message);
    process.exit(1);
  }
});

db.run(`
  UPDATE users 
  SET user_type = 'client' 
  WHERE user_type = 'business_analyst'
`, function(err) {
  if (err) {
    console.error('❌ Erreur lors de la mise à jour:', err.message);
    db.close();
    process.exit(1);
  }

  console.log(`✅ ${this.changes} utilisateur(s) mis à jour de 'business_analyst' vers 'client'`);

  db.all(`
    SELECT user_type, COUNT(*) as count 
    FROM users 
    GROUP BY user_type
  `, (err, rows) => {
    if (err) {
      console.error('Erreur lors de la vérification:', err.message);
      db.close();
      process.exit(1);
    }

    console.log('\n Types d\'utilisateurs actuels:');
    rows.forEach(({ user_type, count }) => {
      console.log(`  - ${user_type}: ${count} utilisateur(s)`);
    });

    console.log('\n Mise à jour terminée avec succès !');
    db.close();
  });
});
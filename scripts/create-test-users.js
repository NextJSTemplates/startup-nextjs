const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');

async function createTestUsers() {
  const db = new sqlite3.Database(dbPath);
  
  const users = [
    {
      email: 'admin@test.com',
      first_name: 'Admin',
      last_name: 'Test',
      phone: '+33123456789',
      user_type: 'admin',
      password: 'admin123'
    },
    {
      email: 'client@test.com',
      first_name: 'Client',
      last_name: 'Test',
      phone: '+33123456788',
      user_type: 'client',
      password: 'client123'
    },
    {
      email: 'coach@test.com',
      first_name: 'Coach',
      last_name: 'Test',
      phone: '+33123456787',
      user_type: 'coach_therapist',
      password: 'coach123'
    },
    {
      email: 'entreprise@test.com',
      first_name: 'Entreprise',
      last_name: 'Test',
      phone: '+33123456786',
      user_type: 'enterprise',
      password: 'entreprise123'
    }
  ];

  console.log('🚀 Création des utilisateurs de test...\n');

  for (const user of users) {
    try {
      // Hash du mot de passe
      const hashedPassword = await bcrypt.hash(user.password, 10);
      
      // Insertion en base
      await new Promise((resolve, reject) => {
        db.run(`
          INSERT INTO users (email, first_name, last_name, phone, user_type, hashed_password, is_verified)
          VALUES (?, ?, ?, ?, ?, ?, 1)
        `, [user.email, user.first_name, user.last_name, user.phone, user.user_type, hashedPassword], 
        function(err) {
          if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
              console.log(`⚠️  Utilisateur ${user.email} existe déjà, ignoré`);
              resolve();
            } else {
              reject(err);
            }
          } else {
            console.log(`✅ ${user.user_type.toUpperCase()}: ${user.email} (mdp: ${user.password})`);
            resolve();
          }
        });
      });
    } catch (error) {
      console.error(`❌ Erreur pour ${user.email}:`, error.message);
    }
  }

  console.log('\n📊 Récapitulatif des comptes de test:');
  console.log('┌─────────────────────────┬─────────────────┬─────────────┐');
  console.log('│ Email                   │ Type            │ Mot de passe│');
  console.log('├─────────────────────────┼─────────────────┼─────────────┤');
  console.log('│ admin@test.com          │ admin           │ admin123    │');
  console.log('│ client@test.com         │ client          │ client123   │');
  console.log('│ coach@test.com          │ coach_therapist │ coach123    │');
  console.log('│ entreprise@test.com     │ enterprise      │ entreprise123│');
  console.log('└─────────────────────────┴─────────────────┴─────────────┘');
  
  db.close((err) => {
    if (err) {
      console.error('❌ Erreur fermeture DB:', err.message);
    } else {
      console.log('\n🎉 Utilisateurs de test créés avec succès !');
    }
  });
}

createTestUsers().catch(console.error);
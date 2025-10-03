/**
 * Script pour initialiser un compte administrateur par défaut
 * Usage: node scripts/init-admin.js
 */

const sqlite3 = require('sqlite3');
const bcrypt = require('bcryptjs');
const { open } = require('sqlite');

async function initializeAdmin() {
  try {
    console.log('🚀 Initialisation du compte administrateur...');
    
    const db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    });
    
    const existingAdmin = await db.get(
      'SELECT COUNT(*) as count FROM users WHERE user_type = ?',
      ['admin']
    );
    
    if (existingAdmin.count > 0) {
      console.log('✅ Un compte administrateur existe déjà dans la base.');
      console.log('📋 Nombre d\'admins actuels:', existingAdmin.count);
      await db.close();
      return;
    }
    
    const adminData = {
      email: 'admin@unleashlab.com',
      password: 'UnleashLab2024!',
      first_name: 'Admin',
      last_name: 'Unleash Lab',
      phone: '+33123456789',
      user_type: 'admin'
    };
    
    const hashedPassword = await bcrypt.hash(adminData.password, 12);
    
    const now = new Date().toISOString();
    const result = await db.run(`
      INSERT INTO users (email, hashed_password, first_name, last_name, phone, user_type, is_verified, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      adminData.email,
      hashedPassword,
      adminData.first_name,
      adminData.last_name,
      adminData.phone,
      adminData.user_type,
      1, 
      now,
      now
    ]);
    
    await db.close();
    
    console.log('✅ Compte administrateur créé avec succès !');
    console.log('📧 Email:', adminData.email);
    console.log('🔑 Mot de passe:', adminData.password);
    console.log('🆔 ID utilisateur:', result.lastID);
    console.log('');
    console.log('⚠️  IMPORTANT:');
    console.log('- Changez ce mot de passe après la première connexion');
    console.log('- Ce compte peut créer d\'autres administrateurs depuis son espace');
    console.log('- Gardez ces informations en sécurité');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de l\'admin:', error);
    process.exit(1);
  }
}

initializeAdmin();
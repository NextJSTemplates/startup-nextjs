/**
 * API Route pour créer un utilisateur (admin seulement)
 * POST /api/admin/create-user
 */

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getDatabase } from '@/lib/sqlite-adapter';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json({
        success: false,
        message: 'Non authentifié'
      }, { status: 401 });
    }

    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const decoded = jwt.verify(token, jwtSecret) as any;
    
    const dbAdapter = getDatabase();
    const currentUser = await dbAdapter.getUserById(decoded.userId);
    
    if (!currentUser || currentUser.user_type !== 'admin') {
      return NextResponse.json({
        success: false,
        message: 'Accès non autorisé - Admin requis'
      }, { status: 403 });
    }

    const { email, password, first_name, last_name, phone, user_type, linkedin_url } = await request.json();

    if (!email || !password || !first_name || !last_name || !phone || !user_type) {
      return NextResponse.json({
        success: false,
        message: 'Tous les champs sont requis'
      }, { status: 400 });
    }

    const existingUser = await dbAdapter.getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'Cette adresse email est déjà utilisée'
      }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userData = {
      email,
      hashedPassword,
      first_name,
      last_name,
      phone,
      user_type: user_type as 'admin' | 'enterprise' | 'client' | 'coach_therapist',
      isVerified: true, 
      linkedin_url: linkedin_url || null
    };

    const newUser = await dbAdapter.createUser(userData);
    
    if (!newUser) {
      throw new Error('Échec de la création de l\'utilisateur');
    }

    return NextResponse.json({
      success: true,
      message: 'Utilisateur créé avec succès',
      userId: newUser.id
    });

  } catch (error: any) {
    console.error('Erreur lors de la création d\'utilisateur:', error);
    
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return NextResponse.json({
        success: false,
        message: 'Token invalide ou expiré'
      }, { status: 401 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Une erreur interne s\'est produite'
    }, { status: 500 });
  }
}
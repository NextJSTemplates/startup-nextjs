/**
 * API Route pour la connexion des utilisateurs
 * POST /api/auth/signin
 */

import { NextRequest, NextResponse } from 'next/server';
import { AuthService, signInSchema } from '@/lib/database';
import { getDatabase } from '@/lib/sqlite-adapter';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = signInSchema.parse(body);
    
    // Initialiser le service d'authentification
    const dbAdapter = getDatabase();
    const authService = new AuthService(dbAdapter);
    
    // Authentifier l'utilisateur
    const user = await authService.signIn(validatedData);
    
    // Créer un token JWT
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        linkedin_url: user.linkedin_url,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        user_type: user.user_type,
        isVerified: user.isVerified
      },
      jwtSecret,
      { expiresIn: '7d' } // Token valide 7 jours
    );
    
    // Créer la réponse avec le cookie HTTP-only
    const response = NextResponse.json({
      success: true,
      message: 'Connexion réussie',
      token, // Ajouter le token dans la réponse pour localStorage
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        linkedin_url: user.linkedin_url,
        user_type: user.user_type,
        isVerified: user.isVerified
      }
    });
    
    // Définir le cookie sécurisé
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const, // Plus permissif pour le développement
      maxAge: 7 * 24 * 60 * 60, // 7 jours en secondes
      path: '/'
    };
    
    console.log('🍪 Définition du cookie avec options:', cookieOptions);
    response.cookies.set('auth-token', token, cookieOptions);
    
    return response;
    
  } catch (error: any) {
    console.error('Erreur lors de la connexion:', error);
    
    // Gestion des erreurs de validation Zod
    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        message: 'Données invalides',
        errors: error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message
        }))
      }, { status: 400 });
    }
    
    // Gestion des erreurs d'authentification
    if (error.name === 'AuthError') {
      return NextResponse.json({
        success: false,
        message: error.message,
        code: error.code
      }, { status: 401 });
    }
    
    // Erreur générique
    return NextResponse.json({
      success: false,
      message: 'Une erreur interne s\'est produite'
    }, { status: 500 });
  }
}
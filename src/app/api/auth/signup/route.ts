/**
 * API Route pour l'inscription des utilisateurs
 * POST /api/auth/signup
 */

import { NextRequest, NextResponse } from 'next/server';
import { AuthService, signUpSchema } from '@/lib/database';
import { getDatabase } from '@/lib/sqlite-adapter';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = signUpSchema.parse(body);
    
    // Initialiser le service d'authentification
    const dbAdapter = getDatabase();
    const authService = new AuthService(dbAdapter);
    
    // Créer l'utilisateur
    const user = await authService.signUp(validatedData);
    
    // TODO: Envoyer un email de vérification si nécessaire
    
    return Response.json({ 
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
    
  } catch (error: any) {
    console.error('Erreur lors de l\'inscription:', error);
    
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
      const statusCode = error.code === 'USER_EXISTS' ? 409 : 400;
      return NextResponse.json({
        success: false,
        message: error.message,
        code: error.code
      }, { status: statusCode });
    }
    
    // Erreur générique
    return NextResponse.json({
      success: false,
      message: 'Une erreur interne s\'est produite'
    }, { status: 500 });
  }
}
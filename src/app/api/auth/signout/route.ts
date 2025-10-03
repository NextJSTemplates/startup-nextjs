/**
 * API Route pour la déconnexion des utilisateurs
 * POST /api/auth/signout
 */

import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Créer la réponse de succès
    const response = NextResponse.json({
      success: true,
      message: 'Déconnexion réussie'
    });
    
    // Supprimer le cookie d'authentification
    response.cookies.set('auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Expirer immédiatement
      path: '/'
    });
    
    return response;
    
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Une erreur interne s\'est produite'
    }, { status: 500 });
  }
}
/**
 * API LINKEDIN OFFICIELLE - AUTHENTIFICATION
 * Route: /api/auth/linkedin
 * 
 * Étape 1: Redirection vers LinkedIn OAuth
 */

import { NextRequest, NextResponse } from 'next/server';
import { buildLinkedInAuthUrl } from '@/config/linkedin';

export async function GET(request: NextRequest) {
  try {
    console.log('🔗 DÉMARRAGE AUTHENTIFICATION LINKEDIN');
    
    const state = Math.random().toString(36).substring(2, 15);
    
    const authUrl = buildLinkedInAuthUrl(state);
    
    console.log('🚀 Redirection vers LinkedIn OAuth:', authUrl);
    
    const response = NextResponse.redirect(authUrl);
    response.cookies.set('linkedin_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600 // 10 minutes
    });
    
    return response;
    
  } catch (error) {
    console.error('❌ Erreur authentification LinkedIn:', error);
    return NextResponse.json({
      success: false,
      error: 'Erreur lors de l\'authentification LinkedIn',
      message: error instanceof Error ? error.message : 'Erreur inconnue'
    }, { status: 500 });
  }
}
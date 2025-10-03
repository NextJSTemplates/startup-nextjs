/**
 * LinkedIn OAuth Callback - OpenID Connect
 * Route: /api/auth/linkedin/callback
 */

import { NextRequest, NextResponse } from 'next/server';
import { LINKEDIN_CONFIG } from '@/config/linkedin';
import type { LinkedInTokenResponse, LinkedInOpenIDProfile } from '@/config/linkedin';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    
    if (error) {
      console.error('❌ Erreur OAuth LinkedIn:', error);
      return NextResponse.redirect(new URL('/linkedin?error=' + encodeURIComponent('Erreur LinkedIn: ' + error), request.url));
    }
    
    if (!code) {
      console.error('❌ Code d\'autorisation manquant');
      return NextResponse.redirect(new URL('/linkedin?error=' + encodeURIComponent('Code d\'autorisation manquant'), request.url));
    }
    
    const storedState = request.cookies.get('linkedin_state')?.value;
    if (!storedState || storedState !== state) {
      console.error('❌ State CSRF invalide');
      return NextResponse.redirect(new URL('/linkedin?error=' + encodeURIComponent('Erreur de sécurité CSRF'), request.url));
    }
    
    console.log('🔄 Échange du code contre un token...');
    const tokenResponse = await exchangeCodeForToken(code);
    
    if (!tokenResponse.access_token) {
      throw new Error('Token d\'accès non reçu');
    }
    
    console.log('✅ Token reçu, récupération du profil...');
    
    const profile = await getLinkedInProfile(tokenResponse.access_token);
    
    console.log('✅ Données LinkedIn récupérées:', JSON.stringify(profile, null, 2));
    
    try {
      await saveLinkedInProfile(request, profile);
      console.log('✅ Profil sauvegardé en base de données');
    } catch (saveError) {
      console.error('❌ Erreur sauvegarde profil:', saveError);
    }
    
    const response = NextResponse.json({
      success: true,
      message: 'Données LinkedIn récupérées avec succès',
      profile: profile,
      token_info: {
        access_token: tokenResponse.access_token.substring(0, 20) + '...',
        token_type: tokenResponse.token_type,
        expires_in: tokenResponse.expires_in
      },
      saved_to_database: true
    }, { status: 200 });
    
    response.cookies.delete('linkedin_state');
    
    return response;
    
  } catch (error) {
    console.error('❌ Erreur callback LinkedIn:', error);
    return NextResponse.json({
      success: false,
      error: 'callback_error',
      message: error instanceof Error ? error.message : 'Erreur inconnue',
      details: error
    }, { status: 500 });
  }
}

async function exchangeCodeForToken(code: string): Promise<LinkedInTokenResponse> {
  const response = await fetch(LINKEDIN_CONFIG.TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: LINKEDIN_CONFIG.REDIRECT_URI,
      client_id: LINKEDIN_CONFIG.CLIENT_ID,
      client_secret: LINKEDIN_CONFIG.CLIENT_SECRET,
    }),
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur échange token: ${response.status} ${errorText}`);
  }
  
  return response.json();
}

async function getLinkedInProfile(accessToken: string): Promise<LinkedInOpenIDProfile> {
  const response = await fetch(LINKEDIN_CONFIG.PROFILE_URL, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur récupération profil: ${response.status} ${errorText}`);
  }
  
  return response.json();
}

async function saveLinkedInProfile(request: NextRequest, profile: LinkedInOpenIDProfile) {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) {
    throw new Error('Utilisateur non connecté');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
  const userId = decoded.userId;

  const dbPath = path.join(process.cwd(), 'database.sqlite');
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  try {
    await db.run(`
      UPDATE users SET 
        first_name = ?,
        last_name = ?,
        email = COALESCE(?, email),
        updated_at = datetime('now')
      WHERE id = ?
    `, [
      profile.given_name || '',
      profile.family_name || '',
      profile.email || null,
      userId
    ]);

    console.log(`✅ Profil utilisateur ${userId} mis à jour avec LinkedIn`);
    
  } finally {
    await db.close();
  }
}
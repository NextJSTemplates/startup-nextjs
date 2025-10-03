/**
 * API Route pour vérifier le statut d'authentification
 * GET /api/auth/me
 */

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getDatabase } from '@/lib/sqlite-adapter';

export async function GET(request: NextRequest) {
  try {
    // Debug: voir tous les cookies reçus
    const allCookies = request.cookies.getAll();
    console.log('🍪 Cookies reçus:', allCookies);
    
    // Debug: voir les headers
    const authHeader = request.headers.get('authorization');
    console.log('📋 Authorization header:', authHeader ? 'PRÉSENT' : 'ABSENT');
    
    // Récupérer le token depuis les cookies ou les headers
    let token = request.cookies.get('auth-token')?.value;
    let tokenSource = 'cookie';
    
    if (!token) {
      // Fallback: chercher dans les headers Authorization
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
        tokenSource = 'header';
      }
    }
    
    console.log('🔑 Token trouvé:', token ? `OUI (${tokenSource})` : 'NON');
    
    if (!token) {
      return NextResponse.json({
        success: false,
        message: 'Non authentifié',
        user: null
      }, { status: 401 });
    }
    
    // Vérifier et décoder le token
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const decoded = jwt.verify(token, jwtSecret) as any;
    
    // Récupérer les informations utilisateur depuis la base de données
    const dbAdapter = getDatabase();
    const user = await dbAdapter.getUserById(decoded.userId);
    
    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'Utilisateur introuvable',
        user: null
      }, { status: 401 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Utilisateur connecté',
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
    console.error('Erreur lors de la vérification du token:', error);
    
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return NextResponse.json({
        success: false,
        message: 'Token invalide ou expiré',
        user: null
      }, { status: 401 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Une erreur interne s\'est produite'
    }, { status: 500 });
  }
}
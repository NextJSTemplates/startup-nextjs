/**
 * API Route pour récupérer les statistiques des utilisateurs (admin seulement)
 * GET /api/admin/stats
 */

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getDatabase } from '@/lib/sqlite-adapter';

export async function GET(request: NextRequest) {
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

    const allUsers = await dbAdapter.getAllUsers();
    
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const stats = {
      total: allUsers.length,
      admins: allUsers.filter(u => u.user_type === 'admin').length,
      enterprises: allUsers.filter(u => u.user_type === 'enterprise').length,
      clients: allUsers.filter(u => u.user_type === 'client').length,
      coach_therapists: allUsers.filter(u => u.user_type === 'coach_therapist').length,
      verified: allUsers.filter(u => u.isVerified).length,
      unverified: allUsers.filter(u => !u.isVerified).length
    };

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error: any) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    
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
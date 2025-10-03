/**
 * API Route pour récupérer la liste des utilisateurs (admin seulement)
 * GET /api/admin/users
 */

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getDatabase } from '@/lib/sqlite-adapter';

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json({
        success: false,
        message: 'Non authentifié'
      }, { status: 401 });
    }

    // Vérifier et décoder le token
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const decoded = jwt.verify(token, jwtSecret) as any;
    
    // Récupérer l'utilisateur actuel
    const dbAdapter = getDatabase();
    const currentUser = await dbAdapter.getUserById(decoded.userId);
    
    if (!currentUser || currentUser.user_type !== 'admin') {
      return NextResponse.json({
        success: false,
        message: 'Accès non autorisé - Admin requis'
      }, { status: 403 });
    }

    // Récupérer les paramètres de pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '3');
    const search = searchParams.get('search') || '';
    const filterType = searchParams.get('filterType') || 'all';
    const filterStatus = searchParams.get('filterStatus') || 'all';

    // Récupérer tous les utilisateurs pour le filtrage
    const allUsers = await dbAdapter.getAllUsers();

    // Appliquer les filtres
    let filteredUsers = allUsers.filter(user => {
      const matchesSearch = search === '' || 
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      
      const matchesFilter = filterType === 'all' || user.user_type === filterType;
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'verified' && user.isVerified) ||
        (filterStatus === 'unverified' && !user.isVerified);
      
      return matchesSearch && matchesFilter && matchesStatus;
    });

    // Calculer la pagination
    const totalUsers = allUsers.length; // Nombre total d'utilisateurs (sans filtres)
    const filteredUsersCount = filteredUsers.length; // Nombre d'utilisateurs après filtres
    const totalPages = Math.ceil(filteredUsersCount / limit);
    const offset = (page - 1) * limit;
    const paginatedUsers = filteredUsers.slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      users: paginatedUsers.map(user => ({
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        linkedin_url: user.linkedin_url,
        user_type: user.user_type,
        isVerified: user.isVerified,
        createdAt: user.createdAt
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalUsers, // Nombre total global
        filteredUsersCount, // Nombre après filtres
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });

  } catch (error: any) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    
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
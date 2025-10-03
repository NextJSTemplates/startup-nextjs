/**
 * API pour la mise à jour du profil utilisateur
 */

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthService } from '@/lib/database';
import { getDatabase } from '@/lib/sqlite-adapter';

export async function PUT(request: Request) {
  try {
    // Initialiser le service d'authentification
    const dbAdapter = getDatabase();
    const authService = new AuthService(dbAdapter);
    
    // Récupérer le token d'authentification
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) {
      return NextResponse.json(
        { success: false, message: 'Token d\'authentification requis' }, 
        { status: 401 }
      );
    }

    const token = cookieHeader
      .split(';')
      .find(c => c.trim().startsWith('auth-token='))
      ?.split('=')[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token d\'authentification requis' }, 
        { status: 401 }
      );
    }

    // Vérifier le token
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    let decoded: any;
    
    try {
      decoded = jwt.verify(token, jwtSecret);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Token invalide ou expiré' }, 
        { status: 401 }
      );
    }

    // Récupérer les données de mise à jour
    const updateData = await request.json();
    const { first_name, last_name, email, phone, linkedin_url, current_password, new_password } = updateData;

    // Validation des données
    if (!first_name || !last_name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs obligatoires doivent être renseignés' }, 
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Format d\'email invalide' }, 
        { status: 400 }
      );
    }

    // Récupérer l'utilisateur actuel
    const currentUser = await authService.getUserById(decoded.userId);
    if (!currentUser) {
      return NextResponse.json(
        { success: false, message: 'Utilisateur non trouvé' }, 
        { status: 404 }
      );
    }

    // Vérifier si l'email est déjà utilisé par un autre utilisateur
    if (email !== currentUser.email) {
      const existingUser = await authService.getUserByEmail(email);
      if (existingUser && existingUser.id !== currentUser.id) {
        return NextResponse.json(
          { success: false, message: 'Cet email est déjà utilisé' }, 
          { status: 400 }
        );
      }
    }

    // Préparer les données de mise à jour
    const userData: any = {
      first_name,
      last_name,
      email,
      phone,
      linkedin_url
    };

    // Si changement de mot de passe
    if (new_password) {
      if (!current_password) {
        return NextResponse.json(
          { success: false, message: 'Le mot de passe actuel est requis' }, 
          { status: 400 }
        );
      }

      // Vérifier le mot de passe actuel
      const isCurrentPasswordValid = await bcrypt.compare(current_password, currentUser.hashedPassword);
      if (!isCurrentPasswordValid) {
        return NextResponse.json(
          { success: false, message: 'Mot de passe actuel incorrect' }, 
          { status: 400 }
        );
      }

      // Validation du nouveau mot de passe
      if (new_password.length < 6) {
        return NextResponse.json(
          { success: false, message: 'Le nouveau mot de passe doit contenir au moins 6 caractères' }, 
          { status: 400 }
        );
      }

      // Hasher le nouveau mot de passe
      userData.hashed_password = await bcrypt.hash(new_password, 10);
    }

    // Mettre à jour l'utilisateur
    const updatedUser = await authService.updateUser(currentUser.id, userData);

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: 'Erreur lors de la mise à jour du profil' }, 
        { status: 500 }
      );
    }

    // Créer un nouveau token avec les informations mises à jour (si email changé)
    if (email !== currentUser.email || userData.hashed_password) {
      const newToken = jwt.sign(
        { 
          userId: updatedUser.id, 
          email: updatedUser.email,
          first_name: updatedUser.first_name,
          last_name: updatedUser.last_name,
          phone: updatedUser.phone,
          linkedin_url: updatedUser.linkedin_url,
          user_type: updatedUser.user_type,
          isVerified: updatedUser.isVerified
        },
        jwtSecret,
        { expiresIn: '7d' }
      );

      const response = NextResponse.json({
        success: true,
        message: 'Profil mis à jour avec succès',
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          first_name: updatedUser.first_name,
          last_name: updatedUser.last_name,
          phone: updatedUser.phone,
          linkedin_url: updatedUser.linkedin_url,
          user_type: updatedUser.user_type,
          isVerified: updatedUser.isVerified
        }
      });

      // Mettre à jour le cookie
      response.cookies.set('auth-token', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 jours
        path: '/'
      });

      return response;
    }

    // Retourner les données mises à jour
    return NextResponse.json({
      success: true,
      message: 'Profil mis à jour avec succès',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        phone: updatedUser.phone,
        linkedin_url: updatedUser.linkedin_url,
        user_type: updatedUser.user_type,
        isVerified: updatedUser.isVerified
      }
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' }, 
      { status: 500 }
    );
  }
}
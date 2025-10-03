import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getDatabase } from '@/lib/sqlite-adapter';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function PUT(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé - Token manquant' },
        { status: 401 }
      );
    }

    // Vérifier le token JWT
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as any;
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    if (decoded.user_type !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Accès refusé - Droits administrateur requis' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { userId, email, first_name, last_name, phone, linkedin_url, user_type, password, isVerified } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'ID utilisateur requis' },
        { status: 400 }
      );
    }

    // Obtenir l'adaptateur de base de données
    const dbAdapter = getDatabase();

    // Vérifier que l'utilisateur existe
    const existingUser = await dbAdapter.getUserById(userId);
    if (!existingUser) {
      return NextResponse.json(
        { success: false, error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Préparer les données à mettre à jour
    const updateData: any = {};

    if (email && email !== existingUser.email) {
      updateData.email = email;
    }

    if (first_name) {
      updateData.first_name = first_name;
    }

    if (last_name) {
      updateData.last_name = last_name;
    }

    if (phone) {
      updateData.phone = phone;
    }

    if (linkedin_url !== undefined) {
      updateData.linkedin_url = linkedin_url || null;
    }

    if (user_type && ['admin', 'enterprise', 'client', 'coach_therapist'].includes(user_type)) {
      updateData.user_type = user_type;
    }

    // Mise à jour du statut de vérification
    if (typeof isVerified === 'boolean') {
      updateData.isVerified = isVerified;
    }

    // Si un nouveau mot de passe est fourni, le hasher
    if (password && password.trim().length > 0) {
      const hashedPassword = await bcrypt.hash(password, 12);
      updateData.password = hashedPassword;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { success: false, error: 'Aucune donnée à mettre à jour' },
        { status: 400 }
      );
    }

    // Mettre à jour l'utilisateur
    const updatedUser = await dbAdapter.updateUser(userId, updateData);

    return NextResponse.json({
      success: true,
      message: 'Utilisateur mis à jour avec succès',
      user: updatedUser
    });

  } catch (error) {
    console.error('Erreur API update-user:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
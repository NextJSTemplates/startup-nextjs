/**
 * Configuration et utilitaires pour la base de données
 * Gestion complète de l'authentification avec votre propre DB
 */

import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Types pour l'authentification
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  linkedin_url?: string;
  user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  resetToken?: string;
  resetTokenExpiry?: Date;
}

export interface UserSession {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  linkedin_url?: string;
  user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
  isVerified: boolean;
}

export const signUpSchema = z.object({
  first_name: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  last_name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres").regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Format de téléphone invalide"),
  linkedin_url: z.string().optional().refine((val) => {
    if (!val || val.trim() === "") return true;
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: "URL LinkedIn invalide"
  }),
  user_type: z.enum(['admin', 'enterprise', 'client', 'coach_therapist']),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"]
});

export const signInSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(1, "Le mot de passe est requis")
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Adresse email invalide")
});

export const newPasswordSchema = z.object({
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string(),
  token: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"]
});

// Utilitaires pour les mots de passe
export class PasswordUtils {
  static async hash(password: string): Promise<string> {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
  }

  static async verify(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  static generate(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

// Utilitaires pour les tokens
export class TokenUtils {
  static generate(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static isExpired(expiryDate: Date): boolean {
    return new Date() > expiryDate;
  }

  static getExpiryDate(hoursFromNow: number = 24): Date {
    return new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
  }
}

// Interface pour les adaptateurs de base de données
export interface DatabaseAdapter {
  // Gestion des utilisateurs
  createUser(userData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    linkedin_url?: string;
    user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
    hashedPassword: string;
  }): Promise<User>;
  
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: number): Promise<User | null>;
  
  updateUser(id: number, data: Partial<User>): Promise<User>;
  deleteUser(id: number): Promise<void>;
  
  // Vérification email
  verifyUser(id: number): Promise<void>;
  
  // Reset password
  setResetToken(email: string, token: string, expiry: Date): Promise<void>;
  getUserByResetToken(token: string): Promise<User | null>;
  clearResetToken(id: number): Promise<void>;
  
  // Sessions (optionnel, peut utiliser JWT)
  createSession?(userId: number, token: string): Promise<void>;
  getSession?(token: string): Promise<{ userId: number } | null>;
  deleteSession?(token: string): Promise<void>;
}

// Gestionnaire d'erreurs pour l'authentification
export class AuthError extends Error {
  constructor(
    message: string,
    public code: 'INVALID_CREDENTIALS' | 'USER_EXISTS' | 'USER_NOT_FOUND' | 'INVALID_TOKEN' | 'EMAIL_NOT_VERIFIED'
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

// Service d'authentification principal
export class AuthService {
  constructor(private db: DatabaseAdapter) {}

  async signUp(userData: z.infer<typeof signUpSchema>): Promise<UserSession> {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await this.db.getUserByEmail(userData.email);
    if (existingUser) {
      throw new AuthError('Un compte avec cette adresse email existe déjà', 'USER_EXISTS');
    }

    // Hasher le mot de passe
    const hashedPassword = await PasswordUtils.hash(userData.password);

    // Créer l'utilisateur
    const user = await this.db.createUser({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone: userData.phone,
      linkedin_url: userData.linkedin_url,
      user_type: userData.user_type,
      hashedPassword
    });

    return {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      linkedin_url: user.linkedin_url,
      user_type: user.user_type,
      isVerified: user.isVerified
    };
  }

  async signIn(credentials: z.infer<typeof signInSchema>): Promise<UserSession> {
    // Récupérer l'utilisateur
    const user = await this.db.getUserByEmail(credentials.email);
    if (!user) {
      throw new AuthError('Adresse email ou mot de passe incorrect', 'INVALID_CREDENTIALS');
    }

    // Vérifier le mot de passe
    const isValidPassword = await PasswordUtils.verify(credentials.password, user.hashedPassword);
    if (!isValidPassword) {
      throw new AuthError('Adresse email ou mot de passe incorrect', 'INVALID_CREDENTIALS');
    }

    return {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      linkedin_url: user.linkedin_url,
      user_type: user.user_type,
      isVerified: user.isVerified
    };
  }

  async requestPasswordReset(email: string): Promise<string> {
    const user = await this.db.getUserByEmail(email);
    if (!user) {
      throw new AuthError('Aucun compte trouvé avec cette adresse email', 'USER_NOT_FOUND');
    }

    const resetToken = TokenUtils.generate();
    const expiry = TokenUtils.getExpiryDate(1); // 1 heure

    await this.db.setResetToken(email, resetToken, expiry);
    return resetToken;
  }

  async resetPassword(data: z.infer<typeof newPasswordSchema>): Promise<void> {
    const user = await this.db.getUserByResetToken(data.token);
    if (!user || !user.resetTokenExpiry) {
      throw new AuthError('Token de réinitialisation invalide', 'INVALID_TOKEN');
    }

    if (TokenUtils.isExpired(user.resetTokenExpiry)) {
      throw new AuthError('Token de réinitialisation expiré', 'INVALID_TOKEN');
    }

    const hashedPassword = await PasswordUtils.hash(data.password);
    
    await this.db.updateUser(user.id, {
      hashedPassword,
      resetToken: undefined,
      resetTokenExpiry: undefined
    });

    await this.db.clearResetToken(user.id);
  }

  async verifyEmail(token: string): Promise<void> {
    // Implémentation selon votre logique de vérification
    // Par exemple, récupérer l'utilisateur par token de vérification
    // et marquer comme vérifié
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.db.getUserById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.db.getUserByEmail(email);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    return await this.db.updateUser(id, userData);
  }
}
/**
 * Hook React pour la gestion de l'authentification
 */

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  linkedin_url?: string;
  user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (userData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    linkedin_url?: string;
    user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
    password: string;
    confirmPassword: string;
  }) => Promise<{ success: boolean; message: string; errors?: any[] }>;
  signIn: (credentials: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; message: string }>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
  updateProfile: (updateData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    linkedin_url?: string;
    current_password?: string;
    new_password?: string;
  }) => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // État initial toujours null pour éviter l'erreur d'hydratation
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Effet pour gérer l'hydratation côté client
  useEffect(() => {
    setIsHydrated(true);
    
    // Restaurer l'utilisateur depuis sessionStorage après hydratation
    const savedUser = sessionStorage.getItem('auth-user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        console.log('💾 Restauration utilisateur depuis sessionStorage:', parsedUser.email);
        setUser(parsedUser);
      } catch (error) {
        console.log('❌ Erreur parse sessionStorage user:', error);
        sessionStorage.removeItem('auth-user');
      }
    }
  }, []);

  // Fonction pour récupérer les informations utilisateur
  const fetchUser = async () => {
    try {
      // Récupérer le token depuis localStorage comme fallback
      const storedToken = typeof window !== 'undefined' ? localStorage.getItem('auth-token') : null;
      console.log('🔄 fetchUser - Token localStorage:', storedToken ? 'PRÉSENT' : 'ABSENT');
      
      const headers: Record<string, string> = {
        'Cache-Control': 'no-cache'
      };
      
      // Ajouter le token dans les headers si disponible
      if (storedToken) {
        headers.Authorization = `Bearer ${storedToken}`;
      }
      
      console.log('📡 fetchUser - Appel API /auth/me...');
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
        headers
      });
      
      console.log('📡 fetchUser - Réponse API:', response.status, response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ fetchUser - Données reçues:', data.success ? 'SUCCESS' : 'FAILED');
        
        if (data.success && data.user) {
          console.log('👤 fetchUser - Utilisateur connecté:', data.user.email);
          setUser(data.user);
          // Sauvegarder l'utilisateur dans sessionStorage
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('auth-user', JSON.stringify(data.user));
            // Sauvegarder le token dans localStorage si on ne l'avait pas
            if (data.token && !storedToken) {
              localStorage.setItem('auth-token', data.token);
            }
          }
        } else {
          console.log('❌ fetchUser - Pas d\'utilisateur connecté');
          setUser(null);
          // Nettoyer le stockage
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem('auth-user');
            if (storedToken) {
              localStorage.removeItem('auth-token');
            }
          }
        }
      } else {
        console.log('⚠️ fetchUser - Erreur HTTP:', response.status);
        // Ne déconnecter que sur 401 (non autorisé)
        if (response.status === 401) {
          console.log('🚫 fetchUser - Token invalide, déconnexion');
          setUser(null);
          // Token invalide, le supprimer
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth-token');
            sessionStorage.removeItem('auth-user');
          }
        }
        // Pour les autres erreurs (500, etc.), garder l'état actuel et réessayer
      }
    } catch (error) {
      console.error('💥 fetchUser - Erreur:', error);
      // Sur erreur réseau, ne pas déconnecter automatiquement
      console.log('🔄 fetchUser - Erreur réseau, garde l\'état actuel');
    } finally {
      setLoading(false);
      if (!initialCheckDone) {
        setInitialCheckDone(true);
      }
    }
  };

  // Fonction d'inscription
  const signUp = async (userData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (data.success) {
        return { 
          success: true, 
          message: data.message 
        };
      } else {
        return { 
          success: false, 
          message: data.message,
          errors: data.errors 
        };
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      return { 
        success: false, 
        message: 'Une erreur de connexion s\'est produite' 
      };
    }
  };

  // Fonction de connexion
  const signIn = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        
        // Sauvegarder dans sessionStorage et localStorage
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('auth-user', JSON.stringify(data.user));
          if (data.token) {
            localStorage.setItem('auth-token', data.token);
          }
        }
        
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return { 
        success: false, 
        message: 'Une erreur de connexion s\'est produite' 
      };
    }
  };

  // Fonction de déconnexion
  const signOut = async () => {
    try {
      await fetch('/api/auth/signout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      setUser(null);
      // Nettoyer le stockage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth-token');
        sessionStorage.removeItem('auth-user');
      }
    }
  };

  // Fonction pour rafraîchir les données utilisateur
  const refreshUser = async () => {
    await fetchUser();
  };

  // Fonction de mise à jour du profil
  const updateProfile = async (updateData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    current_password?: string;
    new_password?: string;
  }) => {
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (data.success) {
        // Mettre à jour les données utilisateur locales
        if (data.user) {
          setUser(data.user);
          // Sauvegarder dans sessionStorage
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('auth-user', JSON.stringify(data.user));
          }
        } else {
          // Rafraîchir les données depuis le serveur
          await fetchUser();
        }
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      return { 
        success: false, 
        message: 'Une erreur de connexion s\'est produite' 
      };
    }
  };

  // Récupérer les informations utilisateur au chargement (après hydratation)
  useEffect(() => {
    if (!isHydrated) return;

    const checkInitialAuth = async () => {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('auth-token');
        const storedUser = sessionStorage.getItem('auth-user');
        console.log('🚀 useAuth - Démarrage avec token localStorage:', storedToken ? 'PRÉSENT' : 'ABSENT');
        console.log('🚀 useAuth - Utilisateur sessionStorage:', storedUser ? 'PRÉSENT' : 'ABSENT');
        
        // Si on a un utilisateur en cache et un token, éviter l'appel API immédiat
        if (storedUser && storedToken && user) {
          console.log('💾 useAuth - Utilisation du cache, vérification en arrière-plan');
          setLoading(false);
          setInitialCheckDone(true);
          // Vérifier en arrière-plan quand même
          setTimeout(() => fetchUser(), 100);
        } else {
          // Toujours essayer de récupérer l'utilisateur (cookies ou localStorage)
          await fetchUser();
        }
      } else {
        console.log('🚀 useAuth - Côté serveur, pas de vérification');
        setLoading(false);
      }
    };
    
    // Ajouter un délai minimal pour éviter les conflits de rendu
    const timer = setTimeout(() => {
      checkInitialAuth();
    }, 10);
    
    return () => clearTimeout(timer);
  }, [isHydrated]);

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    refreshUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};
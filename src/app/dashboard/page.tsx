/**
 * Page Dashboard - Accueil pour utilisateurs connectés
 */

'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserTypeSection, QuickActions, RecentActivity } from '@/components/Dashboard';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirection en cours
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] dark:bg-black pt-32">
      <div className="container">
        {/* En-tête de bienvenue */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Bonjour {user.first_name} !
              </h1>
              <p className="text-body-color text-lg">
                Bienvenue sur votre espace {getUserTypeLabel(user.user_type)}
              </p>
              <div className="mt-3 flex items-center space-x-4 text-sm text-body-color/70">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {user.email}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {user.phone}
                </span>
                {!user.isVerified && (
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    ⚠️ Compte non vérifié
                  </span>
                )}
              </div>
            </div>
            
            {/* Badge du type d'utilisateur */}
            <div className="mt-6 lg:mt-0">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 ${
                user.user_type === 'admin' ? 'bg-white border-primary text-primary dark:bg-dark dark:border-primary dark:text-primary' :
                user.user_type === 'enterprise' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                user.user_type === 'coach_therapist' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
                'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
              }`}>
                {user.user_type === 'admin' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ) : user.user_type === 'enterprise' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                {getUserTypeLabel(user.user_type)}
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        {user.user_type === 'admin' ? (
          /* Dashboard Admin - Complet */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Section principale */}
            <div className="lg:col-span-2 space-y-8">
              <UserTypeSection userType={user.user_type} />
            </div>

            {/* Barre latérale */}
            <div className="space-y-8">
              <QuickActions userType={user.user_type} />
              <RecentActivity userType={user.user_type} />
            </div>
          </div>
        ) : (
          /* Dashboard pour Client, Entreprise, Coach - Vide pour le moment */
          <div className="py-8">
            {/* Espace vide pour le développement futur */}
          </div>
        )}
      </div>
    </div>
  );
}

// Fonctions utilitaires pour les types d'utilisateurs
function getUserTypeLabel(type: string) {
  switch (type) {
    case 'admin':
      return 'Administrateur Unleash Lab';
    case 'enterprise':
      return 'Entreprise';
    case 'client':
      return 'Client';
    case 'coach_therapist':
      return 'Coach Thérapeute';
    default:
      return 'Utilisateur';
  }
}

// Fonctions utilitaires supprimées - utilisation directe d'icônes SVG et de styles modernes
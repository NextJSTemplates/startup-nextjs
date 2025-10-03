/**
 * Actions rapides adaptées au type d'utilisateur
 */

'use client';

import AdminQuickActions from './AdminQuickActions';

interface QuickActionsProps {
  userType: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
}

export default function QuickActions({ userType }: QuickActionsProps) {
  // Pour les admins, utiliser le composant spécialisé
  if (userType === 'admin') {
    return <AdminQuickActions />;
  }

  const enterpriseActions = [
    { iconPath: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Nouveau projet', description: 'Créer un projet' },
    { iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', label: 'Mes KPIs', description: 'Voir les métriques' },
    { iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0', label: 'Équipe', description: 'Gérer l\'équipe' },
    { iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1', label: 'Budget', description: 'Suivi financier' }
  ];

  const analystActions = [
    { iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Nouvelle analyse', description: 'Créer un rapport' },
    { iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', label: 'Dashboard', description: 'Créer un tableau' },
    { iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Rechercher données', description: 'Explorer les données' }
  ];

  const getActions = () => {
    switch (userType) {
      case 'enterprise':
        return enterpriseActions;
      case 'client':
        return analystActions;
      default:
        return [];
    }
  };

  const actions = getActions();

  return (
    <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Actions rapides
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white p-4 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary/30 text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.iconPath} />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black dark:text-white">{action.label}</h4>
                <p className="text-body-color text-sm">{action.description}</p>
              </div>
              <div className="text-body-color">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
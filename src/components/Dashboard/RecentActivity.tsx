'use client';

interface RecentActivityProps {
  userType: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
}

interface ActivityItem {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  iconPath: string;
  color: string;
  user?: string;
}

export default function RecentActivity({ userType }: RecentActivityProps) {
  const adminActivities: ActivityItem[] = [
    {
      id: '1',
      type: 'user',
      title: 'Nouvel utilisateur',
      description: 'Marie Dubois (Enterprise) s\'est inscrite',
      timestamp: 'Il y a 15 min',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      color: 'text-blue-500',
    },
    {
      id: '2',
      type: 'security',
      title: 'Mise à jour sécurité',
      description: 'Nouvelle politique de mots de passe appliquée',
      timestamp: 'Il y a 1h',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'text-green-500',
    },
    {
      id: '3',
      type: 'backup',
      title: 'Sauvegarde complétée',
      description: 'Backup automatique des données utilisateurs',
      timestamp: 'Il y a 2h',
      iconPath: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
      color: 'text-purple-500',
    }
  ];

  const enterpriseActivities: ActivityItem[] = [
    {
      id: '1',
      type: 'project',
      title: 'Nouveau projet',
      description: 'Projet "Expansion Q2" créé par Jean Martin',
      timestamp: 'Il y a 30 min',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'text-blue-500',
    },
    {
      id: '2',
      type: 'team',
      title: 'Équipe mise à jour',
      description: '3 nouveaux membres ajoutés au projet Alpha',
      timestamp: 'Il y a 1h',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      color: 'text-green-500',
    },
    {
      id: '3',
      type: 'budget',
      title: 'Budget approuvé',
      description: 'Budget Q2 validé par la direction',
      timestamp: 'Il y a 3h',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8a3 3 0 013 3m-3-3a3 3 0 00-3 3m3 3a3 3 0 103-3m-3 3a3 3 0 01-3-3',
      color: 'text-yellow-500',
    }
  ];

  const analystActivities: ActivityItem[] = [
    {
      id: '1',
      type: 'analysis',
      title: 'Analyse terminée',
      description: 'Rapport de performance Q1-2024 généré',
      timestamp: 'Il y a 45 min',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'text-blue-500',
    },
    {
      id: '2',
      type: 'data',
      title: 'Données actualisées',
      description: 'Intégration des données client complétée',
      timestamp: 'Il y a 2h',
      iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'text-green-500',
    },
    {
      id: '3',
      type: 'insight',
      title: 'Nouvelle tendance',
      description: 'Anomalie détectée dans les ventes région Sud',
      timestamp: 'Il y a 4h',
      iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      color: 'text-orange-500',
    }
  ];

  const getActivities = (): ActivityItem[] => {
    switch (userType) {
      case 'admin':
        return adminActivities;
      case 'enterprise':
        return enterpriseActivities;
      case 'client':
        return analystActivities;
      default:
        return [];
    }
  };

  const activities = getActivities();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Activité récente
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              index !== activities.length - 1 ? 'border-b border-gray-100 dark:border-gray-600 pb-4' : ''
            }`}
          >
            <div className={`${activity.color} mt-1 flex-shrink-0`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activity.iconPath} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-black dark:text-white truncate">
                  {activity.title}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap">
                  {activity.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {activity.description}
              </p>
              {activity.user && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Par {activity.user}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors font-medium">
          Voir toute l'activité
        </button>
      </div>
    </div>
  );
}

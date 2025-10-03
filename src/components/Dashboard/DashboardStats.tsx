/**
 * Composant des statistiques du dashboard
 */

'use client';

interface DashboardStatsProps {
  userType: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
}

export default function DashboardStats({ userType }: DashboardStatsProps) {
  const getStats = () => {
    switch (userType) {
      case 'admin':
        return [
          {
            title: 'Utilisateurs totaux',
            value: '2,547',
            change: '+12%',
            positive: true,
            iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          },
          {
            title: 'Projets actifs',
            value: '156',
            change: '+8%',
            positive: true,
            iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
          },
          {
            title: 'Revenus ce mois',
            value: '€48,239',
            change: '+23%',
            positive: true,
            iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
          },
          {
            title: 'Taux de satisfaction',
            value: '97.2%',
            change: '+2.1%',
            positive: true,
            iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          }
        ];
      
      case 'enterprise':
        return [
          {
            title: 'Projets en cours',
            value: '12',
            change: '+3',
            positive: true,
            iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
          },
          {
            title: 'Équipe active',
            value: '45',
            change: '+5',
            positive: true,
            iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          },
          {
            title: 'Budget utilisé',
            value: '67%',
            change: '+12%',
            positive: false,
            iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
          },
          {
            title: 'Tâches complétées',
            value: '892',
            change: '+67',
            positive: true,
            iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          }
        ];
      
      case 'client':
        return [
          {
            title: 'Analyses réalisées',
            value: '34',
            change: '+6',
            positive: true,
            iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          },
          {
            title: 'Rapports générés',
            value: '18',
            change: '+3',
            positive: true,
            iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
          },
          {
            title: 'Données traitées',
            value: '2.4TB',
            change: '+15%',
            positive: true,
            iconPath: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
          },
          {
            title: 'KPIs suivis',
            value: '127',
            change: '+12',
            positive: true,
            iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
          }
        ];
      
      case 'coach_therapist':
        return [
          {
            title: 'Sessions réalisées',
            value: '247',
            change: '+23',
            positive: true,
            iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          },
          {
            title: 'Clients suivis',
            value: '89',
            change: '+12',
            positive: true,
            iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          },
          {
            title: 'Taux de satisfaction',
            value: '4.9/5',
            change: '+0.2',
            positive: true,
            iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          },
          {
            title: 'Heures dispensées',
            value: '342h',
            change: '+45h',
            positive: true,
            iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          }
        ];
      
      default:
        return [];
    }
  };

  const stats = getStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
              </svg>
            </div>
            <div className={`text-sm font-medium px-2 py-1 rounded-full ${
              stat.positive 
                ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {stat.change}
            </div>
          </div>
          
          <div className="mb-2">
            <div className="text-2xl font-bold text-black dark:text-white mb-1">
              {stat.value}
            </div>
            <div className="text-body-color text-sm">
              {stat.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
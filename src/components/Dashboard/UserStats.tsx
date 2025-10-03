/**
 * Statistiques des utilisateurs pour le dashboard admin
 */

'use client';

import { useState, useEffect } from 'react';

interface UserStatsData {
  total: number;
  admins: number;
  enterprises: number;
  clients: number;
  coach_therapists: number;
  verified: number;
  unverified: number;
}

export default function UserStats() {
  const [stats, setStats] = useState<UserStatsData>({
    total: 0,
    admins: 0,
    enterprises: 0,
    clients: 0,
    coach_therapists: 0,
    verified: 0,
    unverified: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserStats();
  }, []);

  const fetchUserStats = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/stats', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, iconPath, color, subtitle }: {
    title: string;
    value: number;
    iconPath: string;
    color: string;
    subtitle?: string;
  }) => (
    <div className={`${color} rounded-lg p-4 border border-stroke dark:border-gray-700`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-body-color text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-black dark:text-white">
            {loading ? (
              <span className="animate-pulse">--</span>
            ) : (
              value.toLocaleString()
            )}
          </p>
          {subtitle && (
            <p className="text-body-color/70 text-xs mt-1">{subtitle}</p>
          )}
        </div>
        <div className="text-primary opacity-80">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
      </div>
    </div>
  );

  const getGrowthIndicator = (current: number, total: number) => {
    if (total === 0) return '';
    const percentage = ((current / total) * 100).toFixed(1);
    return `${percentage}%`;
  };

  return (
    <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-black dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Statistiques utilisateurs
        </h3>
        <button
          onClick={fetchUserStats}
          className="text-sm text-body-color hover:text-primary transition-colors flex items-center gap-1"
          disabled={loading}
        >
          <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {loading ? 'Actualisation...' : 'Actualiser'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total utilisateurs"
          value={stats.total}
          iconPath="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          color="bg-gray-50 dark:bg-gray-800"
          subtitle="Tous comptes confondus"
        />
        
        <StatCard
          title="Administrateurs"
          value={stats.admins}
          iconPath="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          color="bg-gray-50 dark:bg-gray-800"
          subtitle={getGrowthIndicator(stats.admins, stats.total)}
        />
        
        <StatCard
          title="Entreprises"
          value={stats.enterprises}
          iconPath="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          color="bg-gray-50 dark:bg-gray-800"
          subtitle={getGrowthIndicator(stats.enterprises, stats.total)}
        />
        
        <StatCard
          title="Clients"
          value={stats.clients}
          iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          color="bg-gray-50 dark:bg-gray-800"
          subtitle={getGrowthIndicator(stats.clients, stats.total)}
        />
        
        <StatCard
          title="Coach Thérapeutes"
          value={stats.coach_therapists}
          iconPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          color="bg-gray-50 dark:bg-gray-800"
          subtitle={getGrowthIndicator(stats.coach_therapists, stats.total)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Comptes vérifiés</p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                {loading ? '--' : stats.verified}
              </p>
            </div>
            <div className="text-green-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: stats.total > 0 ? `${(stats.verified / stats.total) * 100}%` : '0%' 
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {stats.total > 0 ? `${((stats.verified / stats.total) * 100).toFixed(1)}%` : '0%'} des utilisateurs
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">En attente</p>
              <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                {loading ? '--' : stats.unverified}
              </p>
            </div>
            <div className="text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.232 15c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: stats.total > 0 ? `${(stats.unverified / stats.total) * 100}%` : '0%' 
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {stats.total > 0 ? `${((stats.unverified / stats.total) * 100).toFixed(1)}%` : '0%'} des utilisateurs
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Nouveaux (7j)</p>
              <p className="text-lg font-bold text-primary">
                {loading ? '--' : stats.total}
              </p>
            </div>
            <div className="text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Inscrits cette semaine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
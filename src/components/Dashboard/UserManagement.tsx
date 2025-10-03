/**
 * Composant de gestion des utilisateurs pour le dashboard admin
 */

'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  linkedin_url?: string;
  user_type: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
  isVerified: boolean;
  createdAt: string;
}

interface UserEditData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  linkedin_url?: string;
  user_type: string;
  isVerified: boolean;
}

interface UserManagementProps {
  onUserCountChange?: (count: number) => void;
}

export default function UserManagement({ onUserCountChange }: UserManagementProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [filteredUsersCount, setFilteredUsersCount] = useState(0);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [viewingUser, setViewingUser] = useState<User | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fonction pour lancer la recherche
  const handleSearch = () => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
    fetchUsers(1);
  };

  // Recherche au press Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Fonction pour réinitialiser tous les filtres
  const clearAllFilters = () => {
    setSearchTerm('');
    setSearchQuery('');
    setFilterType('all');
    setFilterStatus('all');
    setCurrentPage(1);
    fetchUsers(1);
  };

  // Recharger quand les filtres changent (pas la recherche)
  useEffect(() => {
    setCurrentPage(1);
    fetchUsers(1);
  }, [searchQuery, filterType, filterStatus]);

  // Gérer l'overflow du body quand la modal est ouverte
  useEffect(() => {
    if (editingUser || viewingUser) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [editingUser, viewingUser]);

  const fetchUsers = async (page = currentPage) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: usersPerPage.toString(),
        search: searchQuery,
        filterType,
        filterStatus
      });
      
      const response = await fetch(`/api/admin/users?${params}`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalUsers(data.pagination?.totalUsers || 0);
        setFilteredUsersCount(data.pagination?.filteredUsersCount || 0);
        setCurrentPage(data.pagination?.currentPage || 1);
        onUserCountChange?.(data.pagination?.totalUsers || 0);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      setUpdateLoading(true);
      const formData = new FormData(e.currentTarget);
      const updateData: UserEditData = {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        linkedin_url: formData.get('linkedin_url') as string || undefined,
        user_type: formData.get('user_type') as string,
        isVerified: formData.get('isVerified') === 'true'
      };

      const response = await fetch('/api/admin/update-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: editingUser.id,
          ...updateData
        })
      });

      if (response.ok) {
        await fetchUsers(currentPage);
        // Mettre à jour les données de l'utilisateur en cours de visualisation
        const updatedUser: User = { 
          ...editingUser, 
          ...updateData,
          user_type: updateData.user_type as 'admin' | 'enterprise' | 'client' | 'coach_therapist'
        };
        setViewingUser(updatedUser);
        setEditingUser(null);
      } else {
        const error = await response.json();
        alert('Erreur lors de la mise à jour: ' + error.message);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Erreur lors de la mise à jour de l\'utilisateur');
    } finally {
      setUpdateLoading(false);
    }
  };

  // Les données sont maintenant filtrées et paginées côté serveur
  const currentUsers = users;

  const getStatusBadge = (isVerified: boolean) => {
    if (isVerified) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="hidden sm:inline">Vérifié</span>
          <span className="sm:hidden">✓</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.232 15c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span className="hidden sm:inline">En attente</span>
        <span className="sm:hidden">...</span>
      </span>
    );
  };

  const getUserTypeBadge = (userType: string) => {
    const colors = {
      admin: 'bg-white border-primary text-primary dark:bg-dark dark:border-primary dark:text-primary border-2',
      enterprise: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      client: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      coach_therapist: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      user: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    };
    
    const iconPaths = {
      admin: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      enterprise: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      client: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      coach_therapist: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    };
    
    const labels = {
      admin: { full: 'Administrateur', short: 'Admin' },
      enterprise: { full: 'Entreprise', short: 'Ent.' },
      client: { full: 'Client', short: 'Client' },
      coach_therapist: { full: 'Coach Thérapeute', short: 'Coach' },
      user: { full: 'Utilisateur', short: 'User' }
    };
    
    const userLabel = labels[userType as keyof typeof labels] || labels.user;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
        colors[userType as keyof typeof colors] || colors.user
      }`}>
        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[userType as keyof typeof iconPaths] || iconPaths.user} />
        </svg>
        <span className="hidden sm:inline">{userLabel.full}</span>
        <span className="sm:hidden">{userLabel.short}</span>
      </span>
    );
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden sm:inline">Gestion des utilisateurs</span>
            <span className="sm:hidden">Utilisateurs</span>
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm text-body-color bg-primary/10 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              {totalUsers} utilisateur{totalUsers > 1 ? 's' : ''} au total
            </span>
            {(searchQuery !== '' || filterType !== 'all' || filterStatus !== 'all') && (
              <span className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                {filteredUsersCount} résultat{filteredUsersCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher par nom, prénom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-16 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white text-sm focus:outline-none focus:border-primary"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white text-sm focus:outline-none focus:border-primary"
          >
            <option value="all">Tous les types</option>
            <option value="admin">Administrateurs</option>
            <option value="enterprise">Entreprises</option>
            <option value="client">Clients</option>
            <option value="coach_therapist">Coach Thérapeutes</option>
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white text-sm focus:outline-none focus:border-primary"
          >
            <option value="all">Tous les statuts</option>
            <option value="verified">Vérifiés</option>
            <option value="unverified">En attente</option>
          </select>
          
          {/* Bouton pour supprimer tous les filtres */}
          {(searchQuery !== '' || filterType !== 'all' || filterStatus !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              title="Supprimer tous les filtres"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="hidden sm:inline">Effacer</span>
              <span className="sm:hidden">Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Liste des utilisateurs */}
      <div className="space-y-3">
        {currentUsers.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
            <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {searchTerm || filterType !== 'all' || filterStatus !== 'all' ? 
              'Aucun utilisateur trouvé avec ces critères' : 
              'Aucun utilisateur trouvé'
            }
          </div>
        ) : (
          currentUsers.map((user) => (
            <div
              key={user.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-primary">
                    {user.first_name[0]?.toUpperCase()}{user.last_name[0]?.toUpperCase()}
                  </span>
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <h4 className="font-medium text-black dark:text-white truncate text-sm sm:text-base">
                      {user.first_name} {user.last_name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      {getUserTypeBadge(user.user_type)}
                      {getStatusBadge(user.isVerified)}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-body-color">
                    Membre depuis {new Date(user.createdAt).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end sm:justify-start space-x-2 shrink-0">
                <button
                  onClick={() => setViewingUser(user)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="hidden sm:inline">Aperçu</span>
                  <span className="sm:hidden">Voir</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
          <div className="text-xs sm:text-sm text-body-color text-center sm:text-left">
            <span className="block sm:inline">Page {currentPage} sur {totalPages}</span>
            <span className="block sm:inline sm:ml-2 text-gray-500">({totalUsers} utilisateur{totalUsers > 1 ? 's' : ''} au total)</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => {
                const newPage = Math.max(currentPage - 1, 1);
                setCurrentPage(newPage);
                fetchUsers(newPage);
              }}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded text-sm disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              ←
            </button>
            
            <span className="px-3 py-1 text-sm font-medium">
              {currentPage} / {totalPages}
            </span>
            
            <button
              onClick={() => {
                const newPage = Math.min(currentPage + 1, totalPages);
                setCurrentPage(newPage);
                fetchUsers(newPage);
              }}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Popup d'aperçu de profil utilisateur */}
      {viewingUser && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center p-4 z-[99999]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setViewingUser(null);
            }
          }}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header de la popup */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white p-4 sm:p-6 rounded-t-2xl">
              <button
                onClick={() => setViewingUser(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 sm:gap-4 pr-10 sm:pr-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-lg sm:text-2xl font-bold text-white">
                    {viewingUser.first_name[0]?.toUpperCase()}{viewingUser.last_name[0]?.toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold truncate">
                    {viewingUser.first_name} {viewingUser.last_name}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">Profil utilisateur</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Informations générales */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden sm:inline">Informations générales</span>
                  <span className="sm:hidden">Infos</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-body-color">Email</p>
                      <p className="font-medium text-black dark:text-white text-sm sm:text-base truncate">{viewingUser.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-body-color">Téléphone</p>
                      <p className="font-medium text-black dark:text-white text-sm sm:text-base">{viewingUser.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 sm:col-span-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-body-color mb-1">LinkedIn</p>
                      {viewingUser.linkedin_url ? (
                        <a 
                          href={viewingUser.linkedin_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-green-600 dark:text-green-400 hover:underline flex items-center gap-1 text-sm sm:text-base break-all"
                        >
                          <span className="truncate">
                            {viewingUser.linkedin_url.includes('linkedin.com/in/') 
                              ? viewingUser.linkedin_url.split('linkedin.com/in/')[1]?.split('/')[0] || 'Voir le profil'
                              : 'Voir le profil'
                            }
                          </span>
                          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <p className="font-medium text-gray-400 dark:text-gray-500 text-sm sm:text-base">Non renseigné</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 2v5a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2H10z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-body-color">Membre depuis</p>
                      <p className="font-medium text-black dark:text-white text-sm sm:text-base">{new Date(viewingUser.createdAt).toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statut et type */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Statut du compte</span>
                  <span className="sm:hidden">Statut</span>
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-body-color whitespace-nowrap">Type:</span>
                    {getUserTypeBadge(viewingUser.user_type)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-body-color whitespace-nowrap">Vérification:</span>
                    {getStatusBadge(viewingUser.isVerified)}
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setViewingUser(null);
                    setEditingUser(viewingUser);
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Modifier ce profil
                </button>
                
                <button
                  onClick={() => setViewingUser(null)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'édition moderne et ergonomique */}
      {editingUser && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div 
            className="absolute inset-0"
            onClick={() => {
              setViewingUser(editingUser);
              setEditingUser(null);
            }}
          />
          <div className="relative bg-white dark:bg-dark rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header moderne */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 p-4 sm:p-6 text-white">
              <div className="flex items-center gap-3 sm:gap-4 pr-10 sm:pr-12">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">
                    <span className="hidden sm:inline">Modifier l'utilisateur</span>
                    <span className="sm:hidden">Modifier</span>
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm truncate">
                    {editingUser.first_name} {editingUser.last_name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setViewingUser(editingUser);
                  setEditingUser(null);
                }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenu du formulaire */}
            <form onSubmit={handleUpdateUser} className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto">
              {/* Informations personnelles */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden sm:inline">Informations personnelles</span>
                  <span className="sm:hidden">Infos personnelles</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Prénom</label>
                    <input
                      name="first_name"
                      type="text"
                      defaultValue={editingUser.first_name}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Nom</label>
                    <input
                      name="last_name"
                      type="text"
                      defaultValue={editingUser.last_name}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Informations de contact</span>
                  <span className="sm:hidden">Contact</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={editingUser.email}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Téléphone</label>
                    <input
                      name="phone"
                      type="tel"
                      defaultValue={editingUser.phone}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">LinkedIn (optionnel)</label>
                    <input
                      name="linkedin_url"
                      type="url"
                      defaultValue={editingUser.linkedin_url || ''}
                      placeholder="https://linkedin.com/in/votre-profil"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Paramètres du compte */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Paramètres du compte
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Type d'utilisateur</label>
                    <select
                      name="user_type"
                      defaultValue={editingUser.user_type}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                    >
                      <option value="admin">Administrateur</option>
                      <option value="enterprise">Entreprise</option>
                      <option value="client">Client</option>
                      <option value="coach_therapist">Coach Thérapeute</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">Statut de vérification</label>
                    <select
                      name="isVerified"
                      defaultValue={editingUser.isVerified.toString()}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                    >
                      <option value="true">✅ Vérifié</option>
                      <option value="false">⏳ En attente</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-white py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2 font-medium"
                >
                  {updateLoading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mise à jour...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sauvegarder les modifications
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setViewingUser(editingUser);
                    setEditingUser(null);
                  }}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
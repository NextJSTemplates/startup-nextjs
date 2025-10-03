/**
 * Section principale adaptée au type d'utilisateur
 */

'use client';

import UserManagement from './UserManagement';
import UserStats from './UserStats';

interface UserTypeSectionProps {
  userType: 'admin' | 'enterprise' | 'client' | 'coach_therapist';
}

export default function UserTypeSection({ userType }: UserTypeSectionProps) {
  const renderAdminSection = () => (
    <div className="space-y-6">
      {/* Statistiques utilisateurs */}
      <UserStats />
      
      {/* Gestion complète des utilisateurs */}
      <UserManagement />
    </div>
  );

  const renderEnterpriseSection = () => (
    <div className="space-y-6">
      {/* Projets en cours */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center">
          Vos projets
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Migration Cloud AWS', progress: 75, status: 'En cours', priority: 'Haute' },
            { name: 'Refonte Site Web', progress: 45, status: 'En cours', priority: 'Moyenne' },
            { name: 'Formation Équipe', progress: 90, status: 'Finalisation', priority: 'Basse' }
          ].map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-black dark:text-white">{project.name}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.priority === 'Haute' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  project.priority === 'Moyenne' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                }`}>
                  {project.priority}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-body-color">{project.status}</span>
                <span className="text-sm font-medium text-black dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Équipe */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Équipe
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Sophie Martin', role: 'Chef de projet', status: 'Connectée', avatar: '👩‍💼' },
            { name: 'Pierre Dubois', role: 'Développeur', status: 'Occupé', avatar: '👨‍💻' },
            { name: 'Marie Leroy', role: 'Designer', status: 'Disponible', avatar: '👩‍🎨' }
          ].map((member, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl">{member.avatar}</div>
              <div>
                <h4 className="font-medium text-black dark:text-white">{member.name}</h4>
                <p className="text-sm text-body-color">{member.role}</p>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    member.status === 'Connectée' || member.status === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className="text-xs text-body-color">{member.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClientSection = () => (
    <div className="space-y-6">
      {/* Sessions récentes */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Vos sessions récentes
        </h3>
        <div className="space-y-4">
          {[
            { 
              type: 'Coaching individuel',
              coach: 'Dr. Sarah Johnson',
              date: 'Aujourd\'hui, 14h00',
              status: 'Confirmée',
              topic: 'Gestion du stress professionnel'
            },
            { 
              type: 'Thérapie de groupe',
              coach: 'Marie Dubois',
              date: 'Demain, 16h30',
              status: 'À confirmer',
              topic: 'Communication interpersonnelle'
            },
            { 
              type: 'Séance de méditation',
              coach: 'Thomas Leroy',
              date: 'Vendredi, 10h00',
              status: 'Confirmée',
              topic: 'Mindfulness et pleine conscience'
            }
          ].map((session, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-black dark:text-white">{session.type}</h4>
                  <p className="text-sm text-body-color">avec {session.coach}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  session.status === 'Confirmée' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                }`}>
                  {session.status}
                </span>
              </div>
              <p className="text-sm text-body-color mb-2">{session.topic}</p>
              <p className="text-sm font-medium text-black dark:text-white">{session.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progression */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Votre progression
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Sessions complétées</h4>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">12</span>
              <span className="text-sm text-body-color">ce mois</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Objectifs atteints</h4>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">8/10</span>
              <span className="text-sm text-body-color">cette semaine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoachSection = () => (
    <div className="space-y-6">
      {/* Clients aujourd'hui */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Sessions d'aujourd'hui
        </h3>
        <div className="space-y-4">
          {[
            { 
              client: 'Client A',
              time: '09h00 - 10h00',
              type: 'Première consultation',
              status: 'Confirmé'
            },
            { 
              client: 'Client B',
              time: '14h30 - 15h30',
              type: 'Suivi thérapeutique',
              status: 'En cours'
            },
            { 
              client: 'Client C',
              time: '16h00 - 17h00',
              type: 'Coaching professionnel',
              status: 'À confirmer'
            }
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <h4 className="font-semibold text-black dark:text-white">{session.client}</h4>
                <p className="text-sm text-body-color">{session.type}</p>
                <p className="text-sm font-medium text-primary">{session.time}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                session.status === 'Confirmé' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                session.status === 'En cours' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                {session.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statistiques du mois */}
      <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Statistiques du mois
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">45</div>
            <div className="text-sm text-body-color">Sessions réalisées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-body-color">Nouveaux clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-body-color">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Rendu conditionnel basé sur le type d'utilisateur
  switch (userType) {
    case 'admin':
      return renderAdminSection();
    case 'enterprise':
      return renderEnterpriseSection();
    case 'client':
      return renderClientSection();
    case 'coach_therapist':
      return renderCoachSection();
    default:
      return null;
  }
}
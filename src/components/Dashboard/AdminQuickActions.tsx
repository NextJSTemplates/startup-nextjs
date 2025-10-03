/**
 * Actions rapides pour la gestion des utilisateurs (admin)
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminQuickActions() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    user_type: 'business_analyst',
    linkedin_url: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  const actions = [
    {
      title: 'Ajouter utilisateur',
      description: 'Créer un nouvel utilisateur dans le système',
      iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      onClick: () => setShowAddUserModal(true),
    },
    {
      title: 'Fonctionnalité 1',
      description: 'Fonctionnalité en cours de développement',
      iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5l-1-1z',
      href: '#',
      onClick: () => alert('Fonctionnalité 1 - En cours de développement')
    },
    {
      title: 'Fonctionnalité 2',
      description: 'Fonctionnalité en cours de développement',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      href: '#',
      onClick: () => alert('Fonctionnalité 2 - En cours de développement')
    },
    {
      title: 'Fonctionnalité 3',
      description: 'Fonctionnalité en cours de développement',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      href: '#',
      onClick: () => alert('Fonctionnalité 3 - En cours de développement')
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', content: '' });

    try {
      const response = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', content: 'Utilisateur créé avec succès !' });
        setFormData({
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          phone: '',
          user_type: 'client',
          linkedin_url: ''
        });
        // Fermer la modal après 2 secondes
        setTimeout(() => {
          setShowAddUserModal(false);
          setMessage({ type: '', content: '' });
          window.location.reload(); // Rafraîchir pour voir le nouvel utilisateur
        }, 2000);
      } else {
        setMessage({ type: 'error', content: data.error || 'Erreur lors de la création' });
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur de connexion au serveur' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowAddUserModal(false);
    setMessage({ type: '', content: '' });
    setFormData({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
      user_type: 'client',
      linkedin_url: ''
    });
  };

  // Gérer l'overflow du body quand la modal est ouverte
  useEffect(() => {
    if (showAddUserModal) {
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
  }, [showAddUserModal]);

  return (
    <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-6 border border-transparent dark:border-gray-700">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Actions rapides
      </h3>
      
      <div className="space-y-3">
        {actions.map((action, index) => {
          if (action.onClick) {
            return (
              <button
                key={index}
                onClick={action.onClick}
                type="button"
                className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white p-4 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary/30 block w-full text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black dark:text-white">{action.title}</h4>
                    <p className="text-body-color text-sm">{action.description}</p>
                  </div>
                  <div className="text-body-color">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          }

          if (action.href && action.href !== '#') {
            return (
              <Link
                key={index}
                href={action.href}
                className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white p-4 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary/30 block w-full text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black dark:text-white">{action.title}</h4>
                    <p className="text-body-color text-sm">{action.description}</p>
                  </div>
                  <div className="text-body-color">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <button
              key={index}
              onClick={action.onClick}
              type="button"
              className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white p-4 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary/30 block w-full text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.iconPath} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-black dark:text-white">{action.title}</h4>
                  <p className="text-body-color text-sm">{action.description}</p>
                </div>
                <div className="text-body-color">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Section d'outils supplémentaires */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
          Outils d'administration
        </h4>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => alert('Export - Fonctionnalité en cours de développement')}
            className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary/50 transition-colors text-left"
          >
            <div className="text-primary mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-sm text-body-color">Exporter données</div>
          </button>
          
          <button
            onClick={() => alert('Maintenance - Fonctionnalité en cours de développement')}
            className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary/50 transition-colors text-left"
          >
            <div className="text-primary mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <div className="text-sm text-body-color">Maintenance</div>
          </button>
        </div>
      </div>

      {/* Modal d'ajout d'utilisateur */}
      {showAddUserModal && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <div 
            className="absolute inset-0"
            onClick={closeModal}
          />
          <div className="relative bg-white dark:bg-gray-dark rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">Nouvel utilisateur</h2>
                    <p className="text-white/80 text-sm">Créer un compte dans le système</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message de feedback */}
            {message.content && (
              <div className={`mx-6 mt-4 p-3 rounded-lg border ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                  : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
              }`}>
                <div className="flex items-center gap-2">
                  {message.type === 'success' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className="text-sm">{message.content}</span>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Informations personnelles
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        placeholder="Prénom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                </div>

                {/* Informations de contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        placeholder="email@exemple.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                          placeholder="+33 6 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Type de compte *
                        </label>
                        <select
                          name="user_type"
                          value={formData.user_type}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        >
                          <option value="client">Client / Professionnel</option>
                          <option value="coach_therapist">Coach Thérapeute</option>
                          <option value="enterprise">Entreprise</option>
                          <option value="admin">Administrateur</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        LinkedIn (optionnel)
                      </label>
                      <input
                        type="url"
                        name="linkedin_url"
                        value={formData.linkedin_url}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        placeholder="https://linkedin.com/in/votre-profil"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mot de passe *
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        placeholder="Mot de passe sécurisé"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[140px] justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Création...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Créer utilisateur
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
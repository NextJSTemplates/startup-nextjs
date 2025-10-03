/**
 * Page de gestion des données personnelles de l'utilisateur
 */

'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEdit, FaSave, FaTimes, FaLinkedin, FaSync, FaInfoCircle } from 'react-icons/fa';

export default function ProfilePage() {
  const { user, loading, updateProfile } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    linkedin_url: '',
    current_password: '',
    new_password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [importMessage, setImportMessage] = useState<{type: 'success' | 'error' | 'info', text: string} | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    } else if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        phone: user.phone || '',
        linkedin_url: user.linkedin_url || '',
        current_password: '',
        new_password: '',
        confirm_password: ''
      });
    }
  }, [user, loading, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrors({});
    setSuccessMessage('');

    try {
      // Validation côté client
      const newErrors: {[key: string]: string} = {};
      
      if (!formData.first_name.trim()) {
        newErrors.first_name = 'Le prénom est requis';
      }
      if (!formData.last_name.trim()) {
        newErrors.last_name = 'Le nom est requis';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'L\'email est requis';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Le téléphone est requis';
      }

      // Si changement de mot de passe
      if (formData.new_password) {
        if (!formData.current_password) {
          newErrors.current_password = 'Le mot de passe actuel est requis';
        }
        if (formData.new_password.length < 6) {
          newErrors.new_password = 'Le nouveau mot de passe doit contenir au moins 6 caractères';
        }
        if (formData.new_password !== formData.confirm_password) {
          newErrors.confirm_password = 'Les mots de passe ne correspondent pas';
        }
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Appel à l'API de mise à jour
      const updateData: any = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        linkedin_url: formData.linkedin_url
      };

      if (formData.new_password) {
        updateData.current_password = formData.current_password;
        updateData.new_password = formData.new_password;
      }

      const result = await updateProfile(updateData);
      
      if (result.success) {
        setSuccessMessage('Profil mis à jour avec succès !');
        setIsEditing(false);
        setFormData(prev => ({
          ...prev,
          current_password: '',
          new_password: '',
          confirm_password: ''
        }));
      } else {
        setErrors({ general: result.message });
      }
    } catch (error) {
      setErrors({ general: 'Une erreur inattendue s\'est produite' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        phone: user.phone || '',
        linkedin_url: user.linkedin_url || '',
        current_password: '',
        new_password: '',
        confirm_password: ''
      });
    }
    setErrors({});
    setSuccessMessage('');
    setIsEditing(false);
  };

  const importFromLinkedIn = async () => {
    if (!formData.linkedin_url) {
      setImportMessage({ 
        type: 'error', 
        text: 'Veuillez d\'abord renseigner votre URL LinkedIn' 
      });
      setTimeout(() => setImportMessage(null), 3000);
      return;
    }

    setIsImporting(true);
    setImportMessage({ type: 'info', text: 'Import en cours...' });

    try {
      const response = await fetch('/api/linkedin/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          linkedin_url: formData.linkedin_url 
        })
      });

      const data = await response.json();
      
      if (data.success) {
        const profile = data.profile;
        
        // Mettre à jour le formulaire avec les données LinkedIn
        setFormData(prev => ({
          ...prev,
          first_name: profile.firstName || prev.first_name,
          last_name: profile.lastName || prev.last_name,
          // Si un titre professionnel est récupéré, on pourrait l'ajouter en champ séparé plus tard
        }));
        
        setImportMessage({ 
          type: 'success', 
          text: 'Informations LinkedIn importées avec succès ! N\'oubliez pas de sauvegarder.' 
        });
        setIsEditing(true); // Activer le mode édition pour permettre la sauvegarde
      } else {
        setImportMessage({ 
          type: 'error', 
          text: data.message || 'Erreur lors de l\'import LinkedIn' 
        });
      }
    } catch (error) {
      setImportMessage({ 
        type: 'error', 
        text: 'Erreur de réseau lors de l\'import LinkedIn' 
      });
    } finally {
      setIsImporting(false);
      setTimeout(() => setImportMessage(null), 5000);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-light dark:bg-bg-color-dark min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              <span className="hidden sm:inline">Mes données personnelles</span>
              <span className="sm:hidden">Mon profil</span>
            </h1>
            <p className="text-body-color text-base sm:text-lg px-4 sm:px-0">
              <span className="hidden sm:inline">Gérez vos informations personnelles et vos paramètres de sécurité</span>
              <span className="sm:hidden">Gérez vos informations personnelles</span>
            </p>
          </div>

          {/* Messages */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}
          
          {errors.general && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errors.general}
            </div>
          )}

          {/* Carte de profil */}
          <div className="bg-white dark:bg-dark rounded-lg shadow-three dark:shadow-none p-4 sm:p-6 lg:p-8 border border-transparent dark:border-gray-700">
            {/* Informations utilisateur */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shrink-0">
                  <FaUser className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl font-semibold text-black dark:text-white truncate">
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className="text-body-color text-sm sm:text-base truncate">{user.email}</p>
                  <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mt-2 border-2 ${
                    user.user_type === 'admin' ? 'bg-white border-primary text-primary dark:bg-dark dark:border-primary dark:text-primary' :
                    user.user_type === 'enterprise' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-transparent' :
                    user.user_type === 'coach_therapist' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 border-transparent' :
                    'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-transparent'
                  }`}>
                    {user.user_type === 'admin' ? (
                      <>
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="hidden sm:inline">Administrateur Unleash Lab</span>
                        <span className="sm:hidden">Admin</span>
                      </>
                    ) : user.user_type === 'enterprise' ? (
                      <>
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="hidden sm:inline">Entreprise</span>
                        <span className="sm:hidden">Ent.</span>
                      </>
                    ) : user.user_type === 'coach_therapist' ? (
                      <>
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="hidden sm:inline">Coach Thérapeute</span>
                        <span className="sm:hidden">Coach</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="hidden sm:inline">Client</span>
                        <span className="sm:hidden">Client</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
              
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <FaEdit className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Modifier</span>
                  <span className="sm:hidden">Éditer</span>
                </button>
              )}
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Informations personnelles */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <FaUser className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Informations personnelles</span>
                  <span className="sm:hidden">Infos personnelles</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        isEditing 
                          ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800' 
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                      } text-black dark:text-white ${errors.first_name ? 'border-red-500' : ''}`}
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        isEditing 
                          ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800' 
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                      } text-black dark:text-white ${errors.last_name ? 'border-red-500' : ''}`}
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Informations de contact</span>
                  <span className="sm:hidden">Contact</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        isEditing 
                          ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800' 
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                      } text-black dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body-color mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        isEditing 
                          ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800' 
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                      } text-black dark:text-white ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="mt-4 sm:mt-6">
                  <label className="block text-xs sm:text-sm font-medium text-body-color mb-2">
                    Profil LinkedIn
                  </label>
                  <input
                    type="url"
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="https://linkedin.com/in/votre-profil"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      isEditing 
                        ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                    } text-black dark:text-white ${errors.linkedin_url ? 'border-red-500' : ''}`}
                  />
                  {errors.linkedin_url && (
                    <p className="text-red-500 text-sm mt-1">{errors.linkedin_url}</p>
                  )}
                  {!isEditing && formData.linkedin_url && (
                    <a 
                      href={formData.linkedin_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-primary hover:text-primary/80 text-xs sm:text-sm"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden sm:inline">Voir le profil LinkedIn</span>
                      <span className="sm:hidden">LinkedIn</span>
                    </a>
                  )}
                </div>

                {/* Import LinkedIn - Uniquement pour les clients */}
                {user && !['admin', 'enterprise', 'coach_therapist'].includes(user.user_type) && (
                  <div className="mt-4 sm:mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                      <FaLinkedin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                          Données professionnelles
                        </h4>
                        <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
                          Importez les détails de carrière (expérience professionnelle, formations) depuis votre profil LinkedIn.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href="/api/auth/linkedin"
                            className="inline-flex items-center gap-2 px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <FaLinkedin className="h-3 w-3" />
                            Importer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Changement de mot de passe */}
              {isEditing && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <FaLock className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Changer le mot de passe (optionnel)</span>
                    <span className="sm:hidden">Mot de passe</span>
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-body-color mb-2">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        name="current_password"
                        value={formData.current_password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-black dark:text-white ${errors.current_password ? 'border-red-500' : ''}`}
                      />
                      {errors.current_password && (
                        <p className="text-red-500 text-sm mt-1">{errors.current_password}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-body-color mb-2">
                          <span className="hidden sm:inline">Nouveau mot de passe</span>
                          <span className="sm:hidden">Nouveau mot de passe</span>
                        </label>
                        <input
                          type="password"
                          name="new_password"
                          value={formData.new_password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-black dark:text-white ${errors.new_password ? 'border-red-500' : ''}`}
                        />
                        {errors.new_password && (
                          <p className="text-red-500 text-sm mt-1">{errors.new_password}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-body-color mb-2">
                          <span className="hidden sm:inline">Confirmer le nouveau mot de passe</span>
                          <span className="sm:hidden">Confirmer</span>
                        </label>
                        <input
                          type="password"
                          name="confirm_password"
                          value={formData.confirm_password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-black dark:text-white ${errors.confirm_password ? 'border-red-500' : ''}`}
                        />
                        {errors.confirm_password && (
                          <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Boutons d'action */}
              {isEditing && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                  >
                    <FaSave className="h-3 w-3 sm:h-4 sm:w-4" />
                    {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={isSaving}
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                  >
                    <FaTimes className="h-3 w-3 sm:h-4 sm:w-4" />
                    Annuler
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
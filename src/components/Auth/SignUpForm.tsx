/**
 * Composant de formulaire d'inscription connecté au backend
 */

'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const { signUp, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    linkedin_url: '',
    user_type: 'client' as 'enterprise' | 'client' | 'coach_therapist',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await signUp(formData);
      
      if (result.success) {
        // Redirection vers le dashboard ou la page d'accueil
        router.push('/');
        router.refresh();
      } else {
        if (result.errors) {
          // Erreurs de validation spécifiques
          const fieldErrors: {[key: string]: string} = {};
          result.errors.forEach((error: any) => {
            fieldErrors[error.field] = error.message;
          });
          setErrors(fieldErrors);
        } else {
          setErrors({ general: result.message });
        }
      }
    } catch (error) {
      setErrors({ general: 'Une erreur inattendue s\'est produite' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Erreur générale */}
      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-red-600 text-sm">{errors.general}</p>
        </div>
      )}

      {/* Prénom */}
      <div className="mb-6">
        <label
          htmlFor="first_name"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Prénom *
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.first_name ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.first_name && (
          <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
        )}
      </div>

      {/* Nom de famille */}
      <div className="mb-6">
        <label
          htmlFor="last_name"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Nom de famille *
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Entrez votre nom de famille"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.last_name ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.last_name && (
          <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Entrez votre email"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.email ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Téléphone */}
      <div className="mb-6">
        <label
          htmlFor="phone"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Téléphone *
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ex: +33 1 23 45 67 89"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.phone ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* LinkedIn */}
      <div className="mb-6">
        <label
          htmlFor="linkedin_url"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Profil LinkedIn
        </label>
        <input
          type="url"
          name="linkedin_url"
          id="linkedin_url"
          value={formData.linkedin_url}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/votre-profil"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.linkedin_url ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
        />
        {errors.linkedin_url && (
          <p className="text-red-500 text-xs mt-1">{errors.linkedin_url}</p>
        )}
        <p className="text-body-color/60 text-xs mt-2">
          Optionnel - Ajoutez votre profil LinkedIn pour enrichir votre profil
        </p>
      </div>

      {/* Type d'utilisateur */}
      <div className="mb-6">
        <label
          htmlFor="user_type"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Type de compte *
        </label>
        <select
          name="user_type"
          id="user_type"
          value={formData.user_type}
          onChange={handleChange}
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.user_type ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        >
          <option value="client">� Client / Professionnel</option>
          <option value="coach_therapist">💆 Coach Thérapeute</option>
          <option value="enterprise">🏢 Entreprise</option>
        </select>
        {errors.user_type && (
          <p className="text-red-500 text-xs mt-1">{errors.user_type}</p>
        )}
        <p className="text-body-color/60 text-xs mt-2">
          Choisissez le type qui correspond à votre utilisation. <br />
          <span className="text-xs italic">Les comptes administrateurs sont créés par l'équipe Unleash Lab.</span>
        </p>
      </div>

      {/* Mot de passe */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Mot de passe *
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Entrez votre mot de passe"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.password ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
        <p className="text-body-color/60 text-xs mt-2">
          Minimum 8 caractères
        </p>
      </div>

      {/* Confirmer le mot de passe */}
      <div className="mb-8">
        <label
          htmlFor="confirmPassword"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Confirmer le mot de passe *
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmez votre mot de passe"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.confirmPassword ? 'border-red-500' : ''
          }`}
          required
          disabled={isSubmitting}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Bouton de soumission */}
      <div className="mb-6">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Création du compte...
            </>
          ) : (
            'Créer un compte'
          )}
        </button>
      </div>

      {/* Lien vers connexion */}
      <p className="text-body-color text-center text-base font-medium">
        Vous avez déjà un compte ?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
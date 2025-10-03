/**
 * Composant de formulaire de connexion connecté au backend
 */

'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const { signIn, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const result = await signIn(formData);
      
      if (result.success) {
        // Redirection vers le dashboard après connexion réussie
        router.push('/dashboard');
        router.refresh();
      } else {
        setErrors({ general: result.message });
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

      {/* Email */}
      <div className="mb-8">
        <label
          htmlFor="email"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Votre Email
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

      {/* Mot de passe */}
      <div className="mb-8">
        <label
          htmlFor="password"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Votre Mot de passe
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
      </div>

      {/* Options */}
      <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0">
          <label
            htmlFor="keepSignedIn"
            className="text-body-color flex cursor-pointer items-center text-sm font-medium select-none"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="keepSignedIn"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="sr-only"
                disabled={isSubmitting}
              />
              <div className={`box border-body-color/20 mr-4 flex h-5 w-5 items-center justify-center rounded-sm border dark:border-white/10 ${
                keepSignedIn ? 'bg-primary border-primary' : ''
              }`}>
                <span className={keepSignedIn ? 'opacity-100' : 'opacity-0'}>
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
              </div>
            </div>
            Rester connecté
          </label>
        </div>
        <div>
          <Link
            href="/forgot-password"
            className="text-primary text-sm font-medium hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </div>
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
              Connexion...
            </>
          ) : (
            'Se connecter'
          )}
        </button>
      </div>
    </form>
  );
}
/**
 * Validation Schemas - Unleash Lab
 * Schémas de validation avec Zod pour tous les formulaires
 */

import { z } from 'zod';

// Schema pour le formulaire de contact
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le prénom ne peut contenir que des lettres'),
  
  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres'),
  
  email: z
    .string()
    .email('Format d\'email invalide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  
  phone: z
    .string()
    .optional()
    .or(z.string().regex(
      /^(\+33|0)[1-9](\d{8})$/,
      'Format de téléphone français invalide'
    )),
  
  company: z
    .string()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères'),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

// Schema pour l'inscription
export const signupFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Le nom complet doit contenir au moins 2 caractères')
    .max(100, 'Le nom complet ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres'),
  
  email: z
    .string()
    .email('Format d\'email invalide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .max(128, 'Le mot de passe ne peut pas dépasser 128 caractères')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Le mot de passe doit contenir au moins: 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial'
    ),
  
  confirmPassword: z.string(),
  
  acceptTerms: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions d\'utilisation'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
});

// Schema pour la connexion
export const signinFormSchema = z.object({
  email: z
    .string()
    .email('Format d\'email invalide')
    .min(5, 'L\'email doit contenir au moins 5 caractères'),
  
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
  
  rememberMe: z.boolean().optional(),
});

// Schema pour le formulaire de newsletter
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Format d\'email invalide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
});

// Types TypeScript générés à partir des schemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SignupFormData = z.infer<typeof signupFormSchema>;
export type SigninFormData = z.infer<typeof signinFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;

// Messages d'erreur personnalisés par langue
export const getErrorMessages = (locale: 'fr' | 'en') => {
  const messages = {
    fr: {
      required: 'Ce champ est obligatoire',
      email: 'Format d\'email invalide',
      minLength: (min: number) => `Minimum ${min} caractères requis`,
      maxLength: (max: number) => `Maximum ${max} caractères autorisés`,
      passwordMismatch: 'Les mots de passe ne correspondent pas',
      acceptTerms: 'Vous devez accepter les conditions',
      phoneFormat: 'Format de téléphone invalide',
      nameFormat: 'Seules les lettres sont autorisées',
    },
    en: {
      required: 'This field is required',
      email: 'Invalid email format',
      minLength: (min: number) => `Minimum ${min} characters required`,
      maxLength: (max: number) => `Maximum ${max} characters allowed`,
      passwordMismatch: 'Passwords do not match',
      acceptTerms: 'You must accept the terms',
      phoneFormat: 'Invalid phone format',
      nameFormat: 'Only letters are allowed',
    }
  };
  
  return messages[locale];
};

export default {
  contactFormSchema,
  signupFormSchema,
  signinFormSchema,
  newsletterSchema,
  getErrorMessages,
};
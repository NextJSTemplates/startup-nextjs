/**
 * Middleware Next.js pour la protection des routes
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// Routes qui nécessitent une authentification
const PROTECTED_ROUTES = ['/dashboard', '/profile', '/settings'];

// Routes d'authentification (redirection si déjà connecté)
const AUTH_ROUTES = ['/signin', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Récupérer le token d'authentification
  const token = request.cookies.get('auth-token')?.value;
  
  let isAuthenticated = false;
  let user = null;
  
  // Vérifier le token
  if (token) {
    try {
      const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
      user = jwt.verify(token, jwtSecret);
      isAuthenticated = true;
    } catch (error) {
      // Token invalide ou expiré
      isAuthenticated = false;
    }
  }
  
  // Vérifier si la route actuelle nécessite une authentification
  const isProtectedRoute = PROTECTED_ROUTES.some(route => 
    pathname.startsWith(route)
  );
  
  // Vérifier si c'est une route d'authentification
  const isAuthRoute = AUTH_ROUTES.some(route => 
    pathname.startsWith(route)
  );
  
  // Rediriger les utilisateurs non authentifiés vers la page de connexion
  if (isProtectedRoute && !isAuthenticated) {
    const signInUrl = new URL('/signin', request.url);
    signInUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(signInUrl);
  }
  
  // Rediriger les utilisateurs authentifiés loin des pages d'authentification
  // Seulement pour les requêtes GET (pas les POST de connexion)
  if (isAuthRoute && isAuthenticated && request.method === 'GET') {
    const redirectUrl = request.nextUrl.searchParams.get('redirect') || '/dashboard';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  
  // Ajouter les informations utilisateur aux headers pour les composants serveur
  const response = NextResponse.next();
  if (user) {
    response.headers.set('x-user-id', (user as any).userId);
    response.headers.set('x-user-email', (user as any).email);
  }
  
  return response;
}

export const config = {
  matcher: [
    // Matcher pour toutes les routes sauf les API, assets statiques, etc.
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|sw.js).*)',
  ],
};
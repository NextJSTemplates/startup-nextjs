/**
 * Middleware Next.js - Version production simplifiée
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Pour la version production, pas de logique d'authentification nécessaire
  // Le middleware peut être utilisé pour des redirections ou analytics futurs
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Matcher pour les routes principales
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json).*)',
  ],
};
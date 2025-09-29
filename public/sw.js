/**
 * Service Worker - Unleash Lab
 * Cache strategy et fonctionnalités offline
 */

const CACHE_NAME = 'unleash-lab-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

// Assets à mettre en cache immédiatement
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/offline',
  '/manifest.json',
  '/images/logo/logo.svg',
  '/images/logo/favicon.png',
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker: Failed to cache static assets', err);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              // Supprimer les anciens caches
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE &&
                     cacheName.startsWith('unleash-lab-') ||
                     cacheName.startsWith('static-cache-') ||
                     cacheName.startsWith('dynamic-cache-');
            })
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Interception des requêtes (Fetch Strategy)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-HTTP
  if (!request.url.startsWith('http')) return;

  // Ignorer les requêtes vers les APIs externes
  if (url.origin !== location.origin) return;

  event.respondWith(handleFetch(request));
});

// Stratégie de gestion des requêtes
async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // 1. Cache First pour les assets statiques
    if (isStaticAsset(url.pathname)) {
      return await cacheFirst(request);
    }
    
    // 2. Network First pour les pages HTML
    if (isHTMLRequest(request)) {
      return await networkFirst(request);
    }
    
    // 3. Stale While Revalidate pour les images et fonts
    if (isAssetRequest(url.pathname)) {
      return await staleWhileRevalidate(request);
    }
    
    // 4. Network Only pour les APIs
    if (isAPIRequest(url.pathname)) {
      return await networkOnly(request);
    }
    
    // 5. Stratégie par défaut: Network First
    return await networkFirst(request);
    
  } catch (error) {
    console.error('Service Worker: Fetch failed', error);
    return await handleFallback(request);
  }
}

// Cache First Strategy
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    throw error;
  }
}

// Network First Strategy  
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(error => {
      console.log('Service Worker: Network failed for', request.url);
      throw error;
    });
  
  return cached || fetchPromise;
}

// Network Only Strategy
async function networkOnly(request) {
  return fetch(request);
}

// Gestion des fallbacks
async function handleFallback(request) {
  const url = new URL(request.url);
  
  // Fallback pour les pages HTML
  if (isHTMLRequest(request)) {
    const cache = await caches.open(STATIC_CACHE);
    const offlinePage = await cache.match('/offline');
    if (offlinePage) {
      return offlinePage;
    }
  }
  
  // Fallback pour les images
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    const cache = await caches.open(STATIC_CACHE);
    const fallbackImage = await cache.match('/images/placeholder.jpg');
    if (fallbackImage) {
      return fallbackImage;
    }
  }
  
  // Response générique d'erreur
  return new Response(
    JSON.stringify({ 
      error: 'Network unavailable', 
      message: 'Cette ressource n\'est pas disponible hors ligne' 
    }),
    { 
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Helpers pour identifier les types de requêtes
function isStaticAsset(pathname) {
  return pathname.match(/\.(css|js|woff2?|ttf|otf)$/i) ||
         pathname.startsWith('/images/logo/') ||
         pathname === '/manifest.json';
}

function isHTMLRequest(request) {
  const accept = request.headers.get('Accept') || '';
  return accept.includes('text/html');
}

function isAssetRequest(pathname) {
  return pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i) ||
         pathname.startsWith('/images/') ||
         pathname.startsWith('/videos/');
}

function isAPIRequest(pathname) {
  return pathname.startsWith('/api/');
}

// Gestion des messages du client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Gestion de la synchronisation en arrière-plan
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Service Worker: Background sync triggered');
  // Ici, on peut synchroniser les données en arrière-plan
  // Par exemple, envoyer des formulaires en attente
}

// Notification de mise à jour disponible
self.addEventListener('controllerchange', () => {
  console.log('Service Worker: New version available');
  // Notifier le client qu'une nouvelle version est disponible
});

console.log('Service Worker: Loaded');
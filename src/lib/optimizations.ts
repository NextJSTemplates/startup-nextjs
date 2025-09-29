/**
 * Optimizations Utils - Unleash Lab
 * Utilitaires pour l'optimisation des performances et du SEO
 */

import React from 'react';

// Types pour l'optimisation des images
export interface OptimizedImageConfig {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
  sizes?: string;
  fallback?: string;
  className?: string;
}

// Configuration pour l'optimisation des images
export const createOptimizedImageConfig = ({
  src,
  alt,
  priority = false,
  loading = 'lazy',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fallback = '/images/placeholder.jpg',
  className,
}: OptimizedImageConfig) => ({
  src,
  alt,
  priority,
  loading,
  quality,
  sizes,
  fallback,
  className,
});

// Lazy Loading Hook avec Intersection Observer
export const useLazyLoading = (options?: {
  threshold?: number;
  rootMargin?: string;
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options?.threshold, options?.rootMargin, hasLoaded]);

  return { isVisible, ref, hasLoaded };
};

// Hook pour précharger les ressources critiques
export const useResourcePreload = () => {
  const preloadResource = React.useCallback((href: string, as: string, type?: string) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    }
  }, []);

  const preloadImage = React.useCallback((src: string) => {
    preloadResource(src, 'image');
  }, [preloadResource]);

  const preloadFont = React.useCallback((src: string, type = 'font/woff2') => {
    preloadResource(src, 'font', type);
  }, [preloadResource]);

  return {
    preloadResource,
    preloadImage,
    preloadFont,
  };
};

// Compression et optimisation des données
export const optimizeData = {
  // Compression JSON
  compressJSON: (data: any): string => {
    return JSON.stringify(data, null, 0);
  },

  // Décompression sécurisée
  parseJSON: <T = any>(jsonString: string): T | null => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  },

  // Debounce pour optimiser les appels
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle pour limiter les appels
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Memoization simple
  memoize: <T extends (...args: any[]) => any>(func: T): T => {
    const cache = new Map();
    return ((...args: Parameters<T>): ReturnType<T> => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },
};

// Optimisations CSS-in-JS
export const cssOptimizations = {
  // Variables CSS dynamiques
  cssVar: (name: string, value: string) => ({ [`--${name}`]: value }),

  // Media queries optimisées
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Classes utilitaires communes
  commonClasses: {
    container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    flexCenter: 'flex items-center justify-center',
    flexBetween: 'flex items-center justify-between',
    gridCenter: 'grid place-items-center',
    absoluteCenter: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    visuallyHidden: 'sr-only',
    focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  },

  // Animations optimisées
  animations: {
    fadeIn: 'animate-in fade-in duration-500',
    fadeOut: 'animate-out fade-out duration-300',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
    slideDown: 'animate-in slide-in-from-top-4 duration-500',
    scaleIn: 'animate-in zoom-in-95 duration-300',
    scaleOut: 'animate-out zoom-out-95 duration-200',
  },
};

// Hook pour optimiser les re-renders
export const useOptimizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  return React.useCallback(callback, deps);
};

export const useOptimizedMemo = <T>(
  factory: () => T,
  deps: React.DependencyList
): T => {
  return React.useMemo(factory, deps);
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      
      // Vérifier les mises à jour
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nouvelle version disponible
              if (confirm('Une nouvelle version est disponible. Recharger la page ?')) {
                window.location.reload();
              }
            }
          });
        }
      });
      
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Cache strategies
export const cacheStrategies = {
  // Cache First (pour les assets statiques)
  cacheFirst: async (request: Request): Promise<Response> => {
    const cache = await caches.open('static-cache-v1');
    const cached = await cache.match(request);
    if (cached) return cached;
    
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  },

  // Network First (pour les données dynamiques)
  networkFirst: async (request: Request): Promise<Response> => {
    const cache = await caches.open('dynamic-cache-v1');
    try {
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch {
      const cached = await cache.match(request);
      if (cached) return cached;
      throw new Error('Network and cache both failed');
    }
  },

  // Stale While Revalidate (pour un équilibre performance/fraîcheur)
  staleWhileRevalidate: async (request: Request): Promise<Response> => {
    const cache = await caches.open('swr-cache-v1');
    const cached = await cache.match(request);
    
    const fetchPromise = fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    });

    return cached || fetchPromise;
  },
};

export default {
  createOptimizedImageConfig,
  useLazyLoading,
  useResourcePreload,
  optimizeData,
  cssOptimizations,
  useOptimizedCallback,
  useOptimizedMemo,
  registerServiceWorker,
  cacheStrategies,
};
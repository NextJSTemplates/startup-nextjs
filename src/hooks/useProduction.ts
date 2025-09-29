/**
 * Production Hooks - Unleash Lab  
 * Hooks optimisés pour la production
 */

'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ANALYTICS_EVENTS } from '@/lib/analytics';

// Hook pour détecter si l'utilisateur est en ligne
export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    // Initialiser avec le statut actuel
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      ANALYTICS_EVENTS.PAGE_VIEW('back_online');
    };

    const handleOffline = () => {
      setIsOnline(false);
      ANALYTICS_EVENTS.PAGE_VIEW('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

// Hook pour la détection de scroll avec throttling
export const useScrollPosition = (throttleMs: number = 100) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollInfo = useCallback(() => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;
    
    // Direction du scroll
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up');
    }
    
    // Position actuelle
    setScrollPosition({ x: currentScrollX, y: currentScrollY });
    
    // Progression (pourcentage de la page scrollée)
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalScrollHeight > 0 ? (currentScrollY / totalScrollHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, []);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollInfo);
      ticking.current = true;
    }
  }, [updateScrollInfo]);

  useEffect(() => {
    const throttledScrollHandler = throttle(requestTick, throttleMs);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initialiser avec la position actuelle
    updateScrollInfo();

    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [requestTick, throttleMs, updateScrollInfo]);

  return {
    scrollPosition,
    scrollDirection,
    scrollProgress,
    isScrollingDown: scrollDirection === 'down',
    isScrollingUp: scrollDirection === 'up',
  };
};

// Hook pour la détection des éléments visibles (Intersection Observer)
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
        
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, hasBeenVisible, options]);

  return {
    elementRef,
    isIntersecting,
    intersectionRatio,
    hasBeenVisible,
  };
};

// Hook pour la gestion du localStorage avec SSR
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Initialiser depuis localStorage côté client
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};

// Hook pour debounce
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Hook pour la détection de taille d'écran
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

// Hook pour la gestion des modales avec focus trap
export const useModal = (initialOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const modalRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    
    // Remettre le focus sur l'élément précédent
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, []);

  // Gestion des touches (Escape pour fermer)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return {
    isOpen,
    open,
    close,
    toggle: () => isOpen ? close() : open(),
    modalRef,
  };
};

// Hook pour les animations d'apparition
export const useAnimateOnScroll = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Une seule animation
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isVisible };
};

// Hook pour la copie dans le presse-papiers
export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset après 2 secondes
      setTimeout(() => setCopied(false), 2000);
      
      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      setCopied(false);
      return false;
    }
  }, []);

  return { copied, copy };
};

// Hook pour la gestion d'état complexe avec reducer
export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: Record<keyof T, (value: any) => string | null>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateField = useCallback((name: keyof T, value: any) => {
    const rule = validationRules[name];
    return rule ? rule(value) : null;
  }, [validationRules]);

  const validateAllFields = useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    for (const [name, value] of Object.entries(values)) {
      const error = validateField(name as keyof T, value);
      if (error) {
        newErrors[name as keyof T] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel si le champ a été touché
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error || undefined }));
    }
  }, [touched, validateField]);

  const setFieldTouched = useCallback((name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Valider le champ quand il est touché
    const error = validateField(name, values[name]);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [values, validateField]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const isValid = useMemo(() => {
    return Object.keys(errors).length === 0 && Object.keys(touched).length > 0;
  }, [errors, touched]);

  return {
    values,
    errors,
    touched,
    isValid,
    setValue,
    setFieldTouched,
    validateAllFields,
    reset,
  };
};

// Utilitaire throttle
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default {
  useOnlineStatus,
  useScrollPosition,
  useIntersectionObserver,
  useLocalStorage,
  useDebounce,
  useScreenSize,
  useModal,
  useAnimateOnScroll,
  useClipboard,
  useFormValidation,
};
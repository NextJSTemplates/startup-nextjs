

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  gtagConfig: {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 60 * 60 * 24 * 30, // 30 jours
    custom_map: {
      custom_parameter_1: 'custom_dimension_1',
    },
  },
};

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔥 ANALYTICS EVENT:', {
      action: event.action,
      category: event.category,
      label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
  
  if (typeof window !== 'undefined' && window.gtag && process.env.NODE_ENV === 'production') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};


export const ANALYTICS_EVENTS = {
  PAGE_VIEW: (page: string) => trackEvent({
    action: 'page_view',
    category: 'navigation',
    label: page,
  }),
  
  SCROLL_DEPTH: (depth: number) => trackEvent({
    action: 'scroll',
    category: 'engagement',
    label: 'scroll_depth',
    value: depth,
  }),
  
  FORM_START: (formName: string) => trackEvent({
    action: 'form_start',
    category: 'form',
    label: formName,
  }),
  
  FORM_SUBMIT: (formName: string) => trackEvent({
    action: 'form_submit',
    category: 'form',
    label: formName,
  }),
  
  FORM_ERROR: (formName: string, error: string) => trackEvent({
    action: 'form_error',
    category: 'form',
    label: formName,
    custom_parameters: { error_type: error },
  }),
  
  CLICK_CTA: (ctaName: string, location: string) => trackEvent({
    action: 'click',
    category: 'cta',
    label: ctaName,
    custom_parameters: { location },
  }),
  
  PERFORMANCE_METRIC: (metric: string, value: number) => trackEvent({
    action: 'performance',
    category: 'metrics',
    label: metric,
    value: Math.round(value),
  }),
};

export const usePerformanceTracking = () => {
  const trackWebVitals = (metric: any) => {
    ANALYTICS_EVENTS.PERFORMANCE_METRIC(metric.name, metric.value);
  };

  const trackPageLoad = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const dcl = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
        ANALYTICS_EVENTS.PERFORMANCE_METRIC('dom_content_loaded', dcl);
        
        const loadComplete = perfData.loadEventEnd - perfData.loadEventStart;
        ANALYTICS_EVENTS.PERFORMANCE_METRIC('load_complete', loadComplete);
        
        const fcp = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcp) {
          ANALYTICS_EVENTS.PERFORMANCE_METRIC('first_contentful_paint', fcp.startTime);
        }
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          ANALYTICS_EVENTS.PERFORMANCE_METRIC('largest_contentful_paint', lastEntry.startTime);
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
        }
      }
    }
  };

  return {
    trackWebVitals,
    trackPageLoad,
  };
};

export const getGoogleAnalyticsScript = () => {
  if (!ANALYTICS_CONFIG.googleAnalyticsId) {
    return null;
  }

  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`,
    config: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ANALYTICS_CONFIG.googleAnalyticsId}', ${JSON.stringify(ANALYTICS_CONFIG.gtagConfig)});
    `,
  };
};

export const setupErrorTracking = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      trackEvent({
        action: 'javascript_error',
        category: 'error',
        label: event.message,
        custom_parameters: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      trackEvent({
        action: 'unhandled_promise_rejection',
        category: 'error',
        label: event.reason?.message || 'Unknown promise rejection',
        custom_parameters: {
          reason: event.reason,
        },
      });
    });
  }
};

export const useScrollTracking = () => {
  const trackScrollDepth = () => {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const triggered = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        thresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !triggered.has(threshold)) {
            triggered.add(threshold);
            ANALYTICS_EVENTS.SCROLL_DEPTH(threshold);
          }
        });
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 250);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', throttledHandleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', throttledHandleScroll);
      };
    }
  };

  return { trackScrollDepth };
};

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const analyticsUtils = {
  ANALYTICS_CONFIG,
  ANALYTICS_EVENTS,
  getGoogleAnalyticsScript,
  trackEvent,
  usePerformanceTracking,
  useScrollTracking,
  setupErrorTracking,
};

export default analyticsUtils;
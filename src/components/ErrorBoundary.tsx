'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Error Boundary Caught:', error, errorInfo);
    
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo,
    });
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };
    
    console.log('📊 Error logged:', errorReport);
    // fetch('/api/log-error', { method: 'POST', body: JSON.stringify(errorReport) });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Composant d'erreur par défaut
const ErrorFallback = ({ error }: { error?: Error }) => {
  const { messages } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Une erreur s&apos;est produite
          </h2>
          
                  <p className="text-gray-600 dark:text-gray-300">
          Une erreur inattendue s&apos;est produite. Veuillez réessayer ou contacter le support si le problème persiste.
        </p>
          
          {process.env.NODE_ENV === 'development' && error && (
            <details className="text-left bg-gray-100 dark:bg-gray-700 rounded p-4 mb-4">
              <summary className="cursor-pointer font-medium text-red-600 dark:text-red-400">
                Détails de l&apos;erreur (dev only)
              </summary>
              <pre className="mt-2 text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Actualiser la page
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

// Hook pour gérer les erreurs dans les composants fonctionnels
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);
  
  const resetError = React.useCallback(() => {
    setError(null);
  }, []);
  
  const handleError = React.useCallback((error: Error) => {
    console.error('🚨 Error handled:', error);
    setError(error);
  }, []);
  
  // Reset error when component unmounts
  React.useEffect(() => {
    return () => setError(null);
  }, []);
  
  return { error, handleError, resetError };
};

// Hook pour gérer les erreurs async
export const useAsyncError = () => {
  const { handleError } = useErrorHandler();
  
  return React.useCallback((asyncFn: () => Promise<any>) => {
    return asyncFn().catch(handleError);
  }, [handleError]);
};

// Wrapper HOC pour ajouter error boundary à n'importe quel composant
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundaryClass fallback={fallback}>
      <Component {...props} />
    </ErrorBoundaryClass>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

// Composant principal à utiliser
export const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  return (
    <ErrorBoundaryClass fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  );
};

export default ErrorBoundary;
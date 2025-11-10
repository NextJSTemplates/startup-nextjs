/**
 * Next.js Configuration - Unleash Lab
 * Configuration optimisée pour les performances et le SEO
 */

const nextConfig = {
  // Configuration expérimentale pour Next.js 15
  experimental: {
    // Turbopack en développement (plus rapide que Webpack)
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
    
    // Optimisations de performance
    optimizePackageImports: [
      'react-icons',
      'lucide-react',
      '@headlessui/react',
    ],
    
    // Support des Server Actions
    serverActions: true,
    
    // Optimisation des images
    optimizeServerReact: true,
  },

  // Configuration des images
  images: {
    // Formats d'images optimisés
    formats: ['image/avif', 'image/webp'],
    
    // Qualité par défaut
    quality: 85,
    
    // Tailles d'images prédéfinies
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Domaines autorisés pour les images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    
    // Cache des images optimisées
    minimumCacheTTL: 31536000, // 1 an
    
    // Lazy loading par défaut
    loading: 'lazy',
  },

  // Configuration du bundle
  webpack: (config, { dev, isServer, webpack }) => {
    // Optimisation des SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimisations de production
    if (!dev && !isServer) {
      // Analyse du bundle en production
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      );
    }

    // Support des web workers
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      use: { loader: 'worker-loader' },
    });

    return config;
  },

  // Configuration du compilateur
  compiler: {
    // Suppression des console.log en production
    removeConsole: process.env.NODE_ENV === 'production',
    
    // Support de styled-components (si utilisé)
    styledComponents: true,
    
    // Optimisation des React components
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Configuration des headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Sécurité
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          
          // Performance
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Headers spécifiques aux assets statiques
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Headers pour les fonts
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirections
  async redirects() {
    return [
      // Exemple de redirection
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },

  // Rewrites (pour API ou routing avancé)
  async rewrites() {
    return [
      // Exemple de rewrite
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ];
  },

  // Configuration de la compilation
  productionBrowserSourceMaps: false,
  
  // Optimisations de build
  swcMinify: true,
  
  // Support des trailing slashes
  trailingSlash: false,
  
  // Configuration des pages statiques
  output: 'standalone',
  
  // Configuration pour le déploiement
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Configuration ESLint
  eslint: {
    // Ignorer les erreurs ESLint en build (à ajuster selon les besoins)
    ignoreDuringBuilds: true,
  },
  
  // Configuration TypeScript
  typescript: {
    // Ignorer les erreurs TypeScript en build (à ajuster selon les besoins)
    ignoreBuildErrors: false,
  },

  // Variables d'environnement publiques
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version || '1.0.0',
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },

  // Configuration du serveur de développement
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    },
  }),
};

export default nextConfig;
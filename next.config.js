/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  outputFileTracingRoot: __dirname,
  
  // Configuration pour export statique (optionnel pour Infomaniak)
  trailingSlash: true,
  
  // Pour déploiement sur sous-dossier si nécessaire
  // basePath: '/mon-site',
  
  // Optimisations pour production
  poweredByHeader: false,
  generateEtags: false,
  
  // Configuration pour Infomaniak hosting
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;

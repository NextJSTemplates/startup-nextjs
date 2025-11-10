import type { Metadata, Viewport } from 'next';

const SITE_CONFIG = {
  name: 'Unleash Lab',
  title: 'Unleash Lab - Expert en Business Analysis',
  description: 'Nous transformons la complexité en clarté et libérons le potentiel de votre entreprise grâce à une expertise unique en Business Analysis et innovation durable.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://unleash-lab.tech',
  ogImage: '/images/og-image.jpg',
  creator: 'Unleash Lab',
  keywords: [
    'Business Analysis',
    'Conseil IT',
    'Innovation',
    'Transformation digitale',
    'Expertise métier',
    'Accompagnement entreprise'
  ],
  authors: [
    {
      name: 'Unleash Lab',
      url: 'https://unleash-lab.tech',
    },
  ],
  social: {
    linkedin: 'https://linkedin.com/company/unleash-lab',
    twitter: 'https://twitter.com/unleashlab',
  }
};


export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: SITE_CONFIG.authors,
  creator: SITE_CONFIG.creator,
  
  openGraph: {
  type: 'website',
  locale: 'fr_FR',
  alternateLocale: ['en_US'],
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@unleashlab',
  },
  
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  
  manifest: '/manifest.json',
  
  // Icône vide transparente
  icons: {
    icon: '/favicon.svg',
  },
  
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      me: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.twitter],
    },
  },
  

    alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  
  formatDetection: {
    telephone: false,
  },
  
  category: 'business',
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo/logo.svg`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Unleash Lab Team',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressLocality: 'Suisse',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+41-78-936-5736',
        contactType: 'customer service',
        availableLanguage: ['French', 'English'],
      },
    ],
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Switzerland, France, Europe',
    },
  areaServed: ['CH', 'FR', 'EU'],
    knowsAbout: SITE_CONFIG.keywords,
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Analysis Consulting',
          description: 'Expert consulting in business analysis and digital transformation',
        },
      },
    ],
  };
};

export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo/logo.svg`,
      },
    },
  inLanguage: ['fr-FR', 'en-US'],
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url?: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${SITE_CONFIG.url}${item.url}` }),
    })),
  };
};

export const generatePageMetadata = (
  page: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    noIndex?: boolean;
  }
): Metadata => {
  return {
    title: page.title,
    description: page.description,
    keywords: [...SITE_CONFIG.keywords, ...(page.keywords || [])],
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_CONFIG.url}${page.path}`,
      images: [SITE_CONFIG.ogImage],
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}${page.path}`,
    },
    ...(page.noIndex && { robots: { index: false, follow: false } }),
  };
};

export { SITE_CONFIG };
const seoUtils = {
  defaultMetadata,
  defaultViewport,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generatePageMetadata,
  SITE_CONFIG,
};

export default seoUtils;
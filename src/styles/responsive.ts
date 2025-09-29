/**
 * Responsive Design System - Unleash Lab
 * Breakpoints et variables de design standardisés
 */

export const BREAKPOINTS = {
  xs: '320px',   // Extra small devices (phones)
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px' // 2x Extra large devices (large desktops)
} as const;

export const CONTAINER_PADDING = {
  mobile: 'px-4',
  tablet: 'sm:px-6',
  desktop: 'lg:px-8',
  wide: 'xl:px-12'
} as const;

export const GRID_GAPS = {
  tight: 'gap-4',
  normal: 'gap-6',
  loose: 'gap-8',
  extraLoose: 'gap-12'
} as const;

export const RESPONSIVE_GRID = {
  // Features grid
  features: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4',
  
  // Blog grid
  blog: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  
  // Testimonials grid
  testimonials: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  
  // Contact form
  contactForm: 'grid grid-cols-1 md:grid-cols-2',
  
  // Hero layout
  hero: 'flex flex-col lg:flex-row',
  
  // About sections
  about: 'flex flex-col lg:flex-row items-center'
} as const;

export const SPACING = {
  section: 'py-12 sm:py-16 md:py-20 lg:py-28',
  container: 'px-4 sm:px-6 lg:px-8 xl:px-12',
  element: 'mb-6 sm:mb-8 lg:mb-12',
  text: 'mb-4 sm:mb-6'
} as const;

export const TYPOGRAPHY = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-xl sm:text-2xl lg:text-3xl font-bold leading-tight',
  h4: 'text-lg sm:text-xl lg:text-2xl font-semibold',
  body: 'text-base sm:text-lg leading-relaxed',
  caption: 'text-sm sm:text-base'
} as const;

export const BUTTONS = {
  primary: 'inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
  secondary: 'inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition-all duration-300',
  minWidth: 'min-w-[180px] sm:min-w-[200px]'
} as const;

// Utilitaires pour les composants
export const getResponsiveClasses = (component: keyof typeof RESPONSIVE_GRID) => {
  return RESPONSIVE_GRID[component];
};

export const getContainerClasses = () => {
  return `${CONTAINER_PADDING.mobile} ${CONTAINER_PADDING.tablet} ${CONTAINER_PADDING.desktop} ${CONTAINER_PADDING.wide}`;
};

export const getSectionSpacing = () => {
  return SPACING.section;
};

export default {
  BREAKPOINTS,
  CONTAINER_PADDING,
  GRID_GAPS,
  RESPONSIVE_GRID,
  SPACING,
  TYPOGRAPHY,
  BUTTONS,
  getResponsiveClasses,
  getContainerClasses,
  getSectionSpacing
};
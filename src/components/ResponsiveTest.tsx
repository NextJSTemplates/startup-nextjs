"use client";

import { useState, useEffect } from 'react';
import { BREAKPOINTS, TYPOGRAPHY, SPACING, BUTTONS } from '@/styles/responsive';

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = useState('Unknown');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width >= 1536) setScreenSize('2xl - Extra Large Desktop');
      else if (width >= 1280) setScreenSize('xl - Large Desktop');
      else if (width >= 1024) setScreenSize('lg - Laptop');
      else if (width >= 768) setScreenSize('md - Tablet');
      else if (width >= 640) setScreenSize('sm - Large Phone');
      else setScreenSize('xs - Small Phone');
    };

    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);
    return () => window.removeEventListener('resize', updateScreenInfo);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className={`${TYPOGRAPHY.h1} text-black dark:text-white mb-4`}>
          🧪 Test Responsive Design
        </h1>
        <div className="inline-block bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
          <p className="text-lg font-semibold text-primary">
            Écran actuel: {screenSize}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Largeur: {windowWidth}px
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
        {Object.entries(BREAKPOINTS).map(([key, value]) => (
          <div 
            key={key}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
          >
            <div className="text-2xl font-bold text-primary mb-2">{key}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className={`${TYPOGRAPHY.h2} text-black dark:text-white mb-6`}>
          Typography Test
        </h2>
        
        <div className="space-y-4">
          <h1 className={`${TYPOGRAPHY.h1} text-primary`}>H1 - Titre Principal</h1>
          <h2 className={`${TYPOGRAPHY.h2} text-gray-800 dark:text-gray-200`}>H2 - Sous-titre</h2>
          <h3 className={`${TYPOGRAPHY.h3} text-gray-700 dark:text-gray-300`}>H3 - Section</h3>
          <h4 className={`${TYPOGRAPHY.h4} text-gray-600 dark:text-gray-400`}>H4 - Sous-section</h4>
          <p className={`${TYPOGRAPHY.body} text-gray-600 dark:text-gray-400`}>
            Paragraphe - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={`${TYPOGRAPHY.caption} text-gray-500 dark:text-gray-500`}>
            Caption - Texte de légende ou d&apos;information secondaire.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className={`${TYPOGRAPHY.h2} text-black dark:text-white mb-6`}>
          Buttons Test
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className={`${BUTTONS.primary} ${BUTTONS.minWidth} bg-primary text-white hover:bg-primary/90`}>
            Button Primary
          </button>
          <button className={`${BUTTONS.secondary} ${BUTTONS.minWidth} border-primary text-primary hover:bg-primary hover:text-white`}>
            Button Secondary
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className={`${TYPOGRAPHY.h2} text-black dark:text-white mb-6`}>
          Features Grid Test
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'].map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                {feature}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className={`${TYPOGRAPHY.h2} text-black dark:text-white mb-6`}>
          Contact Form Test
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nom
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prénom
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Votre prénom"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          ✅ Responsive Design Test - Unleash Lab 2025
        </p>
      </div>
    </div>
  );
};

export default ResponsiveTest;
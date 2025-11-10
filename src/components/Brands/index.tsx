"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Brands = () => {
  const { messages } = useLanguage();
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Créer 2 groupes fixes dans l'ordre demandé
  const group1 = brandsData.filter(brand => [1, 2, 3, 4].includes(brand.id)); // Globaz, Procimmo, TCS, UCI
  const group2 = brandsData.filter(brand => [5, 6, 7, 8].includes(brand.id)); // Roche, Jaeger, Mirabaud, UNHCR
  const groups = [group1, group2];

  // Auto-défilement entre les 2 groupes
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentGroup(prev => {
        const next = prev === 0 ? 1 : 0;
        return next;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying]);

  // Force un premier changement après 3 secondes au montage
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGroup(1);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const currentBrands = groups[currentGroup] || [];
  // Optimisation par logo pour un meilleur rendu
  const getLogoConfig = (brandId: number) => {
    switch (brandId) {
      case 1: // Globaz
        return "h-44 max-w-360 object-contain";
      case 2: // Procimmo
        return "h-44 max-w-360 object-contain";
      case 3: // TCS
        return "h-44 max-w-360 object-contain";
      case 4: // UCI
        return "h-44 max-w-360 object-contain";
      case 5: // Roche
        return "h-44 max-w-360 object-contain";
      case 6: // Jaeger-LeCoultre
        return "h-40 max-w-400 object-contain";
      case 7: // Mirabaud
        return "h-44 max-w-360 object-contain";
      case 8: // UNHCR
        return "h-44 max-w-360 object-contain";
      default:
        return "h-44 max-w-360 object-contain";
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-black">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[570px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {messages.brandsSection.title}
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {messages.brandsSection.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div 
              className="overflow-hidden rounded-xl bg-white border border-gray-200/30 dark:bg-zinc-800 dark:border-zinc-700/50 shadow-[0_0_15px_rgba(0,0,0,0.06),0_5px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_0_20px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
                {currentBrands.map((brand) => {
                  const logoClasses = getLogoConfig(brand.id);
                  const logoSrc = brand.image;
                  
                  return (
                    <div 
                      key={`group-${currentGroup}-brand-${brand.id}`} 
                      className="group relative flex h-56 items-center justify-center border-r border-b border-gray-100 p-1 transition-all duration-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-zinc-700 last:border-r-0 md:last:border-r [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r [&:nth-child(4n)]:md:border-r-0 [&:nth-last-child(-n+4)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b [&:nth-last-child(-n+2)]:border-b-0"
                    >
                      {/* Logo Image - caché en mode sombre */}
                      <Image 
                        src={logoSrc} 
                        alt={brand.name} 
                        width={360}
                        height={180}
                        className={`${logoClasses} opacity-80 transition-all duration-500 group-hover:opacity-50 group-hover:scale-105 group-hover:blur-sm dark:hidden relative z-10`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      
                      {/* Contenu texte pour mode sombre */}
                      <div className="hidden dark:flex flex-col items-center justify-center p-4 text-center h-full">
                        <h3 className="mb-3 text-xl font-bold text-white">
                          {brand.name}
                        </h3>
                        {brand.description && (
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {brand.description}
                          </p>
                        )}
                      </div>
                      
                      {/* Filtre couleur sur tout le container - seulement pour mode clair */}
                      <div className="absolute inset-0 bg-primary opacity-0 transition-all duration-500 group-hover:opacity-40 z-20 dark:hidden"></div>
                      
                      {/* Overlay avec nom et description - seulement pour mode clair */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-all duration-500 group-hover:opacity-100 z-30 dark:hidden">
                        <h3 className="mb-2 text-lg font-bold text-white drop-shadow-lg">
                          {brand.name}
                        </h3>
                        {brand.description && (
                          <p className="text-sm text-white/90 drop-shadow-md">
                            {brand.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indicateurs de pagination fonctionnels */}
            <div className="flex justify-center space-x-3 mt-6">
              {groups.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    currentGroup === index
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                  }`}
                  onClick={() => {
                    setCurrentGroup(index);
                    setIsAutoPlaying(false);
                    // Reprendre l'auto-play après 8 secondes
                    setTimeout(() => setIsAutoPlaying(true), 8000);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Brands;
const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;
  return (
    <div className="flex w-1/2 items-center justify-center p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="group relative h-16 w-full max-w-[140px] transition-transform duration-300 hover:scale-105">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white p-3 shadow-sm transition-shadow duration-300 group-hover:shadow-md dark:bg-gray-700">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-100"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
        </div>
      </div>
    </div>
  );
};

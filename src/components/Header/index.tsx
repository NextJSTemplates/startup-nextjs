"use client";

import { ExternalLink, Globe, ChevronDown } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState, createContext, useContext, useEffect } from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Language Context
const LanguageContext = createContext({
  currentLanguage: 'en',
  setLanguage: (lang: string) => { },
  t: (key: string) => key
});

// Language translations
const translations = {
  en: {
    aboutUs: "About Us",
    services: "Services",
    cloudComputing: "Cloud Computing",
    softwareDevelopment: "Software Development",
    artificialIntelligence: "Artificial Intelligence",
    uiUx: "UI/UX",
    softwareSecurity: "Software Security",
    mvpDevelopment: "MVP Development",
    softwareMaintenance: "Software Maintenance",
    industries: "Industries",
    portfolios: "Portfolios",
    blogs: "Blogs",
    contactUs: "Contact Us",
    language: "Language",
    english: "English",
    french: "French",
    dutch: "Dutch",
    spanish: "Spanish",
    german: "German"
  },
  fr: {
    aboutUs: "À Propos",
    services: "Services",
    cloudComputing: "Cloud Computing",
    softwareDevelopment: "Développement Logiciel",
    artificialIntelligence: "Intelligence Artificielle",
    uiUx: "UI/UX",
    softwareSecurity: "Sécurité Logicielle",
    mvpDevelopment: "Développement MVP",
    softwareMaintenance: "Maintenance Logicielle",
    industries: "Industries",
    portfolios: "Portfolios",
    blogs: "Blogs",
    contactUs: "Nous Contacter",
    language: "Langue",
    english: "Anglais",
    french: "Français",
    dutch: "Néerlandais",
    spanish: "Espagnol",
    german: "Allemand"
  },
  nl: {
    aboutUs: "Over Ons",
    services: "Diensten",
    cloudComputing: "Cloud Computing",
    softwareDevelopment: "Software Ontwikkeling",
    artificialIntelligence: "Kunstmatige Intelligentie",
    uiUx: "UI/UX",
    softwareSecurity: "Software Beveiliging",
    mvpDevelopment: "MVP Ontwikkeling",
    softwareMaintenance: "Software Onderhoud",
    industries: "Industrieën",
    portfolios: "Portfolio's",
    blogs: "Blogs",
    contactUs: "Contact Opnemen",
    language: "Taal",
    english: "Engels",
    french: "Frans",
    dutch: "Nederlands",
    spanish: "Spaans",
    german: "Duits"
  },
  es: {
    aboutUs: "Sobre Nosotros",
    services: "Servicios",
    cloudComputing: "Computación en la Nube",
    softwareDevelopment: "Desarrollo de Software",
    artificialIntelligence: "Inteligencia Artificial",
    uiUx: "UI/UX",
    softwareSecurity: "Seguridad de Software",
    mvpDevelopment: "Desarrollo MVP",
    softwareMaintenance: "Mantenimiento de Software",
    industries: "Industrias",
    portfolios: "Portafolios",
    blogs: "Blogs",
    contactUs: "Contáctanos",
    language: "Idioma",
    english: "Inglés",
    french: "Francés",
    dutch: "Holandés",
    spanish: "Español",
    german: "Alemán"
  },
  de: {
    aboutUs: "Über Uns",
    services: "Dienstleistungen",
    cloudComputing: "Cloud Computing",
    softwareDevelopment: "Software-Entwicklung",
    artificialIntelligence: "Künstliche Intelligenz",
    uiUx: "UI/UX",
    softwareSecurity: "Software-Sicherheit",
    mvpDevelopment: "MVP-Entwicklung",
    softwareMaintenance: "Software-Wartung",
    industries: "Branchen",
    portfolios: "Portfolios",
    blogs: "Blogs",
    contactUs: "Kontakt",
    language: "Sprache",
    english: "Englisch",
    french: "Französisch",
    dutch: "Niederländisch",
    spanish: "Spanisch",
    german: "Deutsch"
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key: string) => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && translations[savedLang as keyof typeof translations]) {
        setCurrentLanguage(savedLang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const Header = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define languages inside component to get fresh translations
  const languages = [
    { code: 'en', name: t("english"), flag: '🇺🇸' },
    { code: 'fr', name: t("french"), flag: '🇫🇷' },
    { code: 'nl', name: t("dutch"), flag: '🇳🇱' },
    { code: 'es', name: t("spanish"), flag: '🇪🇸' },
    { code: 'de', name: t("german"), flag: '🇩🇪' },
  ];

  // Get current language display with fresh translations
  const getCurrentLanguageName = () => {
    const current = languages.find(lang => lang.code === currentLanguage);
    return current ? `${current.flag} ${current.name}` : '🇺🇸 English';
  };

  const navItems = [
    { name: t("aboutUs"), link: "/about-us" },
    {
      name: t("services"),
      link: "#services",
      // sublinks: [
      //   { name: t("cloudComputing"), link: "/services/cloud-computing" },
      //   {
      //     name: t("softwareDevelopment"),
      //     link: "/services/software-development",
      //   },
      //   {
      //     name: t("artificialIntelligence"),
      //     link: "/services/artificial-intelligence",
      //   },
      //   { name: t("uiUx"), link: "/services/ui-ux" },
      //   { name: t("softwareSecurity"), link: "/services/software-security" },
      //   {
      //     name: t("mvpDevelopment"),
      //     link: "/services/mvp-development",
      //   },
      //   {
      //     name: t("softwareMaintenance"),
      //     link: "/services/support-and-maintenance",
      //   },
      // ],
    },
    { name: t("industries"), link: "#industries" },
    { name: t("portfolios"), link: "/portfolios" },
    { name: t("blogs"), link: "/blogs" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Button
            asChild
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-sm text-xs font-semibold rounded-full md:px-4 md:py-2"
          >
            <Link href="#contact" className="flex items-center gap-2">
              {t("Contact Us")}
              <ExternalLink className="text-primary w-4 h-4" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className="text-foreground z-30 md:text-base text-xs font-semibold md:py-2 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden md:inline">{getCurrentLanguageName()}</span>
                <span className="md:hidden">{languages.find(lang => lang.code === currentLanguage)?.flag || '🇺🇸'}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setLanguage(language.code)}
                  className={`flex items-center gap-2 cursor-pointer ${currentLanguage === language.code
                      ? 'bg-primary/10 text-primary font-medium text-xs md:text-sm'
                      : ''
                    }`}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLanguage === language.code && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-foreground"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Button
              asChild
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                {t("contactUs")}
                <ExternalLink className="text-primary w-4 h-4" />
              </Link>
            </Button>

            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 text-xs font-semibold rounded-full px-4 py-2 w-full flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{getCurrentLanguageName()}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => {
                      setLanguage(language.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 cursor-pointer ${currentLanguage === language.code
                        ? 'bg-primary/10 text-primary font-medium'
                        : ''
                      }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLanguage === language.code && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
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

import { translations } from "@/lib/translations"; 

const LanguageContext = createContext({
  currentLanguage: 'en',
  setLanguage: (lang: string) => { },
  t: (key: string) => key
});

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
    },
    { name: t("industries"), link: "#industries" },
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
              {t("contactUs")}
              <ExternalLink className="text-primary w-4 h-4" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-foreground z-30 md:text-base text-xs font-semibold md:py-2 flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden md:inline">{getCurrentLanguageName()}</span>
                <span className="md:hidden">{languages.find(lang => lang.code === currentLanguage)?.flag || '🇺🇸'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="text-sm">{t("language")}</DropdownMenuLabel>
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
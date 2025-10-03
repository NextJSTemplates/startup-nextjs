"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { FaUser, FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { locale, setLocale, messages } = useLanguage();
  const { user, signOut, loading } = useAuth();
  const pathname = usePathname();

  // Mémoriser l'état utilisateur pour éviter les re-rendus excessifs
  const stableUser = useMemo(() => user, [user?.id, user?.email, user?.first_name, user?.last_name, user?.user_type]);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Fermer le menu utilisateur quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (userMenuOpen && !target.closest('.relative')) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [userMenuOpen]);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
    setNavbarOpen(false);
  };

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-transparent dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-transparent backdrop-blur-md transition"
          : "absolute bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="w-40 sm:w-50 lg:w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-3 lg:py-2" : "py-4 lg:py-8"
              } `}
            >
              <Image
                src="/images/logo/svgviewer-output.svg"
                alt="logo"
                width={120}
                height={24}
                className="w-full dark:hidden sm:w-[140px] sm:h-[30px]"
              />
              <Image
                src="/images/logo/svgviewer-output.svg"
                alt="logo"
                width={120}
                height={24}
                className="hidden w-full dark:block sm:w-[140px] sm:h-[30px]"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            {/* Espace vide sur mobile pour équilibrer le layout */}
            <div className="lg:hidden"></div>
            
            {/* Navigation Menu - à gauche sur desktop, dropdown sur mobile */}
            <nav
              id="navbarCollapse"
              className={`navbar border-body-color/20 dark:border-body-color/10 dark:bg-gray-dark absolute left-0 top-full z-30 w-full rounded-b-xl border bg-white backdrop-blur-md px-6 py-6 shadow-xl duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                navbarOpen
                  ? "visibility opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative bg-transparent hover:bg-transparent">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`desktop-nav-link flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-colors duration-200 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        {messages.menu[menuItem.id as keyof typeof messages.menu]}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="desktop-nav-link flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-colors duration-200"
                          style={{ backgroundColor: 'transparent' }}
                        >
                          {messages.menu[menuItem.id as keyof typeof messages.menu]}
                          <span className="pl-3">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu dark:bg-gray-dark dark:border dark:border-gray-700 relative top-full left-0 rounded-sm bg-white backdrop-blur-md transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, subIndex) => (
                            <Link
                              href={submenuItem.path}
                              key={subIndex}
                              onClick={() => setNavbarOpen(false)}
                              className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                            >
                              {messages.menu[submenuItem.id as keyof typeof messages.menu]}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
                
                {/* Menu utilisateur mobile */}
                <li className="lg:hidden border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                  {stableUser ? (
                    // Utilisateur connecté - Menu de gestion
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                        Connecté en tant que <strong>{stableUser.first_name} {stableUser.last_name}</strong>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-base font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary rounded-lg transition-colors"
                      >
                        <FaUserCircle className="h-5 w-5" />
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-base font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary rounded-lg transition-colors"
                      >
                        <FaCog className="h-5 w-5" />
                        Mes données personnelles
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 py-3 px-4 w-full text-left text-base font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 rounded-lg transition-colors"
                      >
                        <FaSignOutAlt className="h-5 w-5" />
                        Se déconnecter
                      </button>
                    </div>
                  ) : (
                    // Utilisateur non connecté - Bouton de connexion
                    <Link
                      href="/signin"
                      onClick={() => setNavbarOpen(false)}
                      className="flex items-center gap-3 py-3 px-4 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                    >
                      <FaUser className="h-5 w-5" />
                      {messages.header.space}
                    </Link>
                  )}
                </li>
              </ul>
            </nav>

            {/* Utilitaires - groupés à droite */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Sélecteur de langue */}
              <div className="relative inline-block">
                <select
                  value={locale}
                  onChange={(e) => setLocale(e.target.value as "fr" | "en" | "de")}
                  className="appearance-none bg-transparent px-2 sm:px-3 pr-7 sm:pr-8 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-colors"
                >
                  <option value="fr">🇫🇷 FR</option>
                  <option value="en">🇺🇸 EN</option>
                  <option value="de">🇩🇪 DE</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-1.5 sm:right-2 flex items-center text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              {/* Menu utilisateur desktop */}
              <div className="relative hidden md:block">
                {stableUser ? (
                  // Utilisateur connecté - Dropdown menu
                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex rounded-md px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white transition items-center gap-1 sm:gap-2"
                    >
                      <FaUserCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                      <span className="hidden sm:inline">{stableUser.first_name}</span>
                      <svg
                        className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown menu */}
                    {userMenuOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-dark backdrop-blur-md rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {stableUser.first_name} {stableUser.last_name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{stableUser.email}</p>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mt-1 border ${
                            stableUser.user_type === 'admin' ? 'bg-white border-primary text-primary dark:bg-dark dark:border-primary dark:text-primary' :
                            stableUser.user_type === 'enterprise' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-transparent' :
                            stableUser.user_type === 'coach_therapist' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 border-transparent' :
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-transparent'
                          }`}>
                            {stableUser.user_type === 'admin' ? (
                              <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Admin
                              </>
                            ) : stableUser.user_type === 'enterprise' ? (
                              <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Entreprise
                              </>
                            ) : stableUser.user_type === 'coach_therapist' ? (
                              <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Coach
                              </>
                            ) : (
                              <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Client
                              </>
                            )}
                          </span>
                        </div>
                        <Link
                          href="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <FaUserCircle className="h-4 w-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/profile"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <FaCog className="h-4 w-4" />
                          Mes données personnelles
                        </Link>

                        <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                          <button
                            onClick={handleSignOut}
                            className="flex items-center gap-3 px-4 py-2 w-full text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          >
                            <FaSignOutAlt className="h-4 w-4" />
                            Se déconnecter
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Utilisateur non connecté - Bouton de connexion
                  <Link
                    href="/signin"
                    className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex rounded-md px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white transition items-center gap-1 sm:gap-2"
                  >
                    <FaUser className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                    <span className="hidden sm:inline">{messages.header.space}</span>
                  </Link>
                )}
              </div>

              {/* Theme Toggler */}
              <ThemeToggler />

              {/* Burger Menu - en dernier */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="ring-primary block rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 transition-colors lg:hidden"
              >
                <span
                  className={`relative my-1 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-6px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

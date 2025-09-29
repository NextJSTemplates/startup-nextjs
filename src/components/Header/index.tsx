"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { FaUser } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const { locale, setLocale, messages } = useLanguage();
  const pathname = usePathname();

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/95 backdrop-blur-md transition"
          : "absolute bg-white/10 backdrop-blur-sm"
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
              className={`navbar border-body-color/20 dark:border-body-color/10 dark:bg-gray-dark absolute left-0 top-full z-30 w-full rounded-b-xl border bg-white/95 backdrop-blur-md px-6 py-6 shadow-xl duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                navbarOpen
                  ? "visibility opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {messages.menu[menuItem.id as keyof typeof messages.menu]}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
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
                          className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
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
                
                {/* Mon espace - visible seulement sur mobile dans le menu dropdown */}
                <li className="lg:hidden border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                  <Link
                    href="/signin"
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                  >
                    <FaUser className="h-5 w-5" />
                    {messages.header.space}
                  </Link>
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

              {/* Bouton de connexion */}
              <Link
                href="/signin"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden md:flex rounded-md px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white transition items-center gap-1 sm:gap-2"
              >
                <FaUser className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline">{messages.header.space}</span>
              </Link>

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

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [isDark, setIsDark] = useState(false);

  const { locale, setLocale, messages } = useLanguage();
  const pathname = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
    if (!navbarOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);



  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };



  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-900 dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white border-b border-gray-200 dark:border-gray-700"
          : navbarOpen
            ? "absolute bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg"
            : pathname === "/"
              ? "absolute bg-transparent"
              : "absolute bg-white dark:bg-gray-900"
      }`}
      style={navbarOpen ? {
        backgroundColor: '#ffffff !important',
        borderBottom: '1px solid rgba(229, 231, 235, 1) !important',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1) !important'
      } : undefined}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between h-16 lg:h-20">
          <div className="w-48 sm:w-56 lg:w-72 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-3 lg:py-2" : "py-4 lg:py-8"
              } `}
            >
              <Image
                src="/images/logo/svgviewer-output.svg"
                alt="logo"
                width={350}
                height={70}
                className="w-full dark:hidden sm:w-[350px] sm:h-[70px] lg:w-[400px] lg:h-[80px]"
              />
              <Image
                src="/images/logo/svgviewer-output.svg"
                alt="logo"
                width={350}
                height={70}
                className="hidden w-full dark:block sm:w-[350px] sm:h-[70px] lg:w-[400px] lg:h-[80px]"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div className="lg:hidden"></div>
            
            <nav
              id="navbarCollapse"
              className={`absolute left-0 top-full z-30 w-full rounded-b-xl border border-gray-200 bg-white px-4 py-8 shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent dark:lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                navbarOpen
                  ? "visibility opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path && !menuItem.submenu ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`desktop-nav-link flex py-4 px-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:font-normal transition-colors duration-150 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent dark:lg:hover:bg-transparent ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white bg-gray-50 dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {messages.menu[menuItem.id as keyof typeof messages.menu]}
                      </Link>
                    ) : (
                      <>
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={() => handleSubmenu(index)}
                            className={`desktop-nav-link flex cursor-pointer items-center justify-between py-4 px-2 text-base font-medium group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:font-normal transition-colors duration-150 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent dark:lg:hover:bg-transparent ${
                              pathname === menuItem.path
                                ? "text-primary dark:text-white bg-gray-50 dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent"
                                : "text-dark dark:text-white/70 dark:group-hover:text-white"
                            }`}
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
                          </Link>
                        ) : (
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="desktop-nav-link flex cursor-pointer items-center justify-between py-4 px-2 text-base font-medium text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:font-normal transition-colors duration-150 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent dark:lg:hover:bg-transparent"
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
                        )}
                        <div
                          className={`submenu relative top-full left-0 rounded-lg transition-all duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[280px] lg:p-2 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-full !bg-white dark:!bg-zinc-900 !border !border-gray-200 dark:!border-zinc-700 ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, subIndex) => (
                            <Link
                              href={submenuItem.path}
                              key={subIndex}
                              onClick={() => setNavbarOpen(false)}
                              className="text-dark hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 block rounded-md py-3 px-4 text-sm font-medium transition-all duration-200 dark:text-white/70 dark:hover:text-white border-l-2 border-transparent hover:border-primary"
                            >
                              {messages.menu[submenuItem.id as keyof typeof messages.menu]}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
                

              </ul>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative inline-block">
                <button
                  onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-sm font-medium text-dark hover:text-primary focus:outline-none dark:text-white dark:hover:text-primary transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Image
                    src={locale === "fr" ? "/images/flags/france-flag.png" : "/images/flags/uk-flag.png"}
                    alt={locale === "fr" ? "Français" : "English"}
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <span className="text-sm font-semibold">
                    {locale === "fr" ? "FR" : "EN"}
                  </span>
                </button>
              </div>



              <ThemeToggler />

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

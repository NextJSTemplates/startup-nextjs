"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import blogData from "@/components/Blog/blogData";

const Footer = () => {
  const { messages, locale } = useLanguage();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/unleash-lab/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: messages.menu.home, href: "/" },
    { name: messages.menu.about, href: "/about" },
    { name: messages.menu.services, href: "/blog" },
  ];

  const services = blogData.map((b) => ({
    name: locale === "en" ? b.title_en ?? b.title : b.title,
    href: `/blog-details/${b.id}`,
  }));

  return (
    <footer className="relative z-10 border-t border-primary/40 bg-primary/30 pt-16 dark:border-gray-700 dark:bg-gray-900 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Company Info */}
            <div className="w-full px-4 md:w-1/2 lg:w-5/12">
              <div className="mb-12 max-w-[400px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-no-background.svg"
                    alt="Unleash Lab logo"
                    width={180}
                    height={45}
                    className="dark:brightness-0 dark:invert"
                  />
                </Link>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300">
                  {messages.footer.description}
                </p>
                
                {/* Contact Info */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${messages.footer.support.email}`} className="text-body-color hover:text-primary transition-colors dark:text-gray-300">
                      {messages.footer.support.email}
                    </a>
                  </div>
                  {/* phone removed per request */}
                  <div className="flex items-start space-x-3">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="not-italic text-body-color dark:text-gray-300">
                      {messages.footer.address.full.split("\n").map((line: string, i: number) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h3 className="mb-8 text-lg font-bold text-black dark:text-white">
                  {messages.footer.navigation.title}
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-body-color transition-colors hover:text-primary dark:text-gray-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h3 className="mb-8 text-lg font-bold text-black dark:text-white">
                  {messages.footer.navigation.services}
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-body-color transition-colors hover:text-primary dark:text-gray-300"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal & Support */}
            <div className="w-full px-4 md:w-1/2 lg:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h3 className="mb-8 text-lg font-bold text-black dark:text-white">
                  {messages.footer.support.title} &nbsp;•&nbsp; {messages.footer.legal.title}
                </h3>
                <ul className="space-y-3">
                  {/* Centre d'aide removed per request */}
                  <li>
                    <Link
                      href="/terms"
                      className="text-body-color transition-colors hover:text-primary dark:text-gray-300"
                    >
                      {messages.footer.legal.terms}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-body-color transition-colors hover:text-primary dark:text-gray-300"
                    >
                      {messages.footer.legal.privacy}
                    </Link>
                  </li>
                  {/* Gestion des cookies removed per request */}
                </ul>


              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 py-8 dark:border-gray-700">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-body-color dark:text-gray-400">
                © {new Date().getFullYear()} Unleash Lab. {messages.footer.copyright}
              </p>
              <div className="text-sm text-body-color dark:text-gray-400">
                <span>Version 2.2.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern (avoid blocking pointer events) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
        </div>
      </footer>
  );
};

export default Footer;

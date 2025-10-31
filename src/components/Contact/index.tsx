"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

const countries = [
  { code: "+41", name: "Suisse" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Allemagne" },
  { code: "+39", name: "Italie" },
  { code: "+43", name: "Autriche" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+32", name: "Belgique" },
  { code: "+352", name: "Luxembourg" },
  { code: "+31", name: "Pays-Bas" },
  { code: "+34", name: "Espagne" },
  { code: "+351", name: "Portugal" },
  { code: "+44", name: "Royaume-Uni" },
];

const PhoneInput = () => {
  const { messages } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Suisse par défaut
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full rounded-lg border border-stroke bg-transparent dark:border-transparent dark:bg-zinc-800 dark:shadow-two flex">
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:text-body-color-dark transition-colors duration-200 hover:text-primary"
        >
          <span className="font-medium whitespace-nowrap">{selectedCountry.code}</span>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-72 mt-1 bg-white dark:bg-zinc-800 border border-stroke dark:border-zinc-600 rounded-lg shadow-xl z-50 max-h-64 overflow-hidden">
            <div className="p-3 border-b border-stroke dark:border-gray-600">
              <input
                type="text"
                placeholder="Rechercher un pays..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-transparent border border-stroke dark:border-zinc-600 rounded-md outline-none focus:border-primary dark:text-body-color-dark"
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                >
                  <span className="font-medium text-body-color dark:text-body-color-dark">{country.code}</span>
                  <span className="text-sm text-body-color/70 dark:text-body-color-dark/70">{country.name}</span>
                </button>
              ))}
              {filteredCountries.length === 0 && (
                <div className="px-4 py-3 text-sm text-body-color/70 dark:text-body-color-dark/70 text-center">
                  Aucun pays trouvé
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="w-px bg-stroke dark:bg-zinc-600"></div>
      
      <input 
        type="tel" 
        id="phone" 
        name="phone" 
        placeholder={messages.contact.form.phonePlaceholder}
        className="flex-1 bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:text-body-color-dark" 
      />
      <input type="hidden" name="countryCode" value={selectedCountry.code} />
    </div>
  );
};

const Contact = () => {
  const { messages } = useLanguage();

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white dark:bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">
              {messages.contact.title}
            </h1>
            <p className="text-lg text-body-color dark:text-gray-300">
              {messages.contact.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-6 lg:p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Envoyez-nous un message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Décrivez-nous votre projet et nous vous recontacterons dans les plus brefs délais.
                  </p>
                </div>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.firstName}</label>
                      <input type="text" id="firstName" name="firstName" placeholder={messages.contact.form.firstNamePlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-zinc-800 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.lastName}</label>
                      <input type="text" id="lastName" name="lastName" placeholder={messages.contact.form.lastNamePlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-zinc-800 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.email}</label>
                      <input type="email" id="email" placeholder={messages.contact.form.emailPlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-zinc-800 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.phone}</label>
                      <PhoneInput />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.company}</label>
                    <input type="text" id="company" name="company" placeholder={messages.contact.form.companyPlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-zinc-800 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.message}</label>
                    <textarea name="message" id="message" rows={6} placeholder={messages.contact.form.messagePlaceholder} className="w-full resize-none rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-zinc-800 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"></textarea>
                  </div>
                  <div className="flex justify-start">
                    <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 min-w-[140px] group">
                      <span>{messages.contact.form.submit}</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-6 lg:p-8 h-full">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                  Informations de contact
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {messages.contact.info.addressTitle}
                      </h4>
                      <a 
                        href="https://maps.google.com/?q=1+Rue+Gustave-Moynier,+1202+Genève,+Suisse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary leading-relaxed transition-colors cursor-pointer inline-block"
                      >
                        Unleash Lab Sàrl<br />
                        1 Rue Gustave-Moynier<br />
                        1202 Genève, Suisse
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.945a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {messages.contact.info.emailTitle}
                      </h4>
                      <a href="mailto:contact@unleash-lab.tech" className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium">
                        contact@unleash-lab.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                        Téléphone
                      </h4>
                      <a href="tel:+41784744219" className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium">
                        +41 78 474 42 19
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                        Horaires
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Lun - Ven: 9h00 - 17h00<br />
                        Sam - Dim: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

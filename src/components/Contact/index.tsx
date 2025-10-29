"use client";

import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { messages } = useLanguage();

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-6 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {messages.contact.info.addressTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Unleash Lab Sàrl<br />
                  1 Rue Gustave-Moynier<br />
                  1202 Genève, Suisse
                </p>
              </div>

              <a href="mailto:contact@unleash-lab.tech" className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-6 hover:shadow-xl transition-all duration-300 group block text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.945a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {messages.contact.info.emailTitle}
                </h3>
                <p className="text-sm text-primary group-hover:text-primary/80 transition-colors duration-200 font-medium">
                  contact@unleash-lab.tech
                </p>
              </a>

              <a href="tel:+41225523060" className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-6 hover:shadow-xl transition-all duration-300 group block text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Téléphone
                </h3>
                <p className="text-sm text-primary group-hover:text-primary/80 transition-colors duration-200 font-medium">
                  +41 78 474 42 19
                </p>
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg border border-stroke dark:border-strokedark p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Envoyez-nous un message
                </h3>
              </div>
              
              <form className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.firstName}</label>
                    <input type="text" id="firstName" name="firstName" placeholder={messages.contact.form.firstNamePlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.lastName}</label>
                    <input type="text" id="lastName" name="lastName" placeholder={messages.contact.form.lastNamePlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.email}</label>
                    <input type="email" id="email" placeholder={messages.contact.form.emailPlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.phone}</label>
                    <input type="tel" id="phone" name="phone" placeholder={messages.contact.form.phonePlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.company}</label>
                  <input type="text" id="company" name="company" placeholder={messages.contact.form.companyPlaceholder} className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary" />
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">{messages.contact.form.message}</label>
                  <textarea name="message" id="message" rows={6} placeholder={messages.contact.form.messagePlaceholder} className="w-full resize-none rounded-lg border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">{messages.contact.form.submit}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

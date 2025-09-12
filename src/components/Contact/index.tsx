"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { messages } = useLanguage();

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:items-stretch">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="h-full mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {messages.contact.title}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {messages.contact.subtitle}
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="nom"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.nom}
                      </label>
                      <input
                        type="text"
                        id="nom"
                        placeholder={messages.contact.form.nomPlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="prenom"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.prenom}
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        placeholder={messages.contact.form.prenomPlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="tel"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.telephone}
                      </label>
                      <input
                        type="tel"
                        id="tel"
                        placeholder={messages.contact.form.telephonePlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="entreprise"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.entreprise}
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        placeholder={messages.contact.form.entreprisePlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder={messages.contact.form.emailPlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder={messages.contact.form.messagePlaceholder}
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      {messages.contact.form.submit}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="h-full mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {messages.contact.info.title}
              </h2>
              <ul className="space-y-6 text-base font-medium text-body-color dark:text-body-color-dark">
                <li>
                  <strong className="block text-dark dark:text-white">
                    {messages.contact.info.addressTitle}
                  </strong>
                  Unleash Lab Sàrl <br />
                  1 Rue Gustave-Moynier <br />
                  1202 Genève, Suisse
                </li>
                <li>
                  <strong className="block text-dark dark:text-white">
                    {messages.contact.info.emailTitle}
                  </strong>
                  <a href="mailto:contact@unleash-lab.tech" className="hover:underline">
                    contact@unleash-lab.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

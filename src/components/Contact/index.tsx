"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useLanguage } from "@/context/LanguageContext";
import { useErrorHandler } from "@/components/ErrorBoundary";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const { messages } = useLanguage();
  const { handleError } = useErrorHandler();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitSuccess(false);

      // Simulation d'envoi API
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("📧 Form data:", data);
      
      // Ici vous ajouteriez l'appel à votre API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setSubmitSuccess(true);
      reset();
      
      // Scroll to success message
      setTimeout(() => {
        document.getElementById('contact-success')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      handleError(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper pour les classes d'erreur
  const getInputClasses = (fieldName: keyof ContactFormData) => {
    const hasError = errors[fieldName];
    const isTouched = touchedFields[fieldName];
    
    let baseClasses = "w-full rounded-xs border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two sm:px-6";
    
    if (hasError) {
      baseClasses += " border-red-500 focus:border-red-500 dark:focus:border-red-500";
    } else if (isTouched) {
      baseClasses += " border-green-500 focus:border-green-500 dark:focus:border-green-500";
    } else {
      baseClasses += " border-stroke focus:border-primary dark:focus:border-primary dark:focus:shadow-none";
    }
    
    return baseClasses;
  };

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
                        htmlFor="lastName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.lastName}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder={messages.contact.form.lastNamePlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.firstName}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder={messages.contact.form.firstNamePlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={messages.contact.form.phonePlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder={messages.contact.form.companyPlaceholder}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
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

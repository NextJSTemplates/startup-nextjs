"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useLanguage } from "@/context/LanguageContext";
import { useErrorHandler } from "@/components/ErrorBoundary";
import NewsLatterBox from "./NewsLatterBox";

const ContactForm = () => {
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

      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("📧 Form data:", data);
      
      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        document.getElementById('contact-success')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      handleError(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {submitSuccess && (
              <div id="contact-success" className="mb-8 rounded-lg bg-green-50 border border-green-200 p-6 dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-green-800 dark:text-green-300 font-semibold">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="h-full mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {messages.contact.title}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {messages.contact.subtitle}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="-mx-4 flex flex-wrap">
                  
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 md:mb-8">
                      <label
                        htmlFor="lastName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.lastName} *
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder={messages.contact.form.lastNamePlaceholder}
                        className={getInputClasses("lastName")}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.lastName.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 md:mb-8">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.firstName} *
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder={messages.contact.form.firstNamePlaceholder}
                        className={getInputClasses("firstName")}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.firstName.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 md:mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.email} *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        name="email"
                        placeholder={messages.contact.form.emailPlaceholder}
                        className={getInputClasses("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.email.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 md:mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.company} *
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="company"
                        name="company"
                        placeholder={messages.contact.form.companyPlaceholder}
                        className={getInputClasses("company")}
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.company.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6 md:mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messages.contact.form.message} *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        id="message"
                        name="message"
                        placeholder={messages.contact.form.messagePlaceholder}
                        className={`resize-none ${getInputClasses("message")}`}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.message.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className={`
                        w-full rounded-xs px-6 py-4 text-base font-semibold text-white shadow-submit duration-300 sm:w-auto sm:px-9
                        ${isSubmitting || !isValid 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        messages.contact.form.submit
                      )}
                    </button>
                    
                    {isSubmitting && (
                      <div className="mt-4">
                        <div className="bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
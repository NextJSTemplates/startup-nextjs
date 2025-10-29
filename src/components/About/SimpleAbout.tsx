"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const SimpleAbout: React.FC = () => {
  const { messages } = useLanguage();
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative background shapes (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
              {messages.aboutUs.title}
            </h1>
            <p className="text-xl md:text-2xl text-body-color dark:text-gray-300 leading-relaxed font-light">
              {messages.aboutUs.subtitle}
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-between">
                <div className="prose prose-lg dark:prose-invert max-w-none flex-grow">
                  <p className="text-lg leading-relaxed text-body-color dark:text-gray-300 mb-6">
                    {messages.aboutUs.content.paragraph1}
                  </p>
                  
                  <p className="text-lg leading-relaxed text-body-color dark:text-gray-300 mb-6">
                    {messages.aboutUs.content.paragraph2}
                  </p>
                  
                  <p className="text-lg leading-relaxed text-body-color dark:text-gray-300">
                    {messages.aboutUs.content.paragraph3}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href="/blog" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {messages.aboutUs.buttons.services}
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {messages.aboutUs.buttons.contact}
                  </a>
                </div>
              </div>
            </main>

            {/* Sidebar Cards */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6 w-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.promise.title}</h4>
                  </div>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.promise.description}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.experience.title}</h4>
                  </div>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.experience.description}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.approach.title}</h4>
                  </div>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.approach.description}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleAbout;


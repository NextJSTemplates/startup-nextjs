"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const SimpleAbout: React.FC = () => {
  const { messages } = useLanguage();
  return (
    <div className="relative py-16 md:py-24">
      {/* Decorative background shapes (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>

      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white">{messages.aboutUs.title}</h1>
            <p className="mt-4 text-lg text-body-color dark:text-gray-300 text-justify">
              {messages.aboutUs.subtitle}
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <main className="lg:col-span-2 prose prose-lg dark:prose-invert mx-auto text-body-color dark:text-gray-300 text-justify">
              <p>
                {messages.aboutUs.content.paragraph1}
              </p>

              <p>
                {messages.aboutUs.content.paragraph2}
              </p>

              <p>
                {messages.aboutUs.content.paragraph3}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/blog" className="inline-block rounded-full bg-primary px-6 py-2 text-white font-semibold shadow-md hover:bg-primary/90 transition">{messages.aboutUs.buttons.services}</a>
                <a href="/contact" className="inline-block rounded-full border border-primary px-6 py-2 text-primary font-semibold hover:bg-primary hover:text-white transition">{messages.aboutUs.buttons.contact}</a>
              </div>
            </main>

            {/* Right column cards */}
            <aside className="space-y-4">
              <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-900">
                <h4 className="mb-1 text-sm font-semibold text-primary">{messages.aboutUs.cards.promise.title}</h4>
                <p className="text-sm text-body-color">{messages.aboutUs.cards.promise.description}</p>
              </div>

              <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-900">
                <h4 className="mb-1 text-sm font-semibold text-primary">{messages.aboutUs.cards.experience.title}</h4>
                <p className="text-sm text-body-color">{messages.aboutUs.cards.experience.description}</p>
              </div>

              <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-900">
                <h4 className="mb-1 text-sm font-semibold text-primary">{messages.aboutUs.cards.approach.title}</h4>
                <p className="text-sm text-body-color">{messages.aboutUs.cards.approach.description}</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAbout;


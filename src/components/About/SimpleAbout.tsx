"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const SimpleAbout: React.FC = () => {
  const { messages } = useLanguage();
  
  const formatText = (text: string) => {
    // Convertit **texte** en <strong>texte</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convertit *texte* en <em>texte</em> pour l'italique
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convertit les listes à puces simples (• item) en HTML list
    if (formatted.includes('•')) {
      // Split par <br><br> pour séparer les paragraphes
      const parts = formatted.split('<br><br>');
      
      formatted = parts.map(part => {
        if (part.includes('•')) {
          // C'est une liste à puces
          const items = part.split('<br>').map(item => {
            if (item.trim().startsWith('•')) {
              return `<li>${item.replace('•', '').trim()}</li>`;
            }
            return item;
          });
          
          // Trouve l'index du premier élément de liste
          let listStartIndex = -1;
          let nonListContent = '';
          
          for (let i = 0; i < items.length; i++) {
            if (items[i].startsWith('<li>')) {
              listStartIndex = i;
              break;
            } else {
              nonListContent += (nonListContent ? '<br>' : '') + items[i];
            }
          }
          
          if (listStartIndex !== -1) {
            const listItems = items.slice(listStartIndex).filter(item => item.startsWith('<li>'));
            return nonListContent + '<ul class="list-none space-y-2 mt-4">' + listItems.join('') + '</ul>';
          }
        }
        return part;
      }).join('<br><br>');
    }
    
    return formatted;
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
      {/* Decorative background shapes (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">
              {messages.aboutUs.title}
            </h1>
            <p 
              className="text-lg text-primary dark:text-primary italic font-medium"
              dangerouslySetInnerHTML={{
                __html: formatText(messages.aboutUs.subtitle)
              }}
            />
          </header>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-zinc-700">
                <div className="max-w-none">
                  <div 
                    className="text-lg leading-relaxed text-body-color dark:text-gray-300 mb-5 text-justify prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: formatText(messages.aboutUs.content.paragraph1)
                    }}
                  />
                  
                  <div 
                    className="text-lg leading-relaxed text-body-color dark:text-gray-300 mb-5 text-justify prose prose-lg max-w-none [&_ul]:pl-0 [&_li]:pl-6 [&_li]:relative [&_li:before]:content-['•'] [&_li:before]:absolute [&_li:before]:left-0 [&_li:before]:text-primary [&_li:before]:font-bold"
                    dangerouslySetInnerHTML={{
                      __html: formatText(messages.aboutUs.content.paragraph2)
                    }}
                  />
                  
                  <div 
                    className="text-lg leading-relaxed text-body-color dark:text-gray-300 mb-6 text-justify prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: formatText(messages.aboutUs.content.paragraph3)
                    }}
                  />
                </div>

                {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 pt-4 border-t border-gray-100 dark:border-zinc-700">
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
            <aside className="lg:col-span-2">
              <div className="space-y-4 w-full h-full flex flex-col">
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300 flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.promise.title}</h4>
                  </div>
                  <p className="text-base text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.promise.description}</p>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300 flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.experience.title}</h4>
                  </div>
                  <p className="text-base text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.experience.description}</p>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300 flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">{messages.aboutUs.cards.approach.title}</h4>
                  </div>
                  <p className="text-base text-body-color dark:text-gray-300 leading-relaxed">{messages.aboutUs.cards.approach.description}</p>
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


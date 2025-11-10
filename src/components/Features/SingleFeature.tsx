"use client";

import { Feature } from "@/types/feature";
import { useLanguage } from "@/context/LanguageContext";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { messages } = useLanguage();

  const formatText = (text: string) => {
    // Convertit **texte** en <strong>texte</strong>
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="group p-8 lg:p-10 bg-white dark:bg-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800 hover:border-primary/10 h-full flex flex-col">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-200">
        <div className="text-4xl">
          {feature.icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-black dark:text-white mb-5 leading-tight">
        {messages.features[feature.id].title}
      </h3>
      
      <div 
        className="text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1 text-justify"
        dangerouslySetInnerHTML={{
          __html: formatText(messages.features[feature.id].paragraph)
        }}
      />
    </div>
  );
};

export default SingleFeature;

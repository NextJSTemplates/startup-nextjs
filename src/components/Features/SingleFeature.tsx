"use client";

import { Feature } from "@/types/feature";
import { useLanguage } from "@/context/LanguageContext";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { messages } = useLanguage();

  return (
    <div className="group p-4 sm:p-6 lg:p-8 bg-white dark:bg-dark rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 hover:border-primary/20">
      {/* Icon */}
      <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl border-2 border-primary bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <div className="text-2xl sm:text-3xl lg:text-4xl">
          {feature.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-3 leading-tight">
        {messages.features[feature.id].title}
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {messages.features[feature.id].paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;

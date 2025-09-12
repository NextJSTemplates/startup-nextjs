"use client";

import { Feature } from "@/types/feature";
import { useLanguage } from "@/context/LanguageContext";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { messages } = useLanguage();

  return (
    <div className="p-6 bg-white dark:bg-dark rounded-lg shadow-md hover:shadow-lg transition">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md border border-primary bg-primary/10 text-primary">
        {feature.icon}
      </div>

      <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
        {messages.features[feature.id].title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {messages.features[feature.id].paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;

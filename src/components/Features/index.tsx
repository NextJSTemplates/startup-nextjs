"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useLanguage } from "@/context/LanguageContext";
const Features = () => {
  const { messages } = useLanguage();
  return (
    <section
      id="features"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-white dark:bg-gray-dark"
    >
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="150" cy="200" r="25" fill="#48937E" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 400 -100; 800 0; 1200 100"
              dur="55s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="900" cy="600" r="18" fill="#34D399" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -400 150; -800 0; -1200 -150"
              dur="65s"
              repeatCount="indefinite"
            />
          </circle>
          <polygon
            points="50,15 90,35 90,75 50,95 10,75 10,35"
            fill="#2DD4BF"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="1200 700; 800 500; 400 600; 0 700"
              dur="70s"
              repeatCount="indefinite"
            />
          </polygon>
          <rect x="200" y="500" width="28" height="28" fill="#10B981" opacity="0.45">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 300 -150; 600 0; 900 150"
              dur="60s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="1000" y="200" width="22" height="22" fill="#16A34A" opacity="0.4">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -300 100; -600 0; -900 -100"
              dur="75s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <div className="container relative z-10">
        <SectionTitle
          title={messages.featuresSection.title}
          paragraph=""
          center
        />
        <blockquote className="text-center text-lg italic text-primary mb-4">
          {messages.featuresSection.quote}
        </blockquote>
        <p className="max-w-3xl mx-auto text-center text-body-color dark:text-body-color-dark mb-12">
          {messages.featuresSection.intro}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:gap-8 lg:gap-10 xl:gap-12">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;

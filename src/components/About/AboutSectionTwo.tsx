"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutSectionTwo = () => {
  const { messages } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 max-w-[420px] lg:m-0"
              data-wow-delay=".15s"
            >
              <div className="relative">
                <Image
                  src="/images/about/aboutSecond.jpg"
                  alt="UnLeashLab équipe"
                  width={420}
                  height={500}
                  className="object-cover rounded-lg drop-shadow-three"
                />
                <div className="absolute inset-0 bg-[#48937E]/70 rounded-lg mix-blend-multiply" />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {messages.about2.missionTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {messages.about2.missionText}
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {messages.about2.expertiseTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {messages.about2.expertiseText}
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {messages.about2.humanTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {messages.about2.humanText}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

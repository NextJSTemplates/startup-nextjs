"use client";

import { useState } from "react";
import { industries } from "./industriesData";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import { useLanguage } from "@/components/Header"; 

const Industries = () => {
  const { t } = useLanguage(); 
  const [activeTab, setActiveTab] = useState(industries[0].name);

  return (
    <section className="relative z-10 pt-20 max-w-7xl mx-auto px-6" id="industries">
      <SectionTitle title={t("industriesWeServe")} />
      <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-8">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(industry.name)}
            className={`text-base font-medium p-4 border-b-2 cursor-pointer ${activeTab === industry.name
              ? "border-primary text-black"
              : "border-transparent text-muted-foreground hover:text-primary"
              }`}
          >
            {t(industry.nameKey) || industry.name}
          </button>
        ))}
      </div>

      {industries
        .filter((industry) => industry.name === activeTab)
        .map((industry) => (
          <div key={industry.name} className="flex flex-col md:flex-row gap-6 md:gap-12 text-foreground/80">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="font-semibold text-lg">{t(industry.nameKey) || industry.name}</h1>
              <p>{t(industry.quoteKey) || industry.quote}</p>
              <ul className="list-disc list-inside custom-bullets flex flex-col gap-4">
                {industry.services.map((service, index) => (
                  <li key={index}>
                    {t(industry.servicesKeys?.[index]) || service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full md:w-[80%] aspect-video rounded-lg overflow-clip hover:scale-[1.05] transition duration-300">
              <Image
                src={industry.src}
                alt={t(industry.nameKey) || industry.name}
                className="object-cover"
                fill
              />
            </div>
          </div>
        ))}
    </section>
  );
};

export default Industries;
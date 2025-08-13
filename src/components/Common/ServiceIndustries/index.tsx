"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import { ServiceIndustry } from "@/types";
type ServiceIndustryProps = {
  title: string;
  industries: ServiceIndustry[];
}
const ServiceIndustries = ({ title, industries }: ServiceIndustryProps) => {
  const [activeTab, setActiveTab] = useState(industries[0].name);

  return (
    <Section id="industries">
      <SectionTitle title={title} className="text-2xl md:text-3xl" />
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
            {industry.name}
          </button>
        ))}
      </div>

      {industries
        .filter((industry) => industry.name === activeTab)
        .map((industry) => (
          <div key={industry.name} className="flex flex-col md:flex-row gap-6 md:gap-12 text-foreground/80">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="font-semibold text-lg">{industry.name}</h1>
              <p>{industry.quote}</p>
              <ul className="list-disc list-inside custom-bullets flex flex-col gap-4">
                {industry.services.map((service, index) => (
                  <li key={index}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full md:w-[80%] aspect-video rounded-lg overflow-clip hover:scale-[1.05] transition duration-300">
              <Image
                src={industry.src}
                alt={industry.name}
                className="object-cover"
                fill
              />
            </div>
          </div>
        ))}
    </Section>
  );
};

export default ServiceIndustries;
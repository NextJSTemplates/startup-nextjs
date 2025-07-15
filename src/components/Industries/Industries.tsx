"use client"

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { industries } from "./industriesData";
import Image from "next/image";

const Industries = () => {
  const [activeTab, setActiveTab] = useState(industries[0].name);

  return (
    <section className="relative z-10 pt-20 max-w-7xl mx-auto px-6" id="industries">
      <SectionTitle title="Industries We Serve" />
      <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-8">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(industry.name)}
            className={`text-base font-medium p-4 border-b-2 ${activeTab === industry.name
              ? "border-red-500 text-black"
              : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {industry.name}
          </button>
        ))}
      </div>

      {industries
        .filter((industry) => industry.name === activeTab)
        .map((industry) => (
          <div key={industry.name} className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="font-semibold text-lg">{industry.name}</h1>
              <p>{industry.quote}</p>
              <ul className="list-disc list-inside custom-bullets flex flex-col gap-4">
                {industry.services.map((service, index) => (
                  <li key={index} >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full md:w-[80%] aspect-video rounded-lg overflow-clip">
              <Image
                src={industry.src}
                alt={industry.name}
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

"use client"

import React, { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Section from "@/components/Section";
import { ServicesFeatures } from "@/types";

type ServiceFeatureProps = {
  title: string;
  features: ServicesFeatures[];
}
const ServiceFeatures = ({title, features}: ServiceFeatureProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = features[selectedIndex];

  return (
    <Section>
      <SectionTitle title={title} className="text-2xl md:text-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="space-y-4 border-l-1 h-fit">
          {features.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer font-medium py-2 px-4 ${selectedIndex === index
                ? "text-black border-l-3 border-red-600 pl-4"
                : "text-gray-600 hover:text-black"
                }`}
              onClick={() => setSelectedIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-medium">{selected.title}</h3>
          <p className="max-w-xl">{selected.description}</p>
          {selected.image && (
            <div className="w-full aspect-video relative h-70 rounded-lg overflow-clip">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ServiceFeatures;

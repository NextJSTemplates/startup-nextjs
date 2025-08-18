import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import { items } from "./designProcessData";

const DesignProcess = () => {
  return (
    <Section>
      <SectionTitle
        title="Our Design Process"
        className="text-2xl md:text-3xl text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 w-full">
            <item.icon className="text-primary w-6 h-6" />
            <h3 className="font-medium text-base">
              {item.title}
            </h3>
            <ul className="list-disc list-inside text-muted-foreground custom-bullets">
              {item.services.map((service, sIdx) => (
                <li key={sIdx}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default DesignProcess;

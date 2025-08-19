import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import { Timeline } from "@/components/ui/timeline";
import { items } from "./designProcessData";

const DesignProcess = () => {
  const data = items.map((item) => ({
    title: item.title, 
    content: (
      <div>
        <div className="mb-4 flex items-center gap-2">
          <item.icon className="text-primary w-6 h-6" />
          <h3 className="font-medium text-base text-left">{item.title}</h3>
        </div>

        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-left">
          {item.services.map((service: string, idx: number) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>
    ),
  }));
  return (
    <Section>
      <SectionTitle
        title="Our Design Process"
        className="text-2xl md:text-3xl text-center mb-4"
      />
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </Section>
  );
};

export default DesignProcess;

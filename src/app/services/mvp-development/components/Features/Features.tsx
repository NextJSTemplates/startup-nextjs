"use client";
import React from "react";
import { features } from "./featureData";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";

const Features = () => {

  return (
    <Section>
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-col space-y-4"
        >
          <SectionTitle title="Why choose us as your MVP Development Company" className="text-center" />
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feat, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden rounded-lg border p-6"
              >
                <div className="flex justify-between">

                  <feat.icon className="w-6 h-6 text-primary" />
                  <p className="text-3xl text-muted-foreground/50 font-semibold">0{index + 1}</p>
                </div>
                <p className="mt-4 text-lg font-semibold">{feat.value}</p>
                <p className="relative z-20 mt-4 text-sm font-normal">
                  {feat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;

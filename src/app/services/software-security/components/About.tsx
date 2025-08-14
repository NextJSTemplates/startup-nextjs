import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";

const About = () => {
  return (
    <Section className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col">
          <SectionTitle title="Business-Focused Software Security Solutions" className="max-w-xl" />
          <p className="max-w-md">
            In today&apos;s fast-moving digital landscape, securing your business
            software from data breaches and threats is essential. Our software
            security services offer customized, advanced solutions to protect
            your digital infrastructure and ensure long-term safety.
          </p>
        </div>
        <div className="relative w-[360px] lg:w-[460px] aspect-video">
          <Image
            src="/images/services/softwaresec/Cybersecurity Solutions.svg"
            alt="Cybersecurity Solutions"
            className="rounded-lg object-cover"
            fill
          />
        </div>
    </Section>
  );
};

export default About;

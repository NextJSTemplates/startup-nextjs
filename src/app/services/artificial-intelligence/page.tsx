import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Industries from "@/components/Common/Industries/Industries";
import Banner from "@/components/Common/Banner";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import CaseStudies from "@/components/Common/CaseStudies";
import { caseStudies } from "@/components/Common/CaseStudies/caseStudiesData";
import FAQ from "@/components/Common/FAQ/FAQ";
import Process from "./components/Process";
import Testimonials from "@/components/Common/Testimonials";

export const metadata: Metadata = {
  title: "Services - Artificial Intelligence",
  keywords: [
    "Artificial Intelligence",
    "AI Services",
    "Machine Learning",
    "Deep Learning",
    "AI Solutions",
  ],
  description:
    "Explore our cutting-edge Artificial Intelligence services, including machine learning, deep learning, and AI solutions tailored to your business needs.",
};

const ArtificialIntelligence = () => {
  return (
    <>
      <Hero
        title="Boost Your Business with Agentic AI"
        subtitle="Harness the transformative power of Artificial Intelligence to optimize workflows, personalize user experiences, and automate operations. At Classy Endeavors, we design and deliver custom AI solutions that make businesses smarter, faster, and more scalable."
        backgroundImage="/images/services/AIBackground.svg"
      />
      <ServiceFeatures title="AI Services Features" features={uiuxServices} />
      <Industries />
      <Process />
      <CaseStudies title="Case studies of our AI services" caseStudies={caseStudies} />
      <Testimonials />
      <FAQ />
      <Banner
        title="Build the Future with Agentic AI"
        description="Let’s design a unique mobile application that stands out! Click ‘Get Started’ to book a free consultation with our development team and take the first step toward innovation."
        buttonText="Get your project developed"
      />
    </>
  );
};

export default ArtificialIntelligence;

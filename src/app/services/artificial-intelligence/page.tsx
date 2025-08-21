import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { aiServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import FAQ from "@/components/Common/FAQ/FAQ";
import { aiFaqs } from "@/components/Common/FAQ/faqData";
import ServiceIndustries from "@/components/Common/ServiceIndustries";
import { industries } from "@/components/Common/ServiceIndustries/serviceIndustriesData";
import { Solutions } from "./components/Solutions";
import ContactUs from "@/components/ContactUs";
import { aiTestimonials } from "@/components/ContactUs/testimonialsData";
import { Process } from "./components/Process";
import Steps from "./components/Step";

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
      <ServiceFeatures title="What We Offer" features={aiServices} />
      <Solutions />
      <Process />
      <Steps />
      <ServiceIndustries title="Industries we serve" industries={industries} />
      <FAQ faqs={aiFaqs} />
      <ContactUs testimonials={aiTestimonials} />
    </>
  );
};

export default ArtificialIntelligence;

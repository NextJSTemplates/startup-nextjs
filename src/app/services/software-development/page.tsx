import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Banner from "@/components/Common/Banner";
import TechStack from "../cloud-computing/components/TechStack/TechStack";
import Showcase from "@/components/Common/Showcase/Showcase";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import ServiceIndustries from "@/components/Common/ServiceIndustries";
import { industries } from "@/components/Common/ServiceIndustries/serviceIndustriesData";
import CaseStudies from "@/components/Common/CaseStudies";
import { caseStudies } from "@/components/Common/CaseStudies/caseStudiesData";
import Testimonials from "@/components/Common/Testimonials";
import FAQ from "@/components/Common/FAQ/FAQ";
import { faqData } from "@/components/Common/FAQ/faqData";
export const metadata: Metadata = {
  title: "Services - Software Development",
  keywords: [
    "Software Development",
    "Custom Software",
    "Web Development",
    "Application Development",
    "Software Solutions",
  ],
  description:
    "Explore our Software Development services, including custom software solutions, web development, and application development tailored to your business needs.",
};
const SoftwareDevelopment = () => {
  return (
    <>
      <Hero
        title="Build Powerful Software That Solves Real Problems"
        subtitle="From web and mobile applications to enterprise-grade platforms, we develop custom software solutions that scale with your business."
        backgroundImage="/images/services/SDBackground.svg"
      />
      <ServiceFeatures title="Software Development Features" features={uiuxServices} />
      <Showcase imageSrc="/images/services/cloud/Background (2).svg" title="Enhancement and Technology Refresh" description="Whether you're transitioning to new infrastructure or
              upgrading existing environments, we handle end-to-end
              modernization, security enhancements, and technology migrations to
              support your growth." buttonCta="Get Your Project" />
      <TechStack />
      <ServiceIndustries title="Industries we serve" industries={industries} />
      <CaseStudies title="Case studies of our software development services" caseStudies={caseStudies} />
      <FAQ faqs={faqData} />
      <Banner title="Let's talk about your software vision" description="You share your vision, and we’ll handle the rest — from concept to launch, we build the right solution that works for you and your customers." buttonText="Contact Us" />
    </>

  );
};

export default SoftwareDevelopment;

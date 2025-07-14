import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Services from "./components/Services";
import Banner from "@/components/Common/Banner";
import TechStack from "../cloud-computing/components/TechStack/TechStack";
import Industries from "@/components/Common/Industries/Industries";
import Showcase from "@/components/Common/Showcase/Showcase";
import Features from "../mvp-development/components/Features/Features";
import ServiceContactForm from "@/components/Common/ServiceContactForm";
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
        keywords={["Custom Software.", "Web Development.", "Mobile Apps."]}
        section={<ServiceContactForm />}
      />
      <Services />
      <Showcase imageSrc="/images/services/cloud/Background (2).svg" title="Enhancement and Technology Refresh" description="Whether you're transitioning to new infrastructure or
              upgrading existing environments, we handle end-to-end
              modernization, security enhancements, and technology migrations to
              support your growth." buttonCta="Get Your Project" />
      <Features />
      <Industries />
      <TechStack />
      <Banner title="Let's talk about your software vision" description="You share your vision, and we’ll handle the rest — from concept to launch, we build the right solution that works for you and your customers." buttonText="Contact Us" />
    </>

  );
};

export default SoftwareDevelopment;

import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import { teamMembers } from "@/components/Hero/heroData";
import Services from "./components/Services";
import Banner from "@/components/Common/Banner";
import Features from "../artificial-intelligence/components/Features/Features";
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
  // other metadata
};
const SoftwareDevelopment = () => {
  return (
    <>
      <Hero
        title="Build Powerful Software That Solves Real Problems"
        subtitle="From web and mobile applications to enterprise-grade platforms, we develop custom software solutions that scale with your business."
        ctaButtons={[
          {
            label: "Start your Design Journey",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
        teamMembers={teamMembers}
      />
      <Services />
      <Features />
      <Banner title="Let's talk about your software vision" description="Tell us and we're build the right solution for your needs" buttonText="Contact Us" />
    </>
    
  );
};

export default SoftwareDevelopment;

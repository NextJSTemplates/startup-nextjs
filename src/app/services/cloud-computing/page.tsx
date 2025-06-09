import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import { teamMembers } from "@/components/Hero/heroData";
import Banner from "@/components/Common/Banner";
import Services from "./components/Services/Services";
import WhyUs from "@/components/Common/WhyUs/WhyUs";
import { cloudData } from "@/components/Common/WhyUs/whyUsData";
import TechStack from "./components/TechStack/TechStack";

export const metadata: Metadata = {
  title: "Services - Cloud Computing",
  keywords: [
    "Cloud Computing",
    "Cloud Services",
    "Cloud Solutions",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
  description:
    "Explore our comprehensive Cloud Computing services, including cloud infrastructure, migration, and management solutions tailored to your business needs.",
};

const CloudComputing = () => {
  return (
    <>
      <Hero
        title="Cloud Consulting Services"
        subtitle="Unlock the full potential of your cloud infrastructure. At Classy Endeavors, we deliver cloud-first strategies that drive scalability, agility, and resilience across your digital ecosystem. Whether you are starting your cloud journey or optimizing your current infrastructure, our experts provide tailored solutions to meet your business goals."
        backgroundImage="/images/services/CloudBackground.svg"
        ctaButtons={[
          {
            label: "Get In Touch With Us",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
        teamMembers={teamMembers}
      />
      <Services />
      <WhyUs title="Why Work With Us?" description="Description for Cloud Computing" data={cloudData}/>
      <TechStack />
      <Banner
        title="Ready to begin your cloud journey?"
        description="Let’s review your setup and explore faster, scalable cloud solutions. Book a free consult."
        buttonText="Contact Us"
      />
    </>
  );
};

export default CloudComputing;

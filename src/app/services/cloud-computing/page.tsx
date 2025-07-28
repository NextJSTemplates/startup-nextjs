import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Banner from "@/components/Common/Banner";
import Services from "./components/Services/Services";
import WhyUs from "@/components/Common/WhyUs/WhyUs";
import { cloudData } from "@/components/Common/WhyUs/data";
import TechStack from "./components/TechStack/TechStack";
import DvtProcesses from "@/components/Common/DvtProcesses";
import ServiceContactForm from "@/components/Common/ServiceContactForm";
import Brands from "@/app/(home)/components/Brands";

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
        keywords={[
          "Scalable. ",
          "Agile.",
          "Cloud-First",
        ]}
        section={<ServiceContactForm />}
      />
      <Brands />
      <DvtProcesses />
      <Services />
      <WhyUs title="Why Work With Us?" description="Looking for a trusted partner to guide your business through cloud consulting? You’re in the right place!" data={cloudData}/>
      <TechStack />
      <Banner
        title="Ready to begin your cloud journey?"
        description="Optimize your cloud infrastructure for greater speed, scalability, and efficiency. Schedule your free expert consultation today and unlock the full potential of your cloud environment."
        buttonText="Contact Us"
      />
    </>
  );
};

export default CloudComputing;

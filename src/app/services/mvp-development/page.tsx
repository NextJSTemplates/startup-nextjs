import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import WhyUs from "@/components/Common/WhyUs/WhyUs";
import { mvpData } from "@/components/Common/WhyUs/whyUsData";
import AboutUs from "./components/About";
import Features from "./components/Features/Features";
import HowWeWork from "./components/HowWeWork";
import Banner from "@/components/Common/Banner";
import Brands from "@/components/Brands";

export const metadata: Metadata = {
  title: "Services - Mvp Development",
  description:
    "Discover our MVP development services to quickly validate your business ideas and launch scalable products.",
  keywords: [
    "MVP development",
    "startup services",
    "product validation",
    "rapid prototyping",
    "scalable products",
  ],
};

const MvpDevelopment = () => {
  return (
    <>
      <Hero
        title="MVP Development Services"
        subtitle="Bring your product vision to life—fast. At Classy Endeavors, we specialize in MVP (Minimum Viable Product) development that helps startups and enterprises validate ideas, attract investors, and accelerate market entry. Our iterative development approach ensures you get a functional, user-ready product in record time."
        backgroundImage="/images/services/MVPBackground.svg"
        keywords={["MVP Development", "Startup Acceleration", "Product Validation"]}
      />
      <Brands />
      <WhyUs
        title="Who we can help"
        description="Description for MVP Development customers"
        data={mvpData}
      />
      <AboutUs />
      <Features />
      <HowWeWork />
      <Banner title="Let's develop your MVP" description="Hand us the requirements and leave the rest to us. Your solution is lorem ipsum to us" buttonText="Book a call" />
    </>
  );
};

export default MvpDevelopment;

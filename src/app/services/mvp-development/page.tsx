import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import WhyUs from "@/components/Common/WhyUs/WhyUs";
import { mvpData } from "@/components/Common/WhyUs/whyUsData";
import AboutUs from "./components/About";
import Features from "./components/Features/Features";
import HowWeWork from "./components/HowWeWork";

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
        ctaButtons={[
          {
            label: "Schedule a call",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
      />
      <WhyUs
        title="Who we can help"
        description="Description for MVP Development customers"
        data={mvpData}
      />
      <AboutUs />
      <Features />
      <HowWeWork />
    </>
  );
};

export default MvpDevelopment;

import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { Bot, Brain, Clock } from "lucide-react";
import Industries from "@/components/Common/Industries/Industries";
import Banner from "@/components/Common/Banner";
import ServiceContactForm from "@/components/Common/ServiceContactForm";
import Statistics from "@/app/(home)/components/Statistics";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";

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

const aiChars = [
  {
    label: "No More Repetitive Tasks.",
    icon: <Brain className="h-6 w-6 stroke-2" />,
  },
  {
    label: "Smarter Decision-Making",
    icon: <Bot className="h-6 w-6 stroke-2" />,
  },
  {
    label: "24/7 Availability",
    icon: <Clock className="h-6 w-6 stroke-2" />,
  },
];

const ArtificialIntelligence = () => {
  return (
    <>
      <Hero
        title="Boost Your Business with Agentic AI"
        subtitle="Harness the transformative power of Artificial Intelligence to optimize workflows, personalize user experiences, and automate operations. At Classy Endeavors, we design and deliver custom AI solutions that make businesses smarter, faster, and more scalable."
        backgroundImage="/images/services/AIBackground.svg"
        keywords={["Smart AI.", "Real Actions.", "Constant Growth"]}
        services={aiChars}
        section={<ServiceContactForm />}
      />
      <ServiceFeatures title="AI Services Features" features={uiuxServices} />
      <Industries />
      <Statistics />
      <Banner
        title="Build the Future with Agentic AI"
        description="Let’s design a unique mobile application that stands out! Click ‘Get Started’ to book a free consultation with our development team and take the first step toward innovation."
        buttonText="Get your project developed"
      />
    </>
  );
};

export default ArtificialIntelligence;

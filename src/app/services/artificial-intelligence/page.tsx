import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { Bot, Brain, Clock, ExternalLink } from "lucide-react";
import { teamMembers } from "@/components/Hero/heroData";
import Statistics from "@/components/Common/Statistics";
import Services from "./components/Services";

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
    label: "Smart AI.",
    icon: <Brain className="h-4 w-4 stroke-2" />,
  },
  {
    label: "Real Actions.",
    icon: <Bot className="h-4 w-4 stroke-2" />,
  },
  {
    label: "Constant Growth",
    icon: <Clock className="h-4 w-4 stroke-2" />,
  },
];

const ArtificialIntelligence = () => {
  return (
    <>
      <Hero
        title="Boost Your Business with Agentic AI"
        subtitle="Harness the transformative power of Artificial Intelligence to optimize workflows, personalize user experiences, and automate operations. At Classy Endeavors, we design and deliver custom AI solutions that make businesses smarter, faster, and more scalable."
        keywords={["Smart AI.", "Real Actions.", "Constant Growth"]}
        services={aiChars}
        ctaButtons={[
          {
            label: "Start your Journey",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
        teamMembers={teamMembers}
      />
      <Services />
      <Statistics />
    </>
  );
};

export default ArtificialIntelligence;

import SingleService from "@/components/Common/SingleService";
import React from "react";

const aiServices = [
  {
    image: "/images/services/aimodel/Assistants.svg",
    title: "Smart AI Agents & Chatbots",
    description:
      "Deliver exceptional customer service with intelligent, NLP-based chatbots and virtual agents.",
    services: [
      { label: "24/7 multilingual support" },
      { label: " Seamless third-party integrations" },
      { label: "Intent recognition and emotion analysis" },
    ],
  },
  {
    image: "/images/services/aimodel/Automation.svg",
    title: "Workflow Automation",
    description:
      "Eliminate inefficiencies with intelligent automation of repetitive business tasks.",
    services: [
      { label: "RPA + AI for smart triggers" },
      { label: "Data pipeline and process optimization" },
      { label: "Error-free operations with reduced costs" },
    ],
  },
  {
    image: "/images/services/aimodel/Decision-Making.svg",
    title: "AI-Powered Decision Making",
    description:
      "Enable data-backed strategies with real-time AI insights and analytics dashboards.",
    services: [
      { label: " Predictive analytics" },
      { label: "Real-time dashboards for business forecasting" },
      { label: "AI-assisted decision support" },
    ],
  },
  {
    image: "/images/services/aimodel/AI-Agents.svg",
    title: "Custom AI Assistants",
    description:
      "Deploy personalized assistants to automate operations, bookings, and data processing.",
    services: [
      { label: "Custom workflows" },
      { label: "Adaptive learning & response engines" },
      { label: "Cross-platform support (web, mobile, voice)" },
    ],
  },
  {
    image: "/images/services/aimodel/E-Commerce.svg",
    title: "AI for E-Commerce",
    description:
      "From recommendation engines to dynamic pricing and smart search, supercharge online retail with AI.",
    services: [
      { label: "AI-based product recommendations" },
      { label: "Inventory & logistics predictions" },
      { label: "Personalized marketing automation" },
    ],
  },
];
const Services = () => {
  return (
    <section id="services" className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-6xl px-8">
        <h1 className="mb-8 text-center text-2xl font-bold">
          AI-Powered Solutions for Your Business
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {aiServices.map((service, index) => (
            <SingleService
              key={index}
              className={index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              imageSrc={service.image}
              title={service.title}
              description={service.description}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

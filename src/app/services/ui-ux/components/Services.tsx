import SingleService from "@/components/Common/SingleService";
import React from "react";

const aiServices = [
  {
    image: "/images/services/uiux/client-centric-approach.svg",
    title: "User Research & Persona Mapping",
    description:
      "Deliver exceptional customer service with intelligent, NLP-based chatbots and virtual agents.",
    services: [
      { label: "Empathy-driven insights to guide design strategy" },
      { label: "User interviews and surveys to guide UX strategy." },
      { label: "User segmentation for personalized UI/UX solutions." },
    ],
  },
  {
    image: "/images/services/uiux/Cyber security concept in digital art.svg",
    title: "Wireframing & Prototyping",
    description:
      "Eliminate inefficiencies with intelligent automation of repetitive business tasks.",
    services: [
      { label: "High-fidelity, interactive prototypes for stakeholder validation." },
      { label: "Accurate design planning before development." },
      { label: "Fast iterations for feedback-driven improvements." },
    ],
  },
  {
    image: "/images/services/uiux/faster-time to-market.svg",
    title: "Web & Mobile UI Design",
    description:
      "Enable data-backed strategies with real-time AI insights and analytics dashboards.",
    services: [
      { label: " Responsive, intuitive design systems for all screens." },
      { label: "Pixel-perfect layouts optimized for user engagement." },
      { label: "Fast-loading, user-focused web design solutions." },
    ],
  },
  {
    image: "/images/services/uiux/Cyber security concept in digital art.svg",
    title: "UX Audits & Optimization",
    description:
      "Deploy personalized assistants to automate operations, bookings, and data processing.",
    services: [
      { label: "Improve retention, usability, and accessibility across products." },
      { label: "Data-driven insights to refine user experience." },
      { label: "Actionable recommendations for design improvements." },
    ],
  },
  {
    image: "/images/services/uiux/Server cloud data storage concept cloudscape digital online service for global network web database backup computer infrastructure.svg",
    title: "Brand Identity Integration",
    description:
      "From recommendation engines to dynamic pricing and smart search, supercharge online retail with AI.",
    services: [
      { label: "UI aligned with your brand voice, colors, and tone." },
      { label: "Seamless integration of brand elements into UI design." },
      { label: "Enhanced brand recall through cohesive design." },
    ],
  },
];
const Services = () => {
  return (
    <section id="services" className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-6xl px-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Our Design Capabilities
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

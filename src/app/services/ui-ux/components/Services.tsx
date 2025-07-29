"use client"

import React, { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Section from "@/components/Section";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = aiServices[selectedIndex];

  return (
    <Section className="pb-20">
      <SectionTitle title="Flip ideas into joyful experiences" className="text-2xl md:text-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="space-y-4 border-l-1 h-fit">
          {aiServices.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer font-medium py-2 px-4 ${selectedIndex === index
                ? "text-black border-l-3 border-red-600 pl-4"
                : "text-gray-600 hover:text-black"
                }`}
              onClick={() => setSelectedIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-medium">{selected.title}</h3>
          <p className="max-w-xl">{selected.description}</p>
          {selected.image && (
            <div className="w-full aspect-video relative h-70 rounded-lg overflow-clip">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Services;

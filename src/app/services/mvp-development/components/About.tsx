"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const highlights = [
  {
    title: "Workflow and Order Flow Development",
    description:
      "We mapped user actions, built logical workflows, and connected the backend with the client’s inventory. User-friendly fallbacks handled issues like failed transactions.",
    image: "/images/services/mvp/Workflow and order flow development.svg",
  },
  {
    title: "Prototyping and UI/UX Design",
    description:
      "We designed low-fidelity mockups and prototypes to visualize layouts, navigation, and functionality—an essential step in MVP validation.",
    image: "/images/services/mvp/wireframing and prototyping.svg",
  },
  {
    title: "Mobile App Development and Testing",
    description:
      "A mobile app was built for kiosk discovery, menus, payments, and notifications, followed by usability and acceptance testing.",
    image: "/images/services/mvp/kiosk software mobile app developments.svg",
  },
  {
    title: "Backend API Integration",
    description:
      "We connected the app with secure APIs to handle payments, authentication, and data exchange with third-party systems.",
    image: "/images/services/mvp/wireframing and prototyping.svg",
  },
  {
    title: "Scalable Architecture Setup",
    description:
      "The MVP was designed with cloud-ready, modular architecture to support future growth and quick feature expansion.",
    image: "/images/services/mvp/kiosk software mobile app developments.svg",
  },
  {
    title: "Performance Monitoring",
    description:
      "Real-time analytics and monitoring tools were added to track usage, optimize workflows, and ensure smooth performance post-launch.",
    image: "/images/services/mvp/Workflow and order flow development.svg",
  },
];


const AboutUs = () => {
  return (
    <Section>
      <SectionTitle title="MVP Solutions Developed" />
      <div className=" grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="w-full h-56 relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutUs;

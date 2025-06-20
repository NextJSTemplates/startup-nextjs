"use client";

import Image from "next/image";
import React from "react";

const highlights = [
  {
    title: "Workflow and Order Flow Development",
    description:
      "During MVP software development, we integrated AI-mapped key user actions, logical workflows, and backend connections with the client’s inventory system. We also anticipated issues like failed transactions and invalid inputs, adding user-friendly fallbacks options to keep things running smoothly.",
    image: "/images/services/mvp/Workflow and order flow development.svg",
  },
  {
    title: "Prototyping and UI/UX Design",
    description:
      "We created low-fidelity mockups and interactive prototypes to visualize the app’s environment, screen layouts, and navigation paths to bring about custom software development and test its functionality. This is also a routine step under our MVP software development service.",
    image: "/images/services/mvp/wireframing and prototyping.svg",
  },
  {
    title: "Mobile App Development and Testing",
    description:
      "The app allowed users to discover nearby kiosks, view the menu, and receive notifications with seamless payments from their devices. With our IT managed services, usability testing and user acceptance testing were conducted to identify any areas for improvement.",
    image: "/images/services/mvp/kiosk software mobile app developments.svg",
  },
];

const AboutUs = () => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="relative px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/services/mvp/CoffeeVending.svg"
            alt="Coffee vending background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-white flex flex-col gap-3">
          <p className="text-sm uppercase tracking-wide font-semibold mb-2 max-w-sm" >
            Our First-Hand Experience with the Singapore Market
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">
            Coffee Vending Kiosk & Mobile App Engineering
          </h2>
          <p className="max-w-2xl text-md text-white">
            We engineered kiosk hardware integration, user interfaces, and backend systems to streamline coffee vending for a real-world client—demonstrating our ability to handle end-to-end MVP needs including:
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-16 grid gap-8 md:grid-cols-3">
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
            <p className="text-sm text-neutral-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

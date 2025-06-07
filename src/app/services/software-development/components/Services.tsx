import SingleService from "@/components/Common/SingleService";
import React from "react";

const aiServices = [
  {
    image: "/images/services/softwaredev/Container (3).svg",
    title: "Web Application Development",
    description:
      "Fast, scalable, and secure custom applications tailored to your workflows and user goals.",
    services: [
      { label: "Custom web apps tailored to your business needs." },
      { label: "Responsive design for seamless cross-device use." },
      { label: "Integrated APIs for smooth third-party connectivity." },
    ],
  },
  {
    image: "/images/services/softwaredev/Container (4).svg",
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native, Flutter, or fully native builds.",
    services: [
      { label: "User-friendly mobile apps with intuitive UI/UX." },
      { label: "Secure, high-performance apps with fast deployment." },
      { label: "App store optimization for better visibility and downloads." },
    ],
  },
  {
    image: "/images/services/softwaredev/Container (5).svg",
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
    image: "/images/services/softwaredev/Container (6).svg",
    title: "Enterprise Software Solutions",
    description:
      "Custom CRMs, ERPs, or internal tools designed for performance and reliability.",
    services: [
      { label: "Robust, scalable solutions for large-scale business needs." },
      { label: "Secure enterprise-grade applications with real-time data access." },
      { label: "Custom workflows to match your organizational structure." },
    ],
  },
  {
    image: "/images/services/softwaredev/Container (7).svg",
    title: "Cloud-Based Applications",
    description:
      "Harness AWS, Azure, and GCP for resilient, scalable systems.",
    services: [
      { label: "Optimized for high availability and minimal downtime." },
      { label: "Cost-efficient cloud solutions tailored to your business." },
      { label: "Access your software anytime, anywhere with secure cloud hosting." },
    ],
  },
    {
    image: "/images/services/softwaredev/Container (4).svg",
    title: "API Development & Integrations",
    description:
      "Custom APIs and third-party integrations to extend platform functionality.",
    services: [
      { label: "Custom API development to enhance software connectivity." },
      { label: "Improve system interoperability across applications." },
      { label: "Boost automation and data flow with powerful API integrations." },
    ],
  },
];
const Services = () => {
  return (
    <section id="services" className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-6xl px-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          What We Offer
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

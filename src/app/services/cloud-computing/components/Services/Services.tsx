import SingleService from "@/components/Common/SingleService";
import React from "react";
import { cloudServices } from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="relative z-10 pt-20">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-center text-3xl font-semibold capitalize">
          Our Cloud Computing process
        </h1>
        <div className="grid grid-cols-1">
          {cloudServices.map((service, index) => (
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

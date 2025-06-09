import SingleService from "@/components/Common/SingleService";
import React from "react";
import { cloudServices } from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Cloud Solutions for Your Business
        </h1>
        <div className="grid grid-cols-1 gap-4">
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

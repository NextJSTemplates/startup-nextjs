"use client";
import { FC } from "react";
import SectionTitle from "../Common/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services: FC = () => {
  return (
    <section id="services" className="relative z-10 pt-24">
      <SectionTitle
        title="Your Partner for Custom Apps, Automation & Seamless Support"
        width="80%"
      />
      <ServiceCard />
    </section>
  );
};

export default Services;

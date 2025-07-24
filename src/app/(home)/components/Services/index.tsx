"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/components/Header";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle
        title={t("ourServices")}
      />
      <ServiceCard />
    </section>
  );
};

export default Services;
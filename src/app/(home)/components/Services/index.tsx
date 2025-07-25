"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/components/Header";
import Section from "@/components/Section";

const Services = () => {
  const { t } = useLanguage();
  return (
    <Section id="services">
      <SectionTitle
        title={t("ourServices")}
      />
      <ServiceCard />
    </Section>
  );
};

export default Services;
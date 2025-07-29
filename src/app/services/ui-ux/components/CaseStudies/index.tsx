"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import CaseStudiesCard from "./CaseStudiesCard";

const Services = () => {
  return (
    <Section id="case-studies">
      <SectionTitle
        title="Case studies of our UI/UX design services"
        className="text-2xl md:text-3xl"
      />
      <CaseStudiesCard />
    </Section>
  );
};

export default Services;
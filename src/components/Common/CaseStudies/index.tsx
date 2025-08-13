"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import CaseStudiesCard from "./CaseStudiesCard";
import { CaseStudy } from "@/types";
type CaseStudiesProps = {
  title: string;
  caseStudies: CaseStudy[];
}
const CaseStudies = ({title, caseStudies}: CaseStudiesProps) => {
  return (
    <Section id="case-studies">
      <SectionTitle
        title={title}
        className="text-2xl md:text-3xl"
      />
      <CaseStudiesCard caseStudies={caseStudies} />
    </Section>
  );
};

export default CaseStudies;
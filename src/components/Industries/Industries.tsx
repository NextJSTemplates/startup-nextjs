"use client";

import SectionTitle from "../Common/SectionTitle";
import { AnimatedIndustries } from "../ui/animated-testimonials";
import { industries } from "./industriesData";
const Industries = () => {
  return (
    <section className="relative z-10 py-16 md:pt-20 lg:pt-24" id="industries">
      <SectionTitle title="Industries We Serve" />
      <AnimatedIndustries industries={industries} />
    </section>
  );
};

export default Industries;

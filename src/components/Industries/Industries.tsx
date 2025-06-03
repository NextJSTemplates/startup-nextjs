"use client";

import SectionTitle from "../Common/SectionTitle";
import { IndustryTabs } from "./IndustryTabs";

const Industries = () => {

  return (
    <section className="relative z-10 py-16 md:pt-20 lg:pt-24" id="industries">
      <SectionTitle title="Industries We Serve" />
      <IndustryTabs />
    </section>
  );
};

export default Industries;

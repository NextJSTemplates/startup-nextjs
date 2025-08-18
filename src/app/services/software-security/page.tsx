import { Hero } from "@/components/Common/ServicesHero";
import React from "react";
import Banner from "@/components/Common/Banner";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "@/components/Common/Testimonials";
import FAQ from "@/components/Common/FAQ/FAQ";
import ServiceIndustries from "@/components/Common/ServiceIndustries";
import { industries } from "@/components/Common/ServiceIndustries/serviceIndustriesData";
import CaseStudies from "@/components/Common/CaseStudies";
import { caseStudies } from "@/components/Common/CaseStudies/caseStudiesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import { faqData } from "@/components/Common/FAQ/faqData";

const SofwareSecurity = () => {
  return (
    <>
      <Hero
        title="Proactive Software Security to Protect Your Business"
        subtitle="We build secure applications and safeguard your systems from evolving threats with end-to-end cybersecurity practices."
        backgroundImage="/images/services/MVPBackground.svg"
      />
      <ServiceFeatures title="Our Software Security Services" features={uiuxServices} />
      <WhyUs />
      <Services />
      <ServiceIndustries title="Industries we serve" industries={industries} />
      <CaseStudies title="Software Security Case Studies" caseStudies={caseStudies} />
      <FAQ faqs={faqData} />
      <Banner
        title="Get Your Software Secured"
        description="Schedule a free consultation with our security experts and discover how to keep your software safe, compliant, and resilient."
        buttonText="Contact Us"
      />
    </>
  );
};

export default SofwareSecurity;

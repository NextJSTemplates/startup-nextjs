import { Hero } from "@/components/Common/ServicesHero";
import React from "react";
import About from "./components/About";
import Banner from "@/components/Common/Banner";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import ServiceContactForm from "@/components/Common/ServiceContactForm";

const SofwareSecurity = () => {
  return (
    <>
      <Hero
        title="Proactive Software Security to Protect Your Business"
        subtitle="We build secure applications and safeguard your systems from evolving threats with end-to-end cybersecurity practices."
        backgroundImage="/images/services/MVPBackground.svg"
        keywords={["Secure Software.", "Proactive Protection.", "Business Safety"]}
        section={<ServiceContactForm />}
      />
      <About />
      <Services />
      <WhyUs />
      <Banner
        title="Get Your Software Secured"
        description="Schedule a free consultation with our security experts and discover how to keep your software safe, compliant, and resilient."
        buttonText="Contact Us"
      />
    </>
  );
};

export default SofwareSecurity;

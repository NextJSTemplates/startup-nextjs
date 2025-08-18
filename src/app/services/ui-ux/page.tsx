import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Tools from "./components/Tools";
import Banner from "@/components/Common/Banner";
import DesignProcess from "./components/DesignProcess";
import Features from "./components/Features";
import ContactUs from "@/components/ContactUs";
import ServiceIndustries from "@/components/Common/ServiceIndustries";
import { industries } from "@/components/Common/ServiceIndustries/serviceIndustriesData";
import CaseStudies from "@/components/Common/CaseStudies";
import { caseStudies } from "@/components/Common/CaseStudies/caseStudiesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import Testimonials from "@/components/Common/Testimonials";
import FAQ from "@/components/Common/FAQ/FAQ";
export const metadata: Metadata = {
  title: "Services - UI/UX Design",
  keywords: [
    "UI/UX Design",
    "User Experience",
    "User Interface",
    "Web Design",
    "Mobile App Design",
    "Design Services",
  ],
  description:
    "Explore our UI/UX design services that enhance user experience and interface design for web and mobile applications. We create intuitive, user-friendly designs that drive engagement and satisfaction.",
};

const UIUXPage = () => {
  return (
    <>
      <Hero
        title="Transform Ideas into Exceptional Digital Experiences"
        subtitle="At Classy Endeavors, we craft user experiences that delight, engage,
and convert. Our UI/UX design services blend creativity, functionality, and
business goals—turning your vision into intuitive digital products that leave a
lasting impression."
        backgroundImage="/images/services/UIUXBackground.svg"
        keywords={["Intuitive Design.", "User-Centric.", "Engaging Experiences"]}
      />
      <ServiceFeatures title="Turning Your Ideas into Seamless Designs" features={uiuxServices} />
      <Features />
      <Tools />
      <CaseStudies title="Case studies of our UI/UX design services" caseStudies={caseStudies} />
      <DesignProcess />
      <ServiceIndustries title="Industries we serve" industries={industries} />
      <Testimonials />
      <FAQ />
      <Banner title="Let's Design Something That Works" description="Kickstart Your Next Project With a Free Custom Design — Share Your Idea and Let Our Expert Team Bring It to Life, Absolutely Free!" buttonText="Contact Us" />
      <ContactUs />
    </>
  );
};

export default UIUXPage;

import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Tools from "./components/Tools";
import DesignProcess from "./components/DesignProcess";
import ContactUs from "@/components/ContactUs";
import ServiceIndustries from "@/components/Common/ServiceIndustries";
import { industries } from "@/components/Common/ServiceIndustries/serviceIndustriesData";
import ServiceFeatures from "@/components/Common/ServiceFeatures";
import { uiuxServices } from "@/components/Common/ServiceFeatures/serviceFeaturesData";
import FAQ from "@/components/Common/FAQ/FAQ";
import ProductsOffered from "./components/ProductsOffered";
import Blog from "@/components/Common/Blog";
import { uiuxFaqs } from "@/components/Common/FAQ/faqData";
import { uiuxTestimonials } from "@/components/ContactUs/testimonialsData";
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
      <ProductsOffered />
      <Tools />
      <DesignProcess />
      <ServiceIndustries title="Industries we serve" industries={industries} />
      <Blog blogLink="https://blog.classyendeavors.com/feed" />
      <FAQ faqs={uiuxFaqs} />
      <ContactUs testimonials={uiuxTestimonials} />
    </>
  );
};

export default UIUXPage;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import BusinessSectors from "@/components/BusinessSectors";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yacob Tech | Startup — Building Tomorrow, Today.",
  description: "Web and software development, IT support and networking, digital innovation, AI automation, technology training, and management systems.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <BusinessSectors />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}

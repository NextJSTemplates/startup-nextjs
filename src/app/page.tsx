import IndustriesSection from "@/components/About/IndustriesSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ScrollableServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <ScrollableServices />
      <IndustriesSection />
      {/* <Features /> */}
      {/* <Video /> */}
      <Testimonials />
      <Blog />
    </>
  );
}

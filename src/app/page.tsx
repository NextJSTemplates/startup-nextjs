import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import Industries from "@/components/Industries/Industries";
import ScrollableServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classy Endeavours",
  description: "Classy Endeavours is an IT company leading in SaaS innovation. We create cutting-edge, scalable software solutions that transform business operations, fueling success in the digital era.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <ScrollableServices />
      <Features />
      <Industries />
      <Testimonials />
      <Blog />
    </>
  );
}

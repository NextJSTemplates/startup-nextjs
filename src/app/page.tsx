import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MittaKola - Technology Solutions & Innovation",
  description: "MittaKola provides cutting-edge technology solutions and innovative services for modern businesses",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Contact />
    </>
  );
}

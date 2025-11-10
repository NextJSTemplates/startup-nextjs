import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unleash Lab - Expert en Business Analysis & Innovation Durable",
  description: "Nous transformons la complexité en clarté et libérons le potentiel de votre entreprise grâce à une expertise unique en Business Analysis et innovation durable. Conseil IT, recrutement Business Analysts, accompagnement stratégique.",
  keywords: ["Business Analysis", "Conseil IT", "Innovation", "Transformation digitale", "Business Analyst", "Genève", "Suisse", "Accompagnement entreprise", "Stratégie IT"],
  metadataBase: new URL('https://unleash-lab.tech'),
  openGraph: {
    title: "Unleash Lab - Expert en Business Analysis & Innovation Durable",
    description: "Transformez la complexité en clarté avec nos experts en Business Analysis. Conseil IT, recrutement et accompagnement stratégique en Suisse.",
    url: "https://unleash-lab.tech",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unleash Lab - Expert en Business Analysis",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Video />
      <Contact />
    </>
  );
}

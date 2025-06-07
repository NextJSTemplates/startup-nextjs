import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import Services from "./components/Services";
import { teamMembers } from "@/components/Hero/heroData";
import Features from "./components/Features/Features";
import Tools from "./components/Tools";
import Banner from "@/components/Common/Banner";
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
        title="Design That Feels Right—and Performs Exceptionally"
        subtitle="We help startups and enterprises craft stunning interfaces and frictionless experiences that delight users and drive growth."
        ctaButtons={[
          {
            label: "Start your Design Journey",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
        teamMembers={teamMembers}
      />
      
      <Services />
      <Tools />
      <Features />
      <Banner />
    </>
  );
};

export default UIUXPage;

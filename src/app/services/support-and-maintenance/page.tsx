import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import { teamMembers } from "@/components/Hero/heroData";
import Banner from "@/components/Common/Banner";

export const metadata: Metadata = {
  title: "Services - Support And Maintenance",
  keywords: [
    "support",
    "maintenance",
    "IT services",
    "technical support",
    "system maintenance",
    "application support",
    "software maintenance",
    "service plans",
    "business continuity",
  ],
  description:
    "Comprehensive support and maintenance services to ensure your IT systems and applications run smoothly and efficiently.",
  // other metadata
};

const SupportAndMaintenance = () => {
  return (
    <>
      <Hero
        title="Software Care Solutions"
        subtitle="At Classy Endeavors, we understand that consistent system performance, secure frameworks, and reliable uptime are essential for business growth. Our software support and maintenance services are designed to optimize your systems and keep operations running seamlessly."
        ctaButtons={[
          {
            label: "Get In Touch With Us",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
        teamMembers={teamMembers}
      />
      <Banner
        title="Don't let security issues disrupt your business"
        description="Our experts at Classy Endeavors are ready to provide insights and strategies
tailored to your unique requirements."
        buttonText="Book a Consultation"
      />
    </>
  );
};

export default SupportAndMaintenance;

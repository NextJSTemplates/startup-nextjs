import { Hero } from "@/components/Common/ServicesHero";
import { ExternalLink } from "lucide-react";
import React from "react";
import About from "./components/About";

const SofwareSecurity = () => {
  return (
    <>
      <Hero
        title="Proactive Software Security to Protect Your Business"
        subtitle="We build secure applications and safeguard your systems from evolving threats with end-to-end cybersecurity practices."
        backgroundImage="/images/services/MVPBackground.svg"
        ctaButtons={[
          {
            label: "Schedule a call",
            icon: <ExternalLink className="h-4 w-4 stroke-2" />,
          },
        ]}
      />
      <About />
    </>
  );
};

export default SofwareSecurity;

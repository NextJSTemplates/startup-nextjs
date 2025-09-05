import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | UnLeashLab - Expert en Business Analysis",
  description:
    "Découvrez UnLeashLab : plus de 15 ans d’expertise en Business Analysis et accompagnement humain pour transformer vos défis en opportunités durables.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="En savoir plus "
        description="UnLeashLab accompagne les individus et les organisations en combinant Business Analysis, psychologie et stratégie pour révéler leur plein potentiel."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

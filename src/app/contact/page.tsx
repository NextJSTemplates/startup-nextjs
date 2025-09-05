import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UnLeashLab - Expert en Business Analysis",
  description:
    "Contactez UnLeashLab pour vos besoins en Business Analysis, conseil IT, recrutement de Business Analysts et accompagnement stratégique.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez-nous"
        description="Besoin d’un accompagnement en Business Analysis, IT Advisory ou recrutement de Business Analysts ? Laissez-nous un message, notre équipe reviendra vers vous rapidement."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

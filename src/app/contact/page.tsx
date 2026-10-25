import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Yacob Tech | Startup",
  description: "Contact Yacob Tech | Startup to discuss a website, software, IT support, or training project.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Yacob Tech"
        description="Tell us what you are working on and what kind of technology support you need."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

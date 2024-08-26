import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Have New Queries? Get in Touch!"
        description="We're here to help with any questions or ideas you have. Whether it's a new project, a technical challenge, or just a brainstorming session, don't hesitate to reach out. Let’s discuss how we can turn your vision into reality. Contact us today and let’s get started!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;

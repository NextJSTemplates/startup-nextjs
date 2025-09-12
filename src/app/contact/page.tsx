"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={messages.contactPage.breadcrumb.title}
        description={messages.contactPage.breadcrumb.description}
      />
      <Contact />
    </>
  );
};

export default ContactPage;

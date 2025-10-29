"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;

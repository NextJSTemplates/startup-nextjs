"use client";
import SimpleAbout from "@/components/About/SimpleAbout";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <SimpleAbout />
    </>
  );
};

export default AboutPage;

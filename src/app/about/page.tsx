"use client";
import SimpleAbout from "@/components/About/SimpleAbout";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={messages.aboutPage.breadcrumb.title}
        description={messages.aboutPage.breadcrumb.description}
      />
      <SimpleAbout />
    </>
  );
};

export default AboutPage;

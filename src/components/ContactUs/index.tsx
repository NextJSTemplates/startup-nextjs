"use client"
import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/components/Header";
import Section from "../Section";

type ContactUsProps = {
  content?: React.ReactNode
}

const ContactUs = ({content}: ContactUsProps) => {
  const { t } = useLanguage();
    const getTranslatedSteps = () => [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4")
    ];
  return (
    <Section id="contact" className="pb-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 justify-center items-center">
        <div>
          <SectionTitle title={t("contact")} />
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className="border border-primary border-dashed max-w-md rounded-md">
            <div className="p-6 rounded-md aspect-square relative text-sm w-full md:max-w-md bg-neutral-50 border border-border/50 bottom-4 right-4 flex flex-col justify-center">
                      <h2 className="text-xl font-medium mb-10">{t("whatHappensNext")}</h2>
          <div className="relative text-[13px]">
            {getTranslatedSteps().map((step, index) => (
              <div key={index} className="relative pl-12 pb-10 last:pb-0">
                {index !== getTranslatedSteps().length - 1 && (
                  <div className="absolute left-4 top-8 w-px h-full bg-gray-300"></div>
                )}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center text-sm font-semibold text-gray-700 z-10">
                  {index + 1}
                </div>
                <p className="leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
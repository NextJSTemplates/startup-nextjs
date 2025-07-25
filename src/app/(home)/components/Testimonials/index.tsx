"use client"
import SectionTitle from "@/components/Common/SectionTitle";
import { Reviews } from "./Testimonials";
import { useLanguage } from "@/components/Header";
import Section from "@/components/Section";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionTitle title={t("whatOurCustomersSay")} />
      <Reviews />
    </Section>
  );
};

export default Testimonials;
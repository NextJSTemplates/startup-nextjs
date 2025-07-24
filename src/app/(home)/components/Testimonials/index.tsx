"use client"
import SectionTitle from "@/components/Common/SectionTitle";
import { Reviews } from "./Testimonials";
import { useLanguage } from "@/components/Header";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle title={t("whatOurCustomersSay")} />
      <Reviews />
    </section>
  );
};

export default Testimonials;
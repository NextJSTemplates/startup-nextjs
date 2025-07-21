import SectionTitle from "@/components/Common/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="relative z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Our Services"
      />
      <ServiceCard />
    </section>
  );
};

export default Services;

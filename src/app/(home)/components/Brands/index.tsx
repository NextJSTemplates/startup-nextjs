import Section from "@/components/Section";
import BrandsScrollable from "./BrandsScrollable";
import SectionTitle from "@/components/Common/SectionTitle";

const Brands = () => {
  return (
    <Section>
      <SectionTitle title="Trusted by Global Partners" className="text-center" />
      <div>
        <BrandsScrollable />
      </div>
    </Section>
  );
};

export default Brands;

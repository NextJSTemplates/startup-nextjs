import SectionTitle from "@/components/Common/SectionTitle";
import { Reviews } from "./Leadership";

const Leadership = () => {
  return (
    <section className="relative w-full z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle title="Leadership" className="text-2xl md:text-3xl mb-12" />
      <Reviews />
    </section>
  );
};

export default Leadership;

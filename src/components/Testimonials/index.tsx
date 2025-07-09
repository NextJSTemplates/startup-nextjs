import SectionTitle from "../Common/SectionTitle";
import { Reviews } from "./Testimonials";

const Testimonials = () => {
  return (
    <section className="relative w-full z-10 pt-20">
      <SectionTitle title="Testimonials" />
      <Reviews />
    </section>
  );
};

export default Testimonials;

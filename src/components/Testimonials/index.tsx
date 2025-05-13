import { Reviews } from "./Reviews";

const Testimonials = () => {
  return (
    <section className="relative w-full z-10 pt-24">
      <div className="mb-12 w-[30%] rounded-se-[70px] bg-black py-6 text-white text-center shadow-md">
          <h2 className="text-2xl font-bold">Testimonials</h2>
      </div>
      <Reviews />
    </section>
  );
};

export default Testimonials;

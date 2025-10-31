import Image from "next/image";
import Testimonials from "@/components/Testimonials"; 
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pro Pulse | Coaching et Mentorat à la Demande",
  description:
    "Pro Pulse est un service de coaching/mentorat à la demande pour Business Analysts et professionnels. Réservez vos créneaux d'une heure et bénéficiez d'un accompagnement ciblé.",
};
const BlogDetailsPage = () => {
  return (
    <section className="pt-[150px] pb-[120px] bg-gray-light dark:bg-zinc-900">
      <div className="container max-w-6xl">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
          Pro Pulse – Coaching et Mentorat à la Demande
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl text-justify">
          <strong>Pro Pulse</strong> est né d’un constat simple : les Business
          Analysts et les professionnels évoluent dans des environnements
          complexes, exigeants et souvent stressants. Pour répondre à ces défis,
          il est essentiel de disposer d’un accompagnement rapide, efficace et
          personnalisé. C’est exactement ce que propose Pro Pulse : des sessions
          de coaching ou de mentorat de <strong>60 minutes</strong>, réservables
          en ligne, qui vous permettent de trouver des solutions concrètes à vos
          problématiques du moment.
        </p>
        <div className="mb-16 relative w-full overflow-hidden rounded-2xl shadow-xl">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/blog/ImageService3.jpg"
              alt="Pro Pulse"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#48937E]/50 mix-blend-multiply"></div>
          </div>
        </div>
    {}
        {}
      </div>
    </section>
  );
};
export default BlogDetailsPage;

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
    <section className="pt-[150px] pb-[120px] bg-gray-light dark:bg-bg-color-dark">
      <div className="container max-w-6xl">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
          Pro Pulse – Coaching et Mentorat à la Demande
        </h1>

        <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl">
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
        <div className="mt-20">
            <Testimonials /> 
        </div>

        <h2 className="mb-12 text-3xl font-bold text-black dark:text-white sm:text-4xl">
          Fonctionnalités futures
        </h2>

        <div className="space-y-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one dark:border-gray-700 dark:bg-dark dark:shadow-gray-dark">
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              1. Choisir votre créneau
            </h3>
            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300">
              Avec Pro Pulse, chaque session dure <strong>1 heure</strong>. Ce
              format est volontaire : il est suffisamment long pour aborder un
              sujet en profondeur, mais assez court pour rester concentré et
              efficace. Vous ouvrez le calendrier, vous choisissez votre
              créneau, et vous êtes assuré d’avoir une session dédiée à vos
              besoins.
            </p>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-2 text-center text-sm">
                {Array.from({ length: 28 }, (_, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-white py-3 text-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-300"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one dark:border-gray-700 dark:bg-dark dark:shadow-gray-dark">
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              2. Définir le sujet
            </h3>
            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300">
              Chaque professionnel fait face à des enjeux différents :
              <strong> évolution de carrière</strong>,{" "}
              <strong>adoption de nouveaux outils</strong>,{" "}
              <strong>gestion de projet</strong>, ou encore{" "}
              <strong>difficultés relationnelles</strong>. Vous pourrez définir
              votre sujet à l’avance pour que la session soit parfaitement
              adaptée à vos besoins.
            </p>
            <select
              disabled
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-500 dark:border-gray-600 dark:bg-gray-800"
            >
              <option>Développement de carrière</option>
              <option>Outils et méthodes</option>
              <option>Gestion de projet</option>
              <option>Autre sujet</option>
            </select>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one dark:border-gray-700 dark:bg-dark dark:shadow-gray-dark">
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              3. Paiement sécurisé
            </h3>
            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300">
              Une fois votre créneau et votre sujet définis, vous confirmerez
              votre réservation par un <strong>paiement en ligne sécurisé</strong>.
              Simple, rapide et fiable.
            </p>
            <button
              disabled
              className="mx-auto block cursor-not-allowed rounded-full bg-primary py-3 px-6 text-base font-semibold text-white shadow-md transition hover:bg-primary/90"
            >
              💳 Procéder au paiement
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one dark:border-gray-700 dark:bg-dark dark:shadow-gray-dark">
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              4. Partager votre feedback
            </h3>
            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300">
              Après chaque session, vous pourrez partager vos{" "}
              <strong>retours</strong>. Ces retours seront utilisés pour
              améliorer constamment le service et constituer une{" "}
              <strong>base de connaissances collective</strong> au bénéfice de
              toute la communauté.
            </p>
            <textarea
              disabled
              placeholder="Vos retours"
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-500 dark:border-gray-600 dark:bg-gray-800"
              rows={4}
            />
            
            <button
              disabled
              className="mx-auto mt-4 block cursor-not-allowed rounded-full bg-primary py-3 px-6 text-base font-semibold text-white shadow-md transition hover:bg-primary/90"
            >
              🚀 Envoyer
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;

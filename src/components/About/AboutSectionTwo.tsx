import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 max-w-[420px] lg:m-0"
              data-wow-delay=".15s"
            >
              <div className="relative">
                <Image
                  src="/images/about/aboutSecond.jpg"
                  alt="UnLeashLab équipe"
                  width={420}
                  height={500}
                  className="object-cover rounded-lg drop-shadow-three"
                />
                <div className="absolute inset-0 bg-[#48937E]/70 rounded-lg mix-blend-multiply" />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Une mission claire
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  UnLeashLab a été fondé avec la volonté profonde d’aider les
                  individus et les organisations à dépasser leurs défis
                  quotidiens grâce à une combinaison unique de Business Analysis,
                  psychologie et stratégie.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Une expertise éprouvée
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Forts de plus de 15 ans d’expérience en consulting Business et
                  IT, nous mettons notre savoir-faire au service de vos besoins
                  avec rigueur, professionnalisme et bienveillance.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Une approche humaine
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nous croyons qu’une écoute attentive, une compréhension
                  profonde et une démarche collaborative sont essentielles pour
                  révéler le plein potentiel de nos clients et assurer une
                  transformation durable.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="À Propos"
                paragraph="Expert en Business Analysis et accompagnement humain, nous aidons les individus et les organisations à dépasser leurs défis quotidiens. Notre approche repose sur l’analyse de la valeur, la psychologie et l’accompagnement stratégique pour apporter des solutions innovantes, adaptées à chaque réalité."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="+15 ans d’expérience Business & IT" />
                    <List text="Analyse de la valeur et stratégie" />
                    <List text="Approche humaine et bienveillante" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Solutions sur mesure" />
                    <List text="Innovation durable" />
                    <List text="Accompagnement collaboratif" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[400px]">
                <div className="relative">
                  <Image
                    src="/images/about/about-top.png"
                    alt="UnLeashLab - À propos"
                    width={400}
                    height={600}
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-[#48937E]/70 rounded-lg mix-blend-multiply" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

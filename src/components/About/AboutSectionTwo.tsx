"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
const AboutSectionTwo = () => {
  const { messages } = useLanguage();
  const timeline = [
    {
      year: "2008",
      title: "Fondation d'UnLeashLab",
      description: "Début de l'aventure avec une vision claire : révéler le potentiel humain et organisationnel"
    },
    {
      year: "2012",
      title: "Expansion des services",
      description: "Développement de notre expertise en Business Analysis et accompagnement stratégique"
    },
    {
      year: "2018",
      title: "Innovation Pro Pulse",
      description: "Lancement de notre programme d'accompagnement psychologique pour les professionnels"
    },
    {
      year: "2024",
      title: "Transformation digitale",
      description: "Intégration des technologies LinkedIn et outils numériques pour un accompagnement moderne"
    }
  ];
  const expertise = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Business Analysis",
      description: "Analyse de la valeur, optimisation des processus et transformation organisationnelle"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Accompagnement Humain",
      description: "Coaching, développement personnel et gestion du stress professionnel"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m8 0a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2h8z" />
        </svg>
      ),
      title: "Stratégie & Innovation",
      description: "Définition de stratégies, innovation managériale et transformation digitale"
    }
  ];
  return (
    <>
      {}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 max-w-[500px] lg:m-0">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/aboutSecond.jpg"
                    alt="UnLeashLab équipe"
                    width={500}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                </div>
                {}
                <div className="absolute -top-4 -right-4 rounded-full bg-primary p-4 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[500px]">
                <div className="mb-8">
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    Notre Mission
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    {messages.about2.missionTitle}
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-body-color">
                    {messages.about2.missionText}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {messages.about2.expertiseTitle}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    {messages.about2.expertiseText}
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                    {messages.about2.humanTitle}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    {messages.about2.humanText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Nos domaines d'expertise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-body-color">
              Une approche holistique combinant analyse business, accompagnement humain et innovation stratégique
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {expertise.map((item, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-gray-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-body-color">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Notre parcours
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-body-color">
              Plus de 15 ans d'évolution et d'innovation au service de nos clients
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-primary/20"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`mb-8 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900">
                    <div className="mb-2 text-sm font-semibold text-primary">{item.year}</div>
                    <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{item.title}</h3>
                    <p className="text-sm text-body-color">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSectionTwo;

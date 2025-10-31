"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
const AboutSectionOne = () => {
  const { messages } = useLanguage();
  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Projets réalisés" },
    { number: "50+", label: "Clients satisfaits" },
    { number: "98%", label: "Taux de satisfaction" }
  ];
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Solutions créatives et avant-gardistes pour chaque défi"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Approche participative et co-construction des solutions"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Bienveillance",
      description: "Accompagnement humain et empathique de nos clients"
    }
  ];
  return (
    <>
      {}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  À propos d'Unleash Lab
                </span>
                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Révéler le potentiel de{" "}
                  <span className="text-primary">chaque organisation</span>
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-body-color">
                  {messages.about.paragraph}
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-primary/90">
                    Découvrir nos services
                  </button>
                  <button className="rounded-md border border-primary px-8 py-3 text-base font-semibold text-primary transition hover:bg-primary hover:text-white">
                    Notre équipe
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px]">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/about-top.png"
                    alt="Unleash Lab - About"
                    width={500}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
                {}
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-body-color">Excellence</p>
                      <p className="text-lg font-bold text-black dark:text-white">Depuis 2008</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">
                  {stat.number}
                </div>
                <p className="text-sm font-medium text-body-color lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Nos valeurs fondamentales
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-body-color">
              Ce qui guide notre approche et notre engagement auprès de nos clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-gray-900">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {value.title}
                </h3>
                <p className="text-body-color">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSectionOne;

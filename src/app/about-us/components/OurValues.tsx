"use client";
import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/Common/SectionTitle'
import { useLanguage } from '@/components/Header';
import Section from '@/components/Section';

const OurValues = () => {
  const { t } = useLanguage();

  const values = [
    {
      imageSrc: "/images/about/speed.webp.svg",
      title: t("aboutSpeed"),
      description: t("aboutSpeedDescription")
    },
    {
      imageSrc: "/images/about/scale.webp.svg",
      title: t("aboutScale"),
      description: t("aboutScaleDescription")
    },
    {
      imageSrc: "/images/about/quality.webp.svg",
      title: t("aboutQuality"),
      description: t("aboutQualityDescription")
    },
    {
      imageSrc: "/images/about/global-presence.webp.svg",
      title: t("aboutGlobalPresence"),
      description: t("aboutGlobalPresenceDescription")
    },
    {
      imageSrc: "/images/about/compliance.webp.svg",
      title: t("aboutCompliance"),
      description: t("aboutComplianceDescription")
    }
  ]

  return (
    <Section>
      <div className="flex flex-col items-center justify-centern">
        <SectionTitle title={t("aboutOurValues")} className="text-2xl md:text-3xl mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center text-center h-72 p-12 rounded-lg overflow-hidden transition-all duration-500 hover:border hover:border-primary/50 hover:shadow-[0_0_5px_rgba(13,148,136,0.4)] "
            >
              <Image
                src={value.imageSrc}
                alt={`${value.title} Image`}
                width={100}
                height={100}
                className="transition-all duration-500 ease-in-out w-full group-hover:w-20 group-hover:absolute group-hover:bottom-4 group-hover:right-4 group-hover:opacity-40"
              />

              <p
                className="mt-4 text-[14px] font-semibold transition-all duration-500 ease-in-out max-w-xs group-hover:mt-0 group-hover:absolute group-hover:top-6 group-hover:left-6 group-hover:text-left mx-auto"
              >
                {value.title}
              </p>

              <p
                className="absolute opacity-0 text-[13px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-14 group-hover:left-6 group-hover:right-6 text-left"
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default OurValues
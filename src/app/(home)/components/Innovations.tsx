"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/Header';
import { Button } from '@/components/ui/button';

const Innovations = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden z-10 pt-20 px-6">
      <div className="bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto py-20 px-6 rounded-lg flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center lg:gap-24">
          <div className="space-y-6 flex flex-col justify-center max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight">
              {t("empoweringBusinessTitle")}
            </h1>
            <p className="text-sm">
              {t("empoweringBusinessDescription")}
            </p>
          </div>
          <div className="w-full h-full relative rounded-lg overflow-hidden">
            <div className="w-full aspect-square hover:scale-[1.05] transition duration-300">
              <Image fill src="/images/about/AI_CE_3.avif" alt={t("aiSolutionsImageAlt")} className="object-cover" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24 items-center mt-12">
          <div className="w-full h-full relative rounded-lg overflow-hidden flex justify-start order-2 md:order-1">
            <div className="w-full aspect-square hover:scale-[1.05] transition duration-300">
              <Image fill src="/images/about/Team_CE.jpg" alt={t("teamImageAlt")} className="object-cover" />
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-medium leading-tight max-w-md">
              {t("expertLedInnovationTitle")}
            </h2>
            <p className="max-w-sm text-sm">
              {t("expertLedInnovationDescription")}
            </p>
            <Button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200">
              {t("letsTalk")} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovations
"use client"
import React from 'react'
import SectionTitle from '@/components/Common/SectionTitle'
import { useLanguage } from '@/components/Header'

const MissionVision = () => {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      className="relative overflow-hidden z-10 mt-20 bg-[url('/images/services/MissionVisionBackground.svg')] bg-cover bg-center bg-fixed"
    >
      <div className="relative container mx-auto max-w-7xl py-32 px-6 text-white">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle
            title={t("aboutMissionVisionTitle")}
            className="text-2xl md:text-3xl border-b-2 py-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">{t("aboutVisionTitle")}</h1>
              <p className="text-sm">
                {t("aboutVisionDescription")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">{t("aboutMissionTitle")}</h1>
              <p className="text-sm">
                {t("aboutMissionDescription")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">{t("aboutValuesTitle")}</h1>
              <p className="text-sm">{t("aboutValuesDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
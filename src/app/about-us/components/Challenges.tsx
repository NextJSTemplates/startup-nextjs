"use client"
import SectionTitle from '@/components/Common/SectionTitle'
import React from 'react'
import { UserCog, DollarSign, RefreshCcw } from "lucide-react";
import { useLanguage } from '@/components/Header'
import Section from '@/components/Section';

const Challenges = () => {
  const { t } = useLanguage()

  const challenges = [
    {
      title: t("aboutChallengesExpertiseTitle"),
      icon: UserCog,
      description: t("aboutChallengesExpertiseDescription")
    },
    {
      title: t("aboutChallengesCostTitle"),
      icon: DollarSign,
      description: t("aboutChallengesCostDescription")
    },
    {
      title: t("aboutChallengesDigitalTitle"),
      icon: RefreshCcw,
      description: t("aboutChallengesDigitalDescription")
    },
  ];

  return (
    <Section>
      <div className="flex flex-col items-start justify-center">
        <SectionTitle title={t("aboutChallengesTitle")} className="text-2xl md:text-3xl mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex gap-2 justify-start items-center transition duration-300 hover:text-primary cursor-pointer">
                  <Icon className="size-4.5" />
                  <h1 className="text-base font-medium">{challenge.title}</h1>
                </div>
                <p className="max-w-sm text-[13px] text-foreground/80">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Challenges
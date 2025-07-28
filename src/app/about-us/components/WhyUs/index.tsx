"use client"

import React from 'react'
import SectionTitle from '@/components/Common/SectionTitle';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { useLanguage } from '@/components/Header'
import { Badge, CheckCircle, Route, Scan } from "lucide-react";
import Section from '@/components/Section';

const WhyUs = () => {
  const { t } = useLanguage()

  const whyUsData = [
    {
      icon: CheckCircle,
      title: t("aboutWhyUsResultTitle"),
      description: t("aboutWhyUsResultDescription"),
      link: "/"
    },
    {
      icon: Route,
      title: t("aboutWhyUsFlexibleTitle"),
      description: t("aboutWhyUsFlexibleDescription"),
      link: "/"
    },
    {
      icon: Scan,
      title: t("aboutWhyUsTransparentTitle"),
      description: t("aboutWhyUsTransparentDescription"),
      link: "/"
    },
    {
      icon: Badge,
      title: t("aboutWhyUsExperiencedTitle"),
      description: t("aboutWhyUsExperiencedDescription"),
      link: "/"
    }
  ]

  return (
    <Section className="px-4">
      <div className="flex flex-col items-start justify-center">
        <SectionTitle title={t("aboutWhyUsTitle")} className="text-2xl md:text-3xl mb-12" />
        <HoverEffect items={whyUsData} />
      </div>
    </Section>
  )
}

export default WhyUs
import React from 'react'
import { whyUsData } from './data'
import SectionTitle from '@/components/Common/SectionTitle';

const WhyUs = () => {
  return (
    <section className="relative overflow-hidden z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle title="Why Us" className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {whyUsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="flex flex-col gap-4 md:gap-6" key={index}>
                  <Icon className="size-6" />
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="text-[13px] text-foreground/80">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
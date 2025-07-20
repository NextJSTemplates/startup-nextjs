import React from 'react'
import { statsData } from './data'
import SectionTitle from '@/components/Common/SectionTitle'

const Statistics = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle title="Brief Facts" className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">{stat.title}</h1>
                <p className="text-sm font-medium">{stat.subtitle}</p>
                <hr className="border-t border-primary/70 py-2 md:py-4" />
                <p className="text-foreground/80 text-[13px]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import React from 'react'
import { processData } from './processData'

const Process = () => {
  return (
    <Section>
      <SectionTitle title="Our AI Process" className="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processData.map((process, index) => (
          <div
            key={index}
            className="flex flex-col space-y-5 p-6 bg-white rounded-lg border transition-shadow duration-300"
          >
            <div className="flex justify-between">
            <process.icon className="h-6 w-6 text-primary" />
            <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground/30 font-semibold">0{index+1}</p>
            </div>
            <h3 className="text-lg font-semibold">{process.title}</h3>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Process
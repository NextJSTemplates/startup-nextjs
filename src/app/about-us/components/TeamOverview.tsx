import SectionTitle from '@/components/Common/SectionTitle'
import React from 'react'
import Image from 'next/image'

const TeamOverview = () => {
  return (
    <section className="relative z-10 pt-20 ">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle title="Our Team" className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <p className="text-sm text-foreground/80">
              Classy Endeavours brings together IT talents from CEE and Baltic regions and directs their vast expertise in technologies, industries, and technological domains to the benefit of customers.
              <br /> <br /> We employ the best professionals in the industry based on the principles of fair competition and meritocracy. Thus, 100% of our employees have university degrees or are in the process of obtaining one. Also, our team has 28 PhDs and 128 MCSs.
              Our company has implemented a professional development system for employees to ensure their stable horizontal and vertical growth and improve their expertise
            </p>
            <div className="flex flex-col justify-center items-center">
              <Image src="/images/about/image-126.png" alt="Team Stats" width={100} height={100} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamOverview
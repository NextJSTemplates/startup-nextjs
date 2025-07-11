import React from 'react'
import Items from './Items'
import { securityThreats, WhyUsData } from './data'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl rounded-lg px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Items title="Why Choose Us?" items={WhyUsData} />
          <Image src="/images/services/softwaresec/Choose Us Cyber Security.svg" alt="Why Us Software Security" width={100} height={100} className="w-100"/>
          <Items title="Common Threats We Defend Against" items={securityThreats} />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
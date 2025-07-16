import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/Common/SectionTitle'

const values = [
  {
    imageSrc: "/images/about/speed.webp.svg",
    title: "Speed"
  },
  {
    imageSrc: "/images/about/scale.webp.svg",
    title: "Scale"
  },
  {
    imageSrc: "/images/about/quality.webp.svg",
    title: "Quality"
  },
  {
    imageSrc: "/images/about/global-presence.webp.svg",
    title: "Global Presence"
  },
  {
    imageSrc: "/images/about/compliance.webp.svg",
    title: "Compliance"
  }
]

const OurValues = () => {
  return (
    <section id="services" className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="Our Values" className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div className="flex flex-col items-center text-center w-full" key={index}>
                <Image src={value.imageSrc} alt="Value Image" width={100} height={100} className="w-25" />
                <p className="text-[13px] font-medium">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValues
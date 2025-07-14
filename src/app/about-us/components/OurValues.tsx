import React from 'react'
import Image from 'next/image'

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
    <section id="services" className="relative z-10 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-6 text-3xl text-center font-semibold capitalize">
            Our Values
          </h1>
          <div className="flex flex-wrap justify-center gap-6 md:justify-between">
            {values.map((value, index) => (
              <div className="flex flex-col items-center text-center w-[120px] md:w-auto" key={index}>
                <Image src={value.imageSrc} alt="Value Image" width={100} height={100} className="w-20" />
                <p className="text-sm font-semibold">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValues
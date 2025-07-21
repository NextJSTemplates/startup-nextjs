import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/Common/SectionTitle'

const values = [
  {
    imageSrc: "/images/about/speed.webp.svg",
    title: "Speed",
    description: "We accelerate delivery and execution to help you achieve faster time-to-market with agile, efficient processes."
  },
  {
    imageSrc: "/images/about/scale.webp.svg",
    title: "Scale",
    description: "We empower your business to grow and expand seamlessly, handling increased demand without compromising quality."
  },
  {
    imageSrc: "/images/about/quality.webp.svg",
    title: "Quality",
    description: "We maintain the highest standards to deliver exceptional results, ensuring consistency and attention to detail every time."
  },
  {
    imageSrc: "/images/about/global-presence.webp.svg",
    title: "Global Presence",
    description: "With teams and partners worldwide, we provide reliable services wherever you need us, bridging gaps across markets."
  },
  {
    imageSrc: "/images/about/compliance.webp.svg",
    title: "Compliance",
    description: "We strictly adhere to industry standards and regulations to protect your business and maintain full legal alignment."
  }
]


const OurValues = () => {
  return (
    <section id="services" className="relative overflow-hidden z-10 pt-20">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="Our Values" className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center text-center w-50 h-72 p-12 rounded-lg overflow-hidden transition-all duration-500 ease-in-ou hover:border hover:border-orange-400"
              >
                <Image
                  src={value.imageSrc}
                  alt={`${value.title} Image`}
                  width={100}
                  height={100}
                  className="transition-all duration-500 ease-in-out w-full group-hover:w-20 group-hover:absolute group-hover:bottom-4 group-hover:right-4 group-hover:opacity-40"
                />

                {/* Title (initially below image) */}
                <p
                  className="mt-4 text-[14px] font-semibold transition-all duration-500 ease-in-out max-w-xs group-hover:mt-0 group-hover:absolute group-hover:top-6 group-hover:left-6 group-hover:text-left"
                >
                  {value.title}
                </p>

                {/* Description (hidden before hover) */}
                <p
                  className="absolute opacity-0 text-[13px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-14 group-hover:left-6 group-hover:right-6 text-left"
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValues

import React from 'react'
import Image from 'next/image'
const designProcesses = [
  {
    title: "Discovery & Research",
    desc: "Understand user behavior and define goals."
  },
  {
    title: "Information Architecture",
    desc: "Structuring flows for intuitive navigation."
  },
  {
    title: "Design & Prototype",
    desc: "Collaborative UI creation in Figma or Adobe XD."
  },
  {
    title: "User Testing",
    desc: "Validate usability with real users."
  },
  {
    title: "Iteration & Delivery",
    desc: "Final handover and support for implementation."
  }
]
const DesignProcess = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-neutral-100 via-neutral-100 to-transparent border border-border rounded-lg p-8">
          <div className="flex flex-col">
            <h1 className="mb-6 text-3xl font-semibold capitalize">
              Our Design process
            </h1>
            <div className="grid grid-cols-1 gap-4">

              {designProcesses.map((process, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="flex items-center gap-2 text-sm">
                    <Image
                      src="/images/services/blue-check.svg fill.svg"
                      className="h-5 w-5"
                      width={6}
                      height={6}
                      alt="Check"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-semibold">{process.title}</h1>
                    <p className="text-sm">{process.desc}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>
          <div className="flex justify-center items-center rounded-lg overflow-clip">
            <Image
              src="/images/services/uiux/Cyber security concept in digital art.svg"
              alt="Design Process"
              className="w-100 rounded-lg"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignProcess
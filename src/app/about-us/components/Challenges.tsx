import SectionTitle from '@/components/Common/SectionTitle'
import React from 'react'

const challenges = [
  {
    title: "IT expertise gap",
    description : "We help our customers get rid of expertise and technological gaps, offering the experienced teams of IT professionals  to complete software development projects of any complexity."
  },
  {
    title: "Cost reduction",
    description: "Classy Endeavors provides IT outsourcing services and helps clients around the world to optimize software development costs. Our team has all the needed expertise to carry out turnkey projects, quickly complete tasks and bring all the benefits of outsourcing."
  },
  {
    title: "Digital transformation",
    description: "Our team can help you plan and implement digital transformation initiatives, covering all possible stages. Classy Endeavors is a reliable partner on the path to digital success and business optimization."
  }
]
const Challenges = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle title="Challenges Solved" className="text-2xl md:text-3xl mb-12"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {challenges.map((challenge, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h1 className="text-base font-medium mb-2">{challenge.title}</h1>
              <p className="max-w-sm text-[13px] text-foreground/80">{challenge.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenges
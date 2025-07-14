import React from 'react'
import { statsData } from './data'

const Statistics = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-center">
          <h1 className="mb-6 text-3xl font-semibold capitalize">
            Brief Facts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h1 className="text-2xl md:text-3xl font-semibold">{stat.title}</h1>
                <p className="text-sm font-medium">{stat.subtitle}</p>
                <hr />
                <p className="text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
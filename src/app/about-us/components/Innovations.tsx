import React from 'react'
import Image from 'next/image'

const Innovations = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 rounded-lg bg-gradient-to-br from-black via-black to-neutral-500 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Leading the Next Era of Language AI for Enterprise Growth</h1>
            <p className="text-sm">Classy Endeavors delivers advanced NLP solutions powered by large language models built on cutting-edge Transformer architecture. Trained on high-performance supercomputers, our technology eliminates the need for costly machine learning development. Backed by a world-class team, we help businesses transform operations and unlock real-world value through AI-driven innovation.</p>
          </div>
          <Image
            src="/images/about/Vector (1).svg"
            alt="Coffee vending background"
            width={100}
            height={100}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Image
            src="/images/about/Vector (2).svg"
            alt="Coffee vending background"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Expert-Led Innovation, Powered by Collaboration</h1>
            <p className="text-sm">At Classy Endeavors, our AI and ML engineers bring together diverse skills and a shared passion for advancing language AI. United by purpose, we’re focused on delivering cutting-edge innovations that help developers build meaningful solutions.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Innovations
import React from 'react'
import Image from 'next/image'

const Innovations = () => {
  return (
    <section className="relative z-10 pt-20 px-6">
      <div className="bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto py-20 px-6 rounded-lg flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24">
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold leading-tight max-w-md">
              Leading the Next Era of <br /> Language AI for Enterprise Growth
            </h1>
            <p className="max-w-md text-sm">
              Classy Endeavors delivers advanced NLP solutions powered by large language models built on cutting-edge Transformer architecture. Trained on high-performance supercomputers, our technology eliminates the need for costly machine learning development. Backed by a world-class team, we help businesses transform operations and unlock real-world value through AI-driven innovation.          </p>
          </div>
          <div className="flex justify-start">
            <Image
              src="/images/about/Vector (1).png"
              alt="Speaker"
              className="w-full"
              width={100}
              height={100}
              quality={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24 items-center mt-12">
          <div className="flex justify-start order-2 md:order-1">
            <Image
              src="/images/about/Vector.png"
              alt="Team"
              className="w-full"
              width={100}
              height={100}
              quality={100}
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-semibold leading-tight max-w-md">
              Expert-Led Innovation, Powered by Collaboration
            </h2>
            <p className="max-w-sm text-sm">
              At Classy Endeavors, our AI and ML engineers bring together diverse skills and a shared passion for advancing language AI. United by purpose, we’re focused on delivering cutting-edge innovations that help developers build meaningful solutions.          </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200">
              Join Us →
            </button>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Innovations
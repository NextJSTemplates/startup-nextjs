import React from 'react'
import Image from 'next/image'

const Innovations = () => {
  return (
    <section className="relative z-10 pt-20 px-6 ">
      <div className="bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto p-20 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight max-w-md">
            Leading the Next Era of <br /> Language AI for Enterprise Growth
          </h1>
          <p className="max-w-sm text-sm">
            Classy Endeavors delivers advanced NLP solutions powered by large language models built on cutting-edge transformer architecture...
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/about/Vector (1).png"
            alt="Speaker"
            className="w-full max-w- rounded-[40px]"
            width={100}
            height={100}
            quality={100}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
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
          <h2 className="text-3xl font-bold leading-tight max-w-md">
            Expert-Led Innovation, Powered by Collaboration
          </h2>
          <p className="max-w-sm text-gray-300 text-sm">
            At Classy Endeavors, our AI and ML engineers bring together diverse skills and a shared passion...
          </p>
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
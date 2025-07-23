import React from 'react'
import Image from 'next/image'

const Innovations = () => {
  return (
    <section className="relative overflow-hidden z-10 pt-20 px-6">
      <div className="bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto py-20 px-6 rounded-lg flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center lg:gap-24">
          <div className="space-y-6 flex flex-col justify-center max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight">
              Empowering Your Business <br /> with Smarter AI Solutions
            </h1>
            <p className="text-sm">
              Classy Endeavors provides customized AI solutions—including machine learning, NLP, computer vision, and automation—to help businesses improve customer experiences, automate tasks, and gain insights. They also use AI internally to speed up development, increase accuracy, and deliver projects faster and more cost-effectively. </p>
          </div>
          <div className="w-full  h-full relative rounded-lg overflow-hidden">
            <div className="w-full md:h-full aspect-square">
              <Image fill src="/images/about/AI_CE_3.avif" alt="image" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24 items-center mt-12">
          <div className="w-full aspect-video relative rounded-lg overflow-hidden flex justify-start order-2 md:order-1">
            <div className="w-full h-full">
              <Image fill src="/images/about/Team_CE.jpg" alt="image" className="object-cover" />
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-medium leading-tight max-w-md">
              Expert-Led Innovation, Powered by Collaboration
            </h2>
            <p className="max-w-sm text-sm">
              At Classy Endeavors, our AI and ML engineers bring together diverse skills and a shared passion for advancing language AI. United by purpose, we&apos;re focused on delivering cutting-edge innovations that help developers build meaningful solutions.          </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200">
              Let&apos;s Talk →
            </button>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Innovations
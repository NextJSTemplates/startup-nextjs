import React from 'react'
import Image from 'next/image'

const Innovations = () => {
  return (
    <section className="relative overflow-hidden z-10 pt-20 px-6">
      <div className="bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto py-20 px-6 rounded-lg flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24">
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight max-w-md">
              Empowering Your Business <br /> with Smarter AI Solutions
            </h1>
            <p className="max-w-md text-sm">
              At Classy Endeavors, we deliver advanced AI services tailored to your business needs—ranging from machine learning and natural language processing to computer vision and intelligent automation. Whether you&apos;re looking to enhance customer experiences, automate complex workflows, or gain predictive insights, our AI experts craft scalable, secure, and high-performance solutions.
              We also leverage AI internally to streamline development, boost accuracy, and reduce time to market—ensuring faster, more cost-effective project delivery for our clients      </p>
          </div>
          <div className="flex justify-start">
            <Image
              src="/images/about/Vector (1).png"
              alt="Speaker"
              className="w-full lg:scale-[1.1] hover:scale-[1.15] transition duration-300"
              width={400}  // Increased from 100
              height={400} // Increased from 100
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24 items-center mt-12">
          <div className="flex justify-start order-2 md:order-1">
            <Image
              src="/images/about/Vector.png"
              alt="Speaker"
              className="w-full lg:scale-[1.1] hover:scale-[1.15] transition duration-300"
              width={400} 
              height={400} 
              quality={100}
              priority
            />
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
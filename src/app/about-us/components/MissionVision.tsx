import React from 'react'
import SectionTitle from '@/components/Common/SectionTitle'

const MissionVision = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden z-10 mt-20 bg-[url('/images/services/MissionVisionBackground.svg')] bg-cover bg-center bg-fixed"
    >
      <div className="relative container mx-auto max-w-7xl py-32 px-6 text-white">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle
            title="Mission and Vision"
            className="text-2xl md:text-3xl border-b-2 py-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Vision</h1>
              <p className="text-sm">
                Our company’s vision is fully defined by a simple but comprehensive phrase — We Develop the World.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Mision</h1>
              <p className="text-sm">
                We develop software. We work alongside our clients to make the world a better place for everyone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Values</h1>
              <p className="text-sm">We do what we love and we do it well, taking pride in our team and continuously evolving. By working flexibly and openly, we achieve the results that matter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision

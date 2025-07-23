import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/OurValues';
import Challenges from './components/Challenges';
import ContactUs from '@/components/ContactUs';
import Innovations from './components/Innovations';
import Testimonials from './components/Testimonials';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: "About Us - EP365 Procurement System",
  keywords: [
    "About EP365",
    "EP365 Procurement",
    "About Our Team",
    "Procurement Solutions",
    "Our Mission",
    "Supply Chain Management",
  ],
  description:
    "Discover EP365, an innovative procurement system designed to streamline supply chain processes. Learn about our mission, our team, and how we empower businesses with efficient procurement solutions.",
};

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <MissionVision />
      <WhyUs />
      <Innovations />
      <Challenges />
      <OurValues />
      <Testimonials />
      <ContactUs content={(
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl">What our customers say</h1>

          <Quote className="size-5 rotate-180 text-center text-teal-700" fill="teal" />

          <p className="text-[13px]">
            Working with Classy Endeavors was a game-changer for our business. The design team brought our vision to life with an intuitive and modern UI that our users love. Their frontend developers ensured a smooth, responsive interface across all devices, while the backend team built a solid, scalable architecture that runs flawlessly. Throughout the project, communication was clear, timelines were met, and their team felt like an extension of ours. We couldn’t have asked for a better tech partner!
          </p>

          <div className="flex justify-end">
            <Quote className="size-5 text-teal-700" fill="teal" />
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="font-medium">Priya Malhotra</h1>
              <p className="text-[13px]">Founder - Eduline Learning</p>
            </div>
          </div>
        </div>

      )} />
    </>
  )
}

export default AboutUsPage
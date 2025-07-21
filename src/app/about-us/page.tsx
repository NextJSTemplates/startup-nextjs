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
      <Hero
        title="From Concept to Code: Experts in MVPs and Beyond"
        subtitle="Classy Endeavors is a software development and IT consulting company that was founded in 2007. Our company serves IT and non-IT organizations, helping to achieve a variety of goals and objectives with digital solutions and recent trend technologies."
        backgroundImage="/images/services/MVPBackground.svg"
      />
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
            The breadth of knowledge and understanding that ELEKS has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with ELEKS, you are working with the top 1% of the aptitude and engineering excellence of the whole country.
          </p>

          <div className="flex justify-end">
            <Quote className="size-5 text-teal-700" fill="teal" />
          </div>

          <div className="mt-2 flex items-center gap-3">
            <Image
              src="/images/testimonials/person-1.avif"
              alt="Customer"
              width={14}
              height={14}
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex flex-col">
              <h1 className="font-medium">Sam Fleming</h1>
              <p className="text-[13px]">President, Fleming-AOD</p>
            </div>
          </div>
        </div>

      )} />
    </>
  )
}

export default AboutUsPage
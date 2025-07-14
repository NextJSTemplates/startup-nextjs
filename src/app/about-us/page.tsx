import { Hero } from '@/components/Common/ServicesHero';
import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/OurValues';
import Innovations from './components/Innovations';
import Challenges from './components/Challenges';
import ContactUs from './components/ContactUs';
import { heroStatsData } from './components/Statistics/data';
import InnovationsCarousel from './components/InnovationCarousel';

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
        subtitle="We help modern businesses grow with scalable tech solutions designed for performance, efficiency, and user delight."
        backgroundImage="/images/services/MVPBackground.svg"
        section={(
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-white p-6 rounded-lg">
            {heroStatsData.map((stat, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h1 className="text-2xl md:text-3xl font-semibold">{stat.title}</h1>
                <p className="text-sm font-medium">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        )}
      />
      <Statistics />
      <MissionVision />
      <Innovations />
      <Challenges />
      <WhyUs />
      <OurValues />
    </>
  )
}

export default AboutUsPage
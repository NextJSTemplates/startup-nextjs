import { Hero } from '@/components/Common/ServicesHero';
import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/OurValues';

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
          <div>
            []
          </div>
        )}
      />
      <Statistics />
      <MissionVision />
      <WhyUs />
      <OurValues />
    </>
  )
}

export default AboutUsPage
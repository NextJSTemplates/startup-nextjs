import { Hero } from '@/components/Common/ServicesHero';
import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/OurValues';
import Challenges from './components/Challenges';
import ContactUs from '@/components/ContactUs';
import TeamOverview from './components/TeamOverview';
import Innovations from './components/Innovations';
import Testimonials from './components/Testimonials';

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
        title="About Us"
        titleStyles="w-fit border-b-2 py-6 "
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
      <TeamOverview />
      <ContactUs />
    </>
  )
}

export default AboutUsPage
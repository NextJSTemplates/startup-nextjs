import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/ourValues';
import Challenges from './components/Challenges';
import ContactUs from '@/components/ContactUs';
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
      <Challenges />
      <OurValues />
      <ContactUs />
    </>
  )
}

export default AboutUsPage
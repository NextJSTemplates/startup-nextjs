
import ScrollUp from "@/components/Common/ScrollUp";

import ContactUs, { steps } from "@/components/ContactUs";

import { Metadata } from "next";
import Hero from "./(home)/components/Hero";
import Brands from "./(home)/components/Brands";
import Services from "./(home)/components/Services";
import Technologies from "./(home)/components/Technologies";
import Industries from "./(home)/components/Industries";
import Statistics from "./(home)/components/Statistics";
import Testimonials from "./(home)/components/Testimonials";
import Blog from "./(home)/components/Blog";
import Innovations from "./(home)/components/Innovations";

export const metadata: Metadata = {
  title: "Classy Endeavours",
  description: "Classy Endeavours is an IT company leading in SaaS innovation. We create cutting-edge, scalable software solutions that transform business operations, fueling success in the digital era.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Services />
      <Innovations />
      <Technologies />
      <Industries />
      <Statistics />
      <Testimonials />
      <Blog />
      <ContactUs content={(
        <>
          <h2 className="text-xl font-medium mb-10">What happens next?</h2>
          <div className="relative text-[13px]">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12 pb-10 last:pb-0">
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-8 w-px h-full bg-gray-300"></div>
                )}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center text-sm font-semibold text-gray-700 z-10">
                  {index + 1}
                </div>
                <p className="leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </>
      )} />
    </>
  );
}

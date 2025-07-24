import ScrollUp from "@/components/Common/ScrollUp";
import ContactUs from "@/components/ContactUs";
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
     <ContactUs />
    </>
  );
}

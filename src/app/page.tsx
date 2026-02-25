import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";


export const metadata = {
  title: "CETify | Analytics for MHT-CET Coaching Institutes",
  description:
  "CETify is a B2B assessment and analytics platform for MHT-CET coaching institutes. Contact: admin@cetify.in",
  openGraph: {
    title: "CETify | Built for MHT-CET Coaching Institutes",
    description:
      "A faculty-focused analytics platform to identify batch weaknesses and improve CET performance.",
    url: "https://cetify.in",
    siteName: "CETify",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />

      <section className="py-16 bg-gray-50 dark:bg-gray-dark">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Contact CETify
          </h2>
          <p className="mb-2 text-body-color dark:text-body-color-dark">
            For institute demos, partnerships, or queries
          </p>
          <a
            href="mailto:admin@cetify.in"
            className="text-lg font-semibold text-primary hover:underline"
          >
            admin@cetify.in
          </a>
        </div>
      </section>
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}

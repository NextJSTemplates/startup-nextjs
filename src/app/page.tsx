import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import JobPreview from "@/components/JobPreview";
import GuidesPreview from "@/components/GuidesPreview";
import ToolsPreview from "@/components/ToolsPreview";
// import CTA from "@/components/CTA";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Assistant Video Editor",
            "description": "The premier platform for Assistant Video Editor careers",
            "url": "https://assistantvideoeditor.com",
            "logo": "https://assistantvideoeditor.com/images/logo/logo.svg",
            "sameAs": [
              "https://twitter.com/assistantvideoeditor",
              "https://github.com/assistantvideoeditor"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@assistantvideoeditor.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Assistant Video Editor Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Job Listings",
                    "description": "Find Assistant Video Editor positions across different categories"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Career Guidance",
                    "description": "Comprehensive resources for skill development and career growth"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Tools & Resources",
                    "description": "Free software, templates, and career tools for Assistant Video Editors"
                  }
                }
              ]
            }
          })
        }}
      />
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <JobPreview />
      <GuidesPreview />
      <ToolsPreview />
      {/* <CTA /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}

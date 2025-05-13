"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const industriesData = {
  "E-Commerce": {
    description:
      "e-Commerce is one of the fastest growing business models as every retail business is reaching the digital landscape. Build a scalable and robust e-store with an experienced team. Grow with proper cart management, payment integration, social media integration, order management, tracking, and product management to reach greater heights.",
  },
  Education: {
    description:
      "Empower learning with custom eLearning platforms, LMS solutions, and virtual classrooms. We build engaging and scalable education software tailored for institutions and edtech startups.",
  },
  Healthcare: {
    description:
      "From appointment scheduling to telemedicine and EHR systems, we build secure and compliant healthcare software to revolutionize patient care and streamline workflows.",
  },
  "Real Estate": {
    description:
      "Leverage tech in real estate with dynamic listing platforms, virtual tours, CRM systems, and property management tools to drive smarter decisions and faster sales.",
  },
  NFT: {
    description:
      "Launch your NFT platform with seamless minting, wallet integration, and smart contract functionality. We help you build secure, scalable, and user-friendly NFT ecosystems.",
  },
  Travel: {
    description:
      "We develop feature-rich travel portals, booking engines, itinerary planners, and real-time tracking systems that redefine user travel experiences.",
  },
  Food: {
    description:
      "Build online food ordering, delivery management, and restaurant POS systems with smooth UI, live tracking, and integrations with popular platforms.",
  },
  Entertainment: {
    description:
      "Deliver immersive entertainment through streaming platforms, media apps, and interactive experiences tailored for today’s digital audience.",
  },
};

export default function IndustriesSection() {
  const [industry, setIndustry] = useState("E-Commerce");
  const current = industriesData[industry];
  return (
    <section className="pt-24">
      <SectionTitle 
        title="Industries We Serve"
       />

      <div className="container mx-auto max-w-6xl">
        <div className="mt-6 flex flex-wrap gap-4 px-8">
          {Object.keys(industriesData).map((item) => (
            <button
              key={item}
              onClick={() => setIndustry(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                item === industry
                  ? "bg-black text-white"
                  : "border-black text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 px-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">{industry}</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {current.description}
            </p>
            <button className="mt-6 rounded-full border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
              Get A Free Quote
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about/ecommerce.svg"
              alt={`${industry} Image`}
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className=" mt-20 bg-gradient-to-br from-black to-neutral-500 px-8 py-12 text-white">
        <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl max-w-md leading-snug font-bold">
              More Than 5 Years
               In The Game And We're Just Getting Started.
            </h3>
            <p className="max-w-md text-sm text-gray-300">
              We are on a mission to build a brand with the goal of providing
              quality IT development. Our team takes every project like it’s our
              first and works on it like specialists. With 5+ years of
              experience, we have served clients in every type of industry and
              have rich knowledge in the field.
            </p>
            <div className="font-bold grid grid-cols-2 gap-6 ">
              {[
                ["40+", "Websites Designed"],
                ["100+", "Apps Approved"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg bg-white p-4 text-start text-black shadow transition hover:scale-105"
                >
                  <p className="text-xl">{value}</p>
                  <p className="mt-1 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["5+", "Years of Experience"],
              ["50+", "Developers"],
              ["100+", "Happy Clients"],
              ["20+", "Countries"],
              ["10+", "AI & IoT Solutions"],
              ["10+", "Blockchain"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="font-bold rounded-lg bg-white p-4 text-start text-black shadow transition hover:scale-105"
              >
                <p className="text-xl">{value}</p>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

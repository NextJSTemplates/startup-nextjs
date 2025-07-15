"use client";
import React from "react";
import { statistics } from "./statisticsData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Statistics = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className=" bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col space-y-12 text-background">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-end aspect-video rounded-lg bg-white/5 backdrop-blur-sm p-6 transition relative"
              >
                <h1 className="text-4xl md:text-5xl font-semibold mb-2">{stat.value}</h1>
                <p className="text-background/70">{stat.label}</p>
              </div>
            ))}
            <div
              className="relative flex justify-end items-end text-end pb-4 pe-4 aspect-video"
            >
              <Link href="/" className="flex gap-2 text-xl text-background/70">About Us
                <span>
                  <ArrowRight className="size-6" />
                </span>
              </Link>
            </div>
          </div>
          <p className="max-w-3xl mb-6 text-background/70">
            As a trusted software development partner, we help companies worldwide turn complex challenges into practical digital solutions. For more than ten years, clients across North America, Europe, Asia, and Australia have relied on us — from ambitious startups to established global brands.
            <br /><br /> We handle every stage of the journey, from consulting and development to long-term support. Our promise is simple: we listen, plan, and build software that meets your goals and delivers real results — nothing unnecessary, just technology that works for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

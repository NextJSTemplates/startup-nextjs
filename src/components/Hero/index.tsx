"use client"

import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import React from "react";
const words = ["Scalable", "Secure", "Smarter"];

export const Hero = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden flex flex-col justify-center bg-background text-foreground pt-[260px] pb-16 md:pt-[220px] lg:h-screen xl:pt-[180px]">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[350px] h-[350px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[300px] h-[300px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center lg:max-w-6xl md:max-w-8xl">
          <h1 className="mb-6 text-2xl sm:text-3xl leading-tight font-extrabold md:text-4xl lg:text-6xl flex items-center gap-4">

            <span className="flex items-center gap-2">
              We Build{" "}
              <span className="inline-block">
                <FlipWords words={words} className="font-bold" />
              </span>
            </span>
            Software
          </h1>

          <p className="mb-8 w-full  md:max-w-md lg:max-w-xl">
            Certified software experts blending precision and creativity to deliver powerful, affordable solutions tailored to your business. End-to-end development, seamless integration, and ongoing support — all at unmatched value.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              {
                label: "LET'S TALK",
                icon: <ExternalLink className="ml-1.5 h-3.5 w-3.5" />,
              },
              {
                label: "CONTACT US FOR SOLUTIONS",
                icon: <ExternalLink className="ml-1.5 h-4 w-4" />,
              },
              {
                label: "OUR SERVICES",
                icon: <ArrowRight className="ml-1.5 h-4 w-4" />,
              },
            ].map((btn, idx) => (
              <div key={idx}>
                <Button
                  borderRadius="1.75rem"
                  className="border-neutral-300 bg-white px-4 text-[12px] font-bold text-black dark:border-slate-800 dark:bg-black dark:text-white"
                >
                  {btn.label} {btn.icon}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

"use client"

import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import React from "react";

const words = ["Scalable", "Secure", "Smarter"];

export const Hero = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden flex flex-col justify-center bg-background text-foreground pt-32 md:pt-40 lg:pt-20 lg:h-screen min-h-screen">
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

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-5xl">
          <div className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <span className="whitespace-nowrap">We Build</span>
              <div className="w-32 sm:w-40 md:w-48 lg:w-56 flex justify-center">
                <FlipWords words={words} className="font-bold" />
              </div>
              <span className="whitespace-nowrap">Software</span>
            </div>
          </div>

          <p className="mb-8 text-sm md:text-base max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Certified software experts blending precision and creativity to deliver powerful, affordable solutions tailored to your business. End-to-end development, seamless integration, and ongoing support — all at unmatched value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full max-w-3xl">
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
              <div key={idx} className="flex-shrink-0">
                <Button
                  borderRadius="1.75rem"
                  className="border-neutral-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-black dark:border-slate-800 dark:bg-black dark:text-white transition-all duration-300"
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
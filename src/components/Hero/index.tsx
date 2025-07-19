"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
const words = ["Scalable", "Secure", "Intelligent"];

export const Hero = () => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden pt-[160px] pb-24 md:pt-[160px] md:pb-[32px] lg:h-screen xl:pt-[160px] xl:pb-[60px] 2xl:pt-[180px] 2xl:pb-[80px] bg-background text-foreground"
      >
        <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl flex flex-col justify-center items-center">

          <div
            className="mb-6 flex gap-3 text-[13.5px] font-bold tracking-widest uppercase"
          >
            {["Empower.", "Innovate.", "Transform"].map((word, idx) => (
              <span key={idx}>
                {word}
              </span>
            ))}
          </div>

          <h1
            className="mb-6 max-w-3xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl flex "
          >
            We Build{" "}
            <span className="flex items-center gap-2">
              <span className="inline-block min-w-[7ch]">
                <FlipWords words={words} className="font-bold" />
              </span>
            </span>
            Software
          </h1>

          <p
            className="mb-8 w-full max-w-sm md:max-w-md lg:max-w-xl"
          >
            Certified software experts blending precision and creativity
            to deliver powerful, affordable solutions tailored to your
            business. End-to-end development, seamless integration, and
            ongoing support — all at unmatched value.
          </p>

          <div
            className="flex flex-wrap gap-4"
          >
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
              <div
                key={idx}
              >
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
      </section>
    </>
  );
};

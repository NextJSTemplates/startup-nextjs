import { Scene } from "@/components/hero-section";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useEffect, useState } from "react";
const words1 = [

  {
    text: "Innovation"
  }
]
const words2 = [
  {
    text: "Integrity",
    className: "text-primary"
  }
]
const Hero = () => {
  return (
    <div className="min-h-svh bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center justify-center flex-col ">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold max-w-3xl flex gap-2">
              Driven by {" "} <TypewriterEffectSmooth words={words1} />
            </h1>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold max-w-3xl flex gap-2">
              Defined by {" "} {<TypewriterEffectSmooth words={words2} />}
            </h1>
            <p className="text-sm md:text-base text-neutral-300 md:max-w-xl lg:max-w-2xl my-6">
              At Classy Endeavors, we&apos;re more than a software development agency — we&apos;re your strategic technology partner. With a passionate team of designers, developers, and engineers, we craft scalable, user-focused solutions that align with your business goals. From idea to execution, we commit to transparency, quality, and long-term impact
            </p>
            <Button
              borderRadius="1.75rem"
              asChild
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
            >
              <Link href="#contact" className="mx-4">Let&apos;s Bring Your Ideas to Action</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute inset-0'>
        <Scene />
      </div>
    </div>
  );
};

export default Hero
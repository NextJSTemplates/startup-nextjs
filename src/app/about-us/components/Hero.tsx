"use client"

import { Scene } from "@/components/hero-section";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useLanguage } from "@/components/Header";
const Hero = () => {
    const { t } = useLanguage();
  const words1 = [
    {
      text: t("aboutInnovation")
    }
  ];

  const words2 = [
    {
      text: t("aboutIntegrity"),
      className: "text-primary"
    }
  ];
  return (
    <div className="h-screen bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center justify-center flex-col ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold flex gap-2">
              {t("aboutDrivenBy")} {" "} <TypewriterEffectSmooth words={words1} />
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold flex gap-2">
              {t("aboutDefinedBy")} {" "} {<TypewriterEffectSmooth words={words2} />}
            </h1> 
            <p className="text-sm md:text-base text-neutral-300 md:max-w-xl lg:max-w-2xl my-6">
              {t("aboutDescription")}
            </p>
            <Button
              borderRadius="1.75rem"
              asChild
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
            >
              <Link href="#contact" className="mx-4">{t("aboutCTA")}</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
        <Scene />
      </div>
    </div>
  );
};

export default Hero
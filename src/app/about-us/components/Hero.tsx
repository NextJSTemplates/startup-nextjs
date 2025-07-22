import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";
import { Scene } from "@/components/hero-section";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },

];

const Hero = () => {
  return (
    <div className="min-h-svh bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className="text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Driven by Innovation. Defined by Integrity
            </h1>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl">
              At Classy Endeavors, we're more than a software development agency — we're your strategic technology partner. With a passionate team of designers, developers, and engineers, we craft scalable, user-focused solutions that align with your business goals. From idea to execution, we commit to transparency, quality, and long-term impact
            </p>
            <Button
              borderRadius="1.75rem"
              asChild
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
            >
              <Link href="#contact">Let&apos;s Bring Your Ideas to Action</Link>
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";
import { Scene } from "../hero-section";

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

const NewHero = () => {
  return (
    <div className="min-h-svh bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
            ✨ Next Generation Tools
          </Badge>

          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              We Build
              Secure
              Software
            </h1>
            <p className="text-base max-w-2xl">
              Certified software experts blending precision and creativity to deliver powerful, affordable solutions tailored to your business. End-to-end development, seamless integration, and ongoing support — all at unmatched value.
            </p>
            <Button className="text-base font-medium px-8 py-6 rounded-full bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
              Get Started
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
            >
              <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
              <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute inset-0'>
        <Scene />
      </div>
    </div>
  );
};

export { NewHero };
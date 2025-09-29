"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const NeuralNetwork = () => {
  const nodes = [
    { x: 50, y: 50 },
    { x: 200, y: 40 },
    { x: 350, y: 80 },
    { x: 120, y: 150 },
    { x: 250, y: 180 },
    { x: 80, y: 250 },
    { x: 320, y: 260 },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [2, 6],
  ];

  return (
    <svg viewBox="0 0 400 300" className="w-[90%] max-w-[420px] h-auto">
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#48937E"
          strokeWidth="1.5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 4,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="6"
          fill="#48937E"
          filter="url(#glow)"
          animate={{
            r: [6, 9, 6],
            opacity: [0.6, 1, 0.6],
            cx: [n.x, n.x + (Math.random() * 8 - 4), n.x],
            cy: [n.y, n.y + (Math.random() * 8 - 4), n.y],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

const Typewriter = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
      {displayed}
    </span>
  );
};

const Hero = () => {
  const { messages } = useLanguage();

  return (
    <section className="relative bg-white dark:bg-black overflow-hidden h-screen pt-32 sm:pt-28 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-center h-full pb-12 sm:pb-8 lg:pb-0">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 py-8 sm:py-12 lg:py-20 text-center lg:text-left order-2 lg:order-1">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight tracking-tight">
            <Typewriter text={messages.hero.title} />
            <span className="block text-[#48937E] mt-2">
              {messages.hero.subtitle}
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {messages.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/blog"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-[#48937E] text-white hover:bg-[#367463] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[180px] sm:min-w-[200px] text-center"
            >
              {messages.hero.ctaServices}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 border-[#48937E] text-[#48937E] hover:bg-[#48937E] hover:text-white transition-all duration-300 min-w-[180px] sm:min-w-[200px] text-center"
            >
              {messages.hero.ctaContact}
            </Link>
          </div>
        </div>

        {/* Visual Content */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] flex items-center justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
          <NeuralNetwork />
        </div>
      </div>
    </section>
  );
};

export default Hero;

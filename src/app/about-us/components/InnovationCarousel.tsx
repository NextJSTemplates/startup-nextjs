"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import React, { useState } from "react";

type Innovation = {
  id: number;
  title: string;
  logo: string;
};

const innovations: Innovation[] = [
  {
    id: 1,
    title: "CONVOON",
    logo: "/images/brands/lyber.svg",
  },
  {
    id: 2,
    title: "CloudSuite",
    logo: "/images/brands/oktopi.svg",
  },
  {
    id: 3,
    title: "CODE VISTA",
    logo: "/images/brands/taxi.svg",
  },
  {
    id: 4,
    title: "happyhr.ai",
    logo: "/images/brands/way.svg",
  },
  {
    id: 5,
    title: "MAIA",
    logo: "/images/brands/way.svg",
  },
];

const InnovationsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 200; // circle radius

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <SectionTitle title="Our Innovations" className="text-2xl md:text-3xl mb-6" />
      <p className="text-center max-w-xl mb-6 text-[13px]">
        Discover our innovation – our IPs and Accelerators to create extra
        value for our clients across different verticals, and to further enhance
        the efficiency of our own operations.
      </p>

      <div className="relative w-full h-[500px]">
        {innovations.map((item, index) => {
          // calculate relative position around circle
          const angle = ((2 * Math.PI) / innovations.length) * (index - activeIndex);
          const x = radius * Math.sin(angle);
          const y = -radius * Math.cos(angle); // negative to start from top

          const isActive = index === activeIndex;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute flex flex-col items-center cursor-pointer transition-transform duration-500 ${
                isActive ? "scale-110 z-20" : "scale-100 z-10"
              }`}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={16}
                height={16}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-xs font-semibold text-center w-max">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InnovationsCarousel;

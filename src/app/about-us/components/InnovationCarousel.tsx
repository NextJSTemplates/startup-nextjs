"use client";

import React from "react";

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
  const radius = 100; // adjust for bigger/smaller arc

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-semibold mb-4">Our Innovations</h1>
      <p className="text-center max-w-xl mb-6 text-sm">
        Discover our innovation – our IPs and Accelerators to create extra
        value for our clients across different verticals, and to further enhance
        the efficiency of our own operations.
      </p>

      <div className="relative w-[500px] h-[250px]">
        {innovations.map((item, index) => {
          // spread items evenly over 180 degrees (π radians)
          const angle = Math.PI * (index / (innovations.length - 1));
          const x = radius * Math.cos(angle - Math.PI); // shift so it starts at left
          const y = radius * Math.sin(angle - Math.PI);

          return (
            <div
              key={item.id}
              className="absolute flex flex-col items-center"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={item.logo}
                alt={item.title}
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
}

export default InnovationsCarousel
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "./testimonialsData";

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-12 py-48">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-6xl overflow-x-visible px-10">
        <div className="mx-auto grid scale-[1.05] grid-cols-1 gap-6 opacity-25 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border bg-neutral-200 p-6 shadow"
            >
              <p className="line-clamp-4 text-xs font-medium text-black">
                {testimonial.body}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-[10px] text-black">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-30 max-w-7xl px-4 text-center">
        <div className="absolute -top-16 left-1/2 z-0 w-80 h-88 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full border-none bg-gradient-to-b from-neutral-200 via-white/50 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src={activeTestimonial.img}
            alt={activeTestimonial.name}
            width={90}
            height={90}
            className="mb-6 rounded-full"
          />
          <blockquote className="max-w-xl h-30 sm:h-20 text-center px-4 text-xs sm:text-sm font-semibold text-black">
            “{activeTestimonial.body}”
          </blockquote>
          <div className="px-4 text-xs sm:text-sm font-medium text-black">
            {activeTestimonial.name}
            <span className="">– {activeTestimonial.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

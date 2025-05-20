"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reviews } from "./reviewsData";

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeReview = reviews[activeIndex];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-12 py-48">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl overflow-x-visible px-10">
        <div className="mx-auto grid scale-[1.05] grid-cols-1 gap-6 opacity-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl border bg-neutral-200 p-6 shadow"
            >
              <p className="line-clamp-4 text-xs font-medium text-gray-800">
                {review.body}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-[10px] text-gray-600">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-30 max-w-7xl px-4 text-center">
        <div className="absolute -top-16 left-1/2 z-0 w-80 h-88 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full border-none bg-gradient-to-b from-neutral-200 via-white/30 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src={activeReview.img}
            alt={activeReview.name}
            width={80}
            height={80}
            className="mb-6 rounded-full"
          />
          <blockquote className="max-w-xl h-30 sm:h-20 text-center px-4 text-xs sm:text-sm font-semibold text-black">
            “{activeReview.body}”
          </blockquote>
          <div className="px-4 text-xs sm:text-sm font-medium text-gray-700">
            {activeReview.name}
            <span className="">– {activeReview.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

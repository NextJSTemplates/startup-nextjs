"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reviews } from "./reviewsData";

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeReview = reviews[activeIndex];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background testimonials */}
      <div className="pointer-events-none absolute inset-0 grid scale-[1.05] grid-cols-5 gap-6 opacity-20">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-xl border bg-neutral-200 p-4 shadow"
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

      <div className="relative z-10 max-w-2xl rounded-full bg-gradient-to-b from-neutral-200 to-transparent p-10 text-center">
        <Image
          src={activeReview.img}
          alt={activeReview.name}
          width={60}
          height={60}
          className="mx-auto mb-4 rounded-full"
        />
        <blockquote className="text-xl font-semibold text-black">
          “{activeReview.body}”
        </blockquote>
        <div className="mt-4 text-sm font-medium text-gray-700">
          {activeReview.name}{" "}
          <span className="text-gray-500">– {activeReview.description}</span>
        </div>

        {/* Name pills below */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {reviews.map((r, i) => (
            <span
              key={r.name}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                i === activeIndex
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {r.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

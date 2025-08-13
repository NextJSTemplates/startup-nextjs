"use client";

import React, { useEffect, useRef } from "react";
import { CaseStudy } from "@/types";

const CaseStudiesCard = ({caseStudies}: {caseStudies: CaseStudy[]}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isScrolling = false;
      container.style.cursor = 'grab';
    };

    const handleMouseDown = (e: MouseEvent) => {
      isScrolling = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isScrolling = false;
      container.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isScrolling = false;
      container.style.cursor = 'grab';
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    container.style.cursor = 'grab';

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="hide-scrollbar flex w-full gap-6 overflow-x-auto select-none"
      style={{
        scrollBehavior: "smooth",
        touchAction: "pan-x",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {caseStudies.map((casestudy, index) => (
        <div
          key={index}
          className="group relative flex max-w-md shrink-0 snap-start flex-col justify-between rounded-lg border border-primary/50 overflow-hidden transition-all duration-300  hover:shadow-[0_0_10px_rgba(13,148,136,0.4)]"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="overflow-hidden relative h-48 w-full">
            <img
              className="transform object-cover transition-all duration-300 group-hover:scale-125"
              src={casestudy.image}
              alt={casestudy.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <div className="max-w-md">
              <h1 className="font-medium text-muted-foreground break-words break-all whitespace-normal">
                {casestudy.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 max-w-md">
              {casestudy.categories.map((item_, index) => {
                return (
                  <a key={index}
                    className="text-sm text-primary border p-4 hover:text-primary"
                    href="contact">#{item_}</a>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesCard;
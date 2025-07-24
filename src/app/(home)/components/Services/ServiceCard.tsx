"use client";

import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { getServices } from "./serviceData";
import Link from "next/link";
import { useLanguage } from "@/components/Header"; // Update this path based on your project structure

const ServiceCard = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get services with translated content
  const services = getServices(t);

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
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group relative flex min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-lg border border-primary/50 p-6 sm:min-w-[320px] overflow-hidden transition-all duration-300 text-foreground/80 hover:shadow-[0_0_10px_rgba(13,148,136,0.4)]"
            style={{ pointerEvents: 'auto' }} 
          >
            <div>
              <div className="mt-4 mb-10 flex items-center justify-start text-start gap-2">
                <Icon className="size-5 stroke-2" />
                <h3 className="font-medium text-base">{service.title}</h3>
              </div>
              <ul className="space-y-6">
                {service.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <Icon className="h-5 w-5 stroke-2" />
                      <span>{item.desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-24 flex justify-between items-center">
              <Link 
                href="/about-us" 
                className="z-10 font-medium touch-manipulation"
                onClick={(e) => e.stopPropagation()} 
              >
                {t("learnMore")}
              </Link>
              <ArrowRight className="size-4.5 z-10 text-primary hover:scale-[1.1] transition duration-200 cursor-pointer touch-manipulation" />
            </div>

            <div className="absolute bottom-0 right-0 h-full w-full pointer-events-none overflow-hidden">
              <div className="absolute bottom-0 right-0 w-[80px] h-[80px] clip-diagonal transition-all duration-300 group-hover:clip-none"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
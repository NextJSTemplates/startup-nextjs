"use client";

import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { services } from "./serviceData";
import Link from "next/link";

const ServiceCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

  }, []);
  return (
    <div
      ref={scrollRef}
      className="hide-scrollbar flex w-full gap-6 overflow-x-auto"
      style={{
        scrollBehavior: "smooth",
        touchAction: "pan-y",
        whiteSpace: "nowrap",
      }}
    >
      {[...services].map((service, index) => {
        const Icon = service.icon;
        return (

          <div
            key={index}
            className="group relative flex min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-lg bg-neutral-50 border border-border/50 p-6 sm:min-w-[320px] overflow-hidden transition-all duration-300"
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
              <Link href="/about-us" className="z-10 font-medium">Learn More</Link>
              <ArrowRight className="size-4.5 z-10 text-primary hover:scale-[1.1] transition duration-200 cursor-pointer" />
            </div>

            {/* Diagonal corner piece */}
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


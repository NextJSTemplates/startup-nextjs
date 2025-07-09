"use client";

import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { services } from "./serviceData";
import { Button } from "../ui/button";

const ServiceCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = container.offsetWidth * 0.7;
    let scrollPos = 0;

    const scroll = () => {
      if (!container) return;

      scrollPos += scrollStep;

      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
        container.scrollLeft = 0;
      }

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scroll, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
      <div
        ref={scrollRef}
        className="hide-scrollbar flex w-full max-w-7xl px-6 gap-6 overflow-x-auto lg:mx-auto"
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
              className="flex min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-lg bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-50 p-6 sm:min-w-[320px] border border-border"
            >
              <div>
                <div className="mt-4 mb-10 flex items-center justify-start text-start gap-2">
                  <Icon className="size-5 stroke-2" />
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
                <ul className="space-y-6 text-sm">
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
              <div className="mt-24">
                <Button className="rounded-full cursor-pointer text-sm p-5">
                  Explore More <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default ServiceCard;

"use client";
import { FC, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import { services } from "./serviceData";
import Image from "next/image";

const ScrollableServices: FC = () => {
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
    <section id="services" className="relative z-10 pt-24">
      <SectionTitle
        title="Your Partner for Custom Apps, Automation & Seamless Support"
        width="80%"
      />

      <div className="w-full px-4 sm:px-6">
        <div
          ref={scrollRef}
          className="hide-scrollbar flex w-full max-w-7xl gap-6 overflow-x-auto pb-6 lg:mx-auto"
          style={{
            scrollBehavior: "smooth",
            touchAction: "pan-y",
            whiteSpace: "nowrap",
          }}
        >
          {[...services].map((service, index) => (
            <div
              key={index}
              className="flex min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-md bg-gradient-to-b  from-neutral-100 via-white to-neutral-100 shadow-sm px-6 py-6 text-white shadow-m sm:min-w-[320px] lg:min-w-[320px]"
            >
              <div>
                <h3 className="mt-4 mb-8 font-semibold text-black">{service.title}</h3>
                <ul className="space-y-6 text-sm text-black/90">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <Image
                        src={item.icon}
                        alt="logo"
                        width={10}
                        height={10}
                        className="h-5 w-5"
                      />
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-24">
                <button className="flex cursor-pointer items-center gap-2 rounded-full bg-neutral-200 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
                  Explore More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollableServices;

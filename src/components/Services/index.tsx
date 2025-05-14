import { FC } from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import { services } from "./serviceData";
import Image from "next/image";

const ScrollableServices: FC = () => {
  return (
    <section id="services" className="relative z-10 pt-16">
      <SectionTitle
        title="Boosting business growth with our specialized expertise and innovative
          solutions"
        width="80%"
      />

      <div
        className="hide-scrollbar container mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-0"
        style={{ scrollBehavior: "smooth", touchAction: "pan-y" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex w-80 shrink-0 snap-start flex-col justify-between rounded-2xl bg-gradient-to-br from-black via-black to-neutral-500 px-8 py-6 text-white shadow-lg"
          >
            <div>
              <h3 className="mb-8 font-semibold">{service.title}</h3>
              <ul className="space-y-6 text-sm text-white/90">
                {service.items.map((item, i) => {
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <Image
                        src={item.icon}
                        alt="logo"
                        width={10}
                        height={10}
                        className="h-4 w-4"
                      />
                      <span>{item.desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-24">
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                Explore More <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollableServices;

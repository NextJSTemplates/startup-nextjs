import { FC } from "react";
import {
  ArrowRight,
  Code,
  Shield,
  Brain,
  Smartphone,
  Palette,
  Megaphone,
  Section,
} from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    title: "Software Security",
    items: [
      { icon: Shield, desc: "Custom app development" },
      { icon: Smartphone, desc: "iOS app development" },
      { icon: Smartphone, desc: "Android app development" },
      { icon: Shield, desc: "Native App" },
      { icon: Smartphone, desc: "Hybrid app development" },
      { icon: Smartphone, desc: "Flutter app development" },
    ],
  },
  {
    title: "Integrate And AI Model",
    items: [
      { icon: Brain, desc: "AI/ML development" },
      "Software redesign",
      { icon: Palette, desc: "UI/UX consulting services" },
      "Cross-platform experience design",
      "AR experience UI/UX design",
      "Wireframe design",
    ],
  },
  {
    title: "Marketing Solutions",
    items: [
      { icon: Megaphone, desc: "Search Engine Optimisation" },
      "Social Media Marketing",
      "PPC Management",
      "Content Marketing",
      { icon: Palette, desc: "Graphic design & logo design" },
      "Email Marketing",
    ],
  },
  {
    title: "SaaS Development",
    items: [
      "Multi-tenant architecture",
      { icon: Code, desc: "API Integration" },
      "Subscription & billing systems",
      "Cloud-native deployment",
      "Performance optimization",
    ],
  },
  {
    title: "Digital Transformation",
    items: [
      "Legacy system modernization",
      "Cloud migration",
      "DevOps automation",
      "IT infrastructure consulting",
      "Digital workplace setup",
    ],
  },
];

const ScrollableServices: FC = () => {
  return (
    <section className="pt-24">
    <SectionTitle 
    title="Boosting business growth with our specialized expertise and innovative
          solutions"
    width="90%"
    />

      <div
        className=" hide-scrollbar container mx-auto max-w-6xl flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-0"
        style={{ scrollBehavior: "smooth", touchAction: "pan-y" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex w-80 shrink-0 snap-start flex-col justify-between rounded-2xl bg-gradient-to-br from-black to-neutral-500 p-6 text-white shadow-lg"
          >
            <div>
              <h3 className="mb-8 text-lg font-semibold">{service.title}</h3>
              <ul className="space-y-6 text-sm text-white/90">
                {service.items.map((item, i) => {
                  const isObject = typeof item === "object";
                  const Icon = isObject && item.icon ? item.icon : null;
                  const description = isObject ? item.desc : item;

                  return (
                    <li key={i} className="flex items-center gap-4">
                      {Icon ? (
                        <Icon size={16} className="text-white" />
                      ) : (
                        <span>•</span>
                      )}
                      <span>{description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-24">
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90">
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

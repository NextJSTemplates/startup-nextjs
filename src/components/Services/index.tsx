import { FC } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Software Security",
    items: [
      "Custom app development",
      "iOS app development",
      "Android app development",
      "Native App",
      "Hybrid app development",
      "Flutter app development",
    ],
  },
  {
    title: "Integrate And AI Model",
    items: [
      "Web and app UI/UX design",
      "Software redesign",
      "UI/UX consulting services",
      "Cross-platform experience design",
      "AR experience UI/UX design",
      "Wireframe design",
    ],
  },
  {
    title: "Intermodal SaaS Solutions",
    items: [
      "Search Engine Optimisation",
      "Social Media Marketing",
      "PPC Management",
      "Content Marketing",
      "Graphic design & logo design",
      "Email Marketing",
    ],
  },
  {
    title: "Intermodal SaaS Solutions",
    items: [
      "Search Engine Optimisation",
      "Social Media Marketing",
      "PPC Management",
      "Content Marketing",
      "Graphic design & logo design",
      "Email Marketing",
    ],
  },
  {
    title: "Intermodal SaaS Solutions",
    items: [
      "Search Engine Optimisation",
      "Social Media Marketing",
      "PPC Management",
      "Content Marketing",
      "Graphic design & logo design",
      "Email Marketing",
    ],
  },
  // Add more if needed...
];

const ScrollableServices: FC = () => {
  return (
    <section className="pt-24">
      <div className="mb-12 w-[60%] rounded-se-[70px] bg-black py-6 text-white text-center shadow-md">
          <h2 className="text-2xl font-bold">Amazing technologies we use, helpful for your business</h2>
      </div>

        <div
          className=" container flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 px-4 sm:px-0"
          style={{ scrollBehavior: "smooth", touchAction: "pan-y" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-80 rounded-2xl bg-gradient-to-br from-black to-neutral-800 text-white p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-3 text-sm text-white/90">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button className="bg-white text-black px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition">
                  Explore More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ScrollableServices;

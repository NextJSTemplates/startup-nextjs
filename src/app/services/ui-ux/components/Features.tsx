"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import Image from "next/image";

const services = [
  { title: "Mobile app design", icon: "/images/services/uiux/mobile-app-design.svg" },
  { title: "Motion design", icon: "/images/services/uiux/motion-design.svg" },
  { title: "Graphic design", icon: "/images/services/uiux/graphic-design.svg" },
  { title: "Branding", icon: "/images/services/uiux/branding.svg" },
  { title: "Experience design", icon: "/images/services/uiux/exp-design.svg" },
  { title: "Print design", icon: "/images/services/uiux/print-design.svg" },
  { title: "Web app design", icon: "/images/services/uiux/web-app-design.svg" },
  { title: "3D design and animation", icon: "/images/services/uiux/3d-anim.svg" },
  { title: "Information design", icon: "/images/services/uiux/info-design.svg" },
];

const Features = () => {
  return (
    <section className="bg-[#F4F6FC] mt-20">
      <Section className="pb-20">
        <SectionTitle title="Everything we cover" className="text-2xl md:text-3xl" />
        <p className="max-w-2xl text-gray-700 mb-12">
          From digital interfaces to immersive experiences, Innowise can help. Whether it’s product design,
          branding, or 3D animation, our team brings ideas to life with creativity and precision.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded col-span-1 row-span-3 flex flex-col justify-between">
            <p className="text-lg mb-4">Product design</p>
            <Image src="/images/services/uiux/product-design.svg" alt="Product design" width={100} height={100} className="w-full object-contain" />
          </div>

          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded flex items-center justify-between h-fit">
              <p className="text-lg">{service.title}</p>
              <Image src={service.icon} alt={service.title} width={70} height={70} />
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

export default Features
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  CloudUpload,
  Database,
  GaugeCircle,
  MonitorSmartphone,
} from "lucide-react";
const HowWeWork = () => {
  return (
    <section className="relative z-10 py-16 pb-4 md:pt-20 lg:pt-24">
      <div className="relative px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/services/mvp/CoffeeVending.svg"
            alt="Coffee vending background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mx-auto max-w-6xl">
          <h3 className="text-white mb-8 text-center text-3xl font-bold">
            How We Develop Your NVP
          </h3>
          
          <div className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 md:grid-cols-3">
            
            {[
              {
                title: "System and Software Improvements",
                icon: <MonitorSmartphone className="mb-2 h-6 w-6 text-white" />,
                desc: "Modernize outdated software and systems to improve protection, resiliency, processes, and performance. We align tech platforms and software updates to keep your stack efficient.",
              },
              {
                title: "Platform Upgrades and Cloud Migrations",
                icon: <CloudUpload className="mb-2 h-6 w-6 text-white" />,
                desc: "Get your infrastructure ready for tomorrow. We evaluate, migrate, and enhance your stack to support your business needs while minimizing disruption.",
              },
              {
                title: "End-to-End Data Migration",
                icon: <Database className="mb-2 h-6 w-6 text-white" />,
                desc: "Upgrade and move structured data without hassle, backed by our skilled support to handle everything from compliance to latency concerns.",
              },
              {
                title: "Performance Optimization and Enhancement",
                icon: <GaugeCircle className="mb-2 h-6 w-6 text-white" />,
                desc: "Unlock new scalability for the systems you rely on. We continuously optimize performance and reliability through infrastructure audits and software refinement.",
              },
              {
                title: "End-to-End Data Migration",
                icon: <Database className="mb-2 h-6 w-6 text-white" />,
                desc: "Upgrade and move structured data without hassle, backed by our skilled support to handle everything from compliance to latency concerns.",
              },
              {
                title: "Performance Optimization and Enhancement",
                icon: <GaugeCircle className="mb-2 h-6 w-6 text-white" />,
                desc: "Unlock new scalability for the systems you rely on. We continuously optimize performance and reliability through infrastructure audits and software refinement.",
              },
            ].map(({ title, icon, desc }) => (
              <Card
                key={title}
                className="border-none bg-gray-900/40 backdrop-blur-md"
              >
                <CardContent className="p- flex flex-col gap-2 text-white">
                  {icon}
                  <h4 className="mb-1 text-lg font-semibold">{title}</h4>
                  <p className="text-xs leading-relaxed text-gray-300">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MonitorSmartphone,
  CloudUpload,
  Database,
  GaugeCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative p-12"
      >
        <Image
          src="/images/services/cloud/Background (2).svg"
          alt="Tech Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <h2 className="text-white mb-4 max-w-xs text-4xl leading-tight font-bold">
              Enhancement and Technology Refresh
            </h2>
            <p className="mb-6 max-w-md text-gray-200">
              Whether you&apos;re transitioning to new infrastructure or
              upgrading existing environments, we handle end-to-end
              modernization, security enhancements, and technology migrations to
              support your growth.
            </p>
            <Button
              className="bg-black/80 font-semibold text-white uppercase rounded-full border border-white/80 p-6"
            >
              Schedule a call
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            ].map(({ title, icon, desc }) => (
              <Card
                key={title}
                className="border-none bg-gray-900/80 backdrop-blur-md"
              >
                <CardContent className="p- text-white flex flex-col gap-2">
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
      </motion.div>
    </section>
  );
};

export default Features;

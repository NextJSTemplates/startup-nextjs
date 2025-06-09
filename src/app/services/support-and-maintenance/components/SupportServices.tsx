"use client";

import Image from "next/image";
import { CheckCircle, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SystemsServices() {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl px-8"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image
              src="/images/services/cloud/Dedicated Support.svg"
              alt="Control Room"
              width={100}
              height={100}
              className="w-110 rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Everything You Need, Right Here
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Classy Endeavors provides full-cycle software care—from initial
              diagnostics to long-term performance management. With over 15
              years of experience, we have handled 150+ global software systems
              and continuously help organizations minimize downtime and improve
              functionality.
            </p>
            <div className="flex space-x-6 rounded-lg bg-black p-8">
              <div className="border-r border-gray-200 bg-black text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-100">
                    Years of turning ideas into digital solutions
                  </div>
                </div>
              </div>
              <div className="rounded-none border-y-0 border-gray-500 bg-black text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-xs text-gray-100">Global Locations</div>
                </div>
              </div>
              <div className="border-l border-gray-200 bg-black text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-xs text-gray-100">
                    A talented team of tech pros
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="">
            <h3 className="mb-4 text-2xl font-bold">
              Systems We Maintain & Optimize
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              We ensure your systems maintain peak functionality with regular
              updates, stronger security protocols, and improved performance.
              Whether it’s cloud applications, AI/ML integrations, databases, or
              mobile apps, we’ve got it covered.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              {[
                { label: "Database apps", icon: "/images/services/cloud/icon1.svg" },
                { label: "Mobile apps", icon: "/images/services/cloud/icon2.svg" },
                { label: "AR/VR apps", icon: "/images/services/cloud/icon3.svg" },
              ].map(({ label, icon }) => (
                <Card
                  key={label}
                  className="rounded-lg text-center shadow-none"
                >
                  <CardContent className="flex flex-col items-center">
                    <Image
                      src={icon}
                      alt={`${label} icon`}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <div className="text-sm font-medium text-gray-700">
                      {label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-black p-8 text-white shadow-lg">
            <h4 className="mb-4 text-xl font-semibold">
              Comprehensive Services Include
            </h4>
            <ul className="space-y-4">
              {[
                "Real-Time Error Detection & Resolution",
                "Monitoring Compatibility with Latest Dependencies",
                "Avoiding Bug Buildup and Version Drift",
                "Proactive Updates and Performance Checks",
                "Implementing Improvements Based on Tech Roadmaps",
                "Achieving Enhanced ROI with Optimized Systems",
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

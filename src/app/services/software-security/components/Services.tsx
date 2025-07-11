import React from 'react'
import {
  MonitorCheck,
  Network,
  Headphones,
  Server,
  Users,
  ClipboardCheck
} from "lucide-react";
import Image from 'next/image';

const Services = () => {
  return (
    <section className="pt-20">
      <div className="relative z-10 py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/services/softwaresec/Software Security Background.svg"
            alt="Coffee vending background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-7xl rounded-lg px-6">
          <h1 className="mx-auto max-w-2xl text-center text-3xl leading-snug font-semibold mb-6 text-white">
            Security Services We Offer
          </h1>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: MonitorCheck,
                title: "Continuous Monitoring",
                description: "Real-time monitoring of network, security events, and system health."
              },
              {
                icon: Network,
                title: "Client IT Network Evaluation",
                description: "Evaluate existing environments and identify gaps."
              },
              {
                icon: Headphones,
                title: "On-Demand Support Services",
                description: "Fast-response troubleshooting and issue resolution."
              },
              {
                icon: Server,
                title: "OS and Server Migration",
                description: "Upgrade systems with minimal disruption."
              },
              {
                icon: Users,
                title: "Third-Party Maintenance",
                description: "Support and maintain external or legacy software."
              },
              {
                icon: ClipboardCheck,
                title: "Pre-Support Audit",
                description: "Diagnose current environments before launching support operations."
              }
            ].map(({ title, description, icon }) => {
              const Icon = icon
              return (
                (
                  <div className="bg-white p-6 rounded-lg flex gap-3" key={title}>
                    <div className="p-3 bg-black/10 rounded-full w-fit h-fit">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-md">{title}</h1>
                      <p className="text-sm">{description}</p>
                    </div>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services
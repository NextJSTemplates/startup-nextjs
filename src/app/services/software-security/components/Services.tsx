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
import SectionTitle from '@/components/Common/SectionTitle';

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
          <SectionTitle title="Security Services We Offer" className="text-white text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                  <div className="bg-white p-6 lg:p-7 rounded-lg flex flex-col gap-4" key={title}>
                      <Icon className="size-6 text-primary" />
                      <h1 className="font-semibold">{title}</h1>
                      <p>{description}</p>
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
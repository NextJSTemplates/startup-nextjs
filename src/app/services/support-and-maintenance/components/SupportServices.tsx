import React from 'react'
import {
  MonitorCheck,
  Network,
  Headphones,
  Server,
  Users,
  ClipboardCheck
} from "lucide-react";

const SupportServices = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container mx-auto max-w-6xl rounded-lg px-6">
        <h1 className="mx-auto max-w-2xl text-center text-3xl leading-snug font-semibold mb-4">
          Support Services
        </h1>
        <p className="text-sm mb-6 max-w-3xl mx-auto text-center">Our dedicated team handles all aspects of software and infrastructure support services to ensure consistent business continuity and IT performance.</p>
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
                <div className="bg-gradient-to-b from-neutral-100 via-neutral-100 to-transparent border border-border p-6 rounded-lg flex gap-3">
                  <div className="p-3 bg-red-200 rounded-full w-fit h-fit">
                    <Icon className="text-red-500 size-6" />
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
    </section>

  )
}

export default SupportServices
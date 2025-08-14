import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MonitorSmartphone,
  CloudUpload,
  Database,
  GaugeCircle,
} from "lucide-react";

type ShowcaseProps = {
  imageSrc: string;
  title: string;
  description: string;
  buttonCta: string;
}

const Showcase = ({imageSrc, title, description, buttonCta}: ShowcaseProps) => {
  return (
    <section className="relative z-1 mt-20">
      <div
        className="relative p-12"
      >
        <Image
          src={imageSrc}
          alt="Tech Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2 max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-white mb-4 max-w-xs text-3xl leading-tight font-semibold">
              {title}
            </h2>
            <p className="mb-6 max-w-md text-sm text-white">
              {description}
            </p>
            <Button
              className="bg-black text-white rounded-full border border-border p-6 text-sm"
            >
              {buttonCta}
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
                className="border-none bg-gray-900/80 backdrop-blur-md w-full"
              >
                <CardContent className="flex flex-col gap-2">
                  {icon}
                  <h4 className="mb-1 text-lg font-medium">{title}</h4>
                  <p>
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

export default Showcase;

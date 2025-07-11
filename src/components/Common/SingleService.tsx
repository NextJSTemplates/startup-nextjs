import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ServiceProps = {
  title: string;
  description: string;
  imageSrc: string;
  services: {
    label: string;
  }[];
  className?: string;
};

const SingleService = ({
  title,
  description,
  imageSrc,
  services,
  className = "",
}: ServiceProps) => {
  return (
    <div
      className={cn(
        "border-border flex flex-col gap-6 p-6 md:flex-row",
        className,
      )}
    >
      <div className="w-full md:w-[45%] aspect-video relative rounded-lg overflow-hidden">
        <div className="w-full h-full">
          <Image fill src={imageSrc} alt="Service Image" className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2 w-1/2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm max-w-2xl">{description}</p>
        <div className="mt-4 flex flex-col gap-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Image
                src="/images/services/blue-check.svg fill.svg"
                className="h-5 w-5"
                width={6}
                height={6}
                alt="Check"
              />
              <span className="text-sm">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleService;

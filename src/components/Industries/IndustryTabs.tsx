"use client";

import { Tabs } from "../ui/tabs";
import { industriesData } from "./industriesData";
import Image from "next/image";

export const IndustryTabs = () => {
  const tabs = Object.entries(industriesData).map(([key, value]) => ({
    title: key,
    description: value.description,
    value: key.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-200 via-white to-neutral-100 p-10">
        <IndustryImage image={value.image} />
      </div>
    ),
  }));

  return (
    <div className="relative mx-auto my-6 flex h-[20rem] w-full max-w-6xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
};

const IndustryImage = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="Industry Image"
      width={1000}
      height={1000}
      className="absolute inset-x-0 -bottom-4 mx-auto h-[90%] w-[90%] rounded-xl object-cover object-left-top"
    />
  );
};

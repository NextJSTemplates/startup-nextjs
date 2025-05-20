"use client";

import { Tabs } from "../ui/tabs";
import { industriesData } from "./industriesData";

export const IndustryTabs = () => {
  const tabs = Object.entries(industriesData).map(([key, value]) => ({
    title: key,
    description: value.description,
    value: key.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-b from-neutral-200 to-transparent">
        <IndustryImage image={value.image} />
      </div>
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-6">
      <Tabs tabs={tabs} />
    </div>
  );
}

const IndustryImage = ({ image }: { image: string }) => {
  return (
    <img
      src={image}
      alt="Industry Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[90%] absolute -bottom-4 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

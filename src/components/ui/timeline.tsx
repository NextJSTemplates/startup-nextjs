"use client";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="relative max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >
                <div className="hidden lg:block absolute top-3 left-0 right-0 h-[2px] bg-primary/50 dark:bg-neutral-700 z-0" />

                <div
                  className="absolute top-0 z-10"
                >
                  <div className="h-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-primary/50">
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                  </div>
                </div>

                <div className="mt-12">
                  <div className="text-sm">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

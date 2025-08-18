"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const toolsData = [
  {
    category: "UI/UX and Graphic Design",
    tools: [
      "Sketch",
      "Figma",
      "Adobe XD",
      "InVision Studio",
      "Proto.io",
      "Marvel",
      "Zeplin",
      "FlowMapp",
      "Balsamiq",
      "Hotjar",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Adobe InDesign",
      "CorelDRAW",
    ],
  },
  {
    category: "3D Modelling and Animation",
    tools: [
      "Blender",
      "Cinema 4D",
      "Maya",
      "3ds Max",
      "ZBrush",
      "Substance Painter",
    ],
  },
  {
    category: "Frontend Development",
    tools: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend Development",
    tools: ["Node.js", "Express", "NestJS", "Django", "Laravel"],
  },
];

const Tools = () => {
  return (
    <Section>
      <div className="flex flex-col space-y-6">
        <SectionTitle
          title=" Core Technologies we use for UI/UX Graphic design"
        />

        <Accordion type="single" collapsible className="w-full max-w-4xl">
          {toolsData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-semibold">
                {item.category}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                  {item.tools.map((tool, i) => (
                    <li key={i} className="text-sm text-foreground">
                      <span className="text-primary text-base">~ </span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default Tools;

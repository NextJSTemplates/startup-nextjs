import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";

const items = [
  {
    title: "Risk-proof project scoping",
    description:
      "At Innowise, we believe that getting on the same page from the start is key. At the beginning of each project, we clarify your requirements and prepare technical specifications, which helps us avoid risks and out-of-scope tasks.",
  },
  {
    title: "Realistic cost estimation",
    description:
      "Our specialists consider a variety of different factors — project scale, complexity, team size, designers’ skill sets, and so on — for an accurate cost estimate that truly reflects the scope of the work. We keep excess spending at bay.",
  },
  {
    title: "Collaboration at all levels",
    description:
      "Our UI/UX design company fosters open and transparent communication to keep you informed on project progress and resolve challenges on the fly. We offer effective cooperation from day one and make sure you’re always involved in the process.",
  },
  {
    title: "Proactive risk management",
    description:
      "Starting from requirements analysis, we identify potential roadblocks early on and resolve minor issues before they have a chance to become big problems. This way, our professionals can keep the design project on track.",
  },
  {
    title: "Extensive documentation",
    description:
      "We maintain comprehensive UX documentation throughout the entire project lifecycle to provide clarity, streamline team onboarding, and align products with the strategy. As a result, you’ll always have the information you need right at hand.",
  },
  {
    title: "Consistent reporting",
    description:
      "With strategic meetings and status reports, we make sure you’re never left in the dark when it comes to your project’s progress. At Innowise, we’re committed to keeping you informed and encouraged to chip in every step of the way!",
  },
];

const DesignProcess = () => {
  return (
    <Section>
        <SectionTitle title="Our holistic approach to UI/UX design services" className="text-2xl md:text-3xl" />
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Through our collaborative approach and thorough planning, we create catchy, user-friendly designs on time and budget.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="font-medium text-base">
                <span className="text-red-600 mr-1">•</span>
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default DesignProcess;

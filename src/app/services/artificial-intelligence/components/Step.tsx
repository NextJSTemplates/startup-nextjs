"use client"

import CustomButton from "@/components/Common/CustomButton";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "Every successful AI project begins with understanding. We start with a comprehensive discovery phase, where our AI experts work closely with your team to analyze your business ecosystem, existing data, and current challenges. Through interactive workshops and detailed assessments, we identify the areas where AI can create the most value, uncover opportunities for innovation, and define clear success metrics. ",
  },
  {
    number: "02",
    title: "AI solution design",
    description:
      "Once we understand your needs, we translate insights into a practical roadmap. Our team designs the solution architecture, project scope, and integration plan tailored to your organization’s goals. We carefully map how AI will fit into your existing workflows and infrastructure, ensuring seamless adoption and long-term scalability.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "This is where ideas become reality. Using an agile development methodology, we build, train, and refine your AI models to ensure they meet your unique business requirements. Our engineers then seamlessly integrate the AI solution into your operational systems, guaranteeing it works in harmony with your infrastructure while being secure, scalable, and future-ready.",
  },
];

export default function Steps() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <SectionTitle title="How We Build AI Solutions" className="mb-4" />
          <p className="max-w-md">Answer just a few questions to receive a personalized recommendation 
            specifically designed to align with your business goals and industry needs.</p>
          <CustomButton title="Get Started" link="#contact" />
        </div>

        <div className="space-y-10 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pl-14">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full text-primary border-1 border-primary flex items-center justify-center text-xs font-medium z-10">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute left-[14px] top-12 bottom-[-2rem] w-px bg-black" />
              )}
              <h3 className="text-sm font-medium">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

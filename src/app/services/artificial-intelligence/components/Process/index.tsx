import React from "react";
import { Timeline } from "./timeline";

export function Process() {
  const data = [
    {
      title: "Enhanced Efficiency & Productivity",
      content:
        "Boost productivity and maximize returns with intelligent process automation. By integrating AI into your existing systems, we help you streamline complex workflows, cut down on manual errors, and optimize resource allocation. Whether it's automating repetitive tasks or enabling smarter operations, CE ensures your team can focus on strategic growth instead of routine work.",
    },
    {
      title: "Smarter Customer Engagement & Satisfaction",
      content:
        "Deliver experiences your customers will love. With AI-driven personalization, predictive analytics, and intelligent chatbots, you can anticipate customer needs, respond faster, and build stronger loyalty. From recommendation engines to 24/7 virtual assistants, our solutions enhance customer journeys and create lasting brand relationships.",
    },
    {
      title: "Data-Driven Decision-Making",
      content:
        "Make confident decisions with AI-powered analytics. CE helps you uncover hidden patterns in your data, anticipate market shifts, and solve complex challenges with precision. Our prescriptive analytics models enable you to forecast outcomes, mitigate risks, and make smarter choices that drive sustainable business growth.",
    },
    {
      title: "Cost Reduction & Resource Optimization",
      content:
        "Do more with less. Our AI solutions automate labor-intensive processes like data entry, document analysis, and inventory management, helping you reduce operational costs, optimize workforce allocation, and improve efficiency. The result? Lower expenses and higher returns on every investment.",
    },
    {
      title: "AI-Enhanced Cybersecurity",
      content:
        "Protect your business with intelligent threat detection and prevention. CE's AI-driven cybersecurity solutions identify suspicious activity, detect anomalies in real time, and enable faster responses to potential threats. With predictive models, you'll also be able to anticipate vulnerabilities and safeguard sensitive data, strengthening trust with your customers.",
    },
    {
      title: "Competitive Edge & Market Credibility",
      content:
        "Stay ahead of the curve with cutting-edge AI capabilities. Partnering with CE means gaining access to a team of AI, data science, and software development experts who deliver state-of-the-art solutions tailored to your business. Whether you're launching a new product or enhancing an existing one, we'll help you turn your vision into an AI powered success story.",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data.map((item) => ({
          ...item,
          content: (
            <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 max-w-lg">
              {item.content}
            </p>
          ),
        }))}
      />
    </div>
  );
}

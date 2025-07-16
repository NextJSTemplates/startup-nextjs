import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  "Once we’ve received and processed your request, we’ll get back to you to detail your project needs and sign an NDA to ensure confidentiality.",
  "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
  "We’ll arrange a meeting with you to discuss the offer and nail down the details.",
  "Finally, we’ll sign a contract and start working on your project right away.",
];

const StepsPanel = () => (
  <div className="border border-red-500 border-dashed max-w-md rounded-md">
  <div className="p-6 rounded-md aspect-square relative text-sm w-full md:max-w-md bg-neutral-50 border border-border/50 bottom-4 right-4">
    <h2 className="text-xl font-medium mb-10">What happens next?</h2>
    <div className="relative text-[13px]">
      {steps.map((step, index) => (
        <div key={index} className="relative pl-12 pb-10 last:pb-0">
          {index !== steps.length - 1 && (
            <div className="absolute left-4 top-8 w-px h-full bg-gray-300"></div>
          )}
          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center text-sm font-semibold text-gray-700 z-10">
            {index + 1}
          </div>
          <p className="leading-relaxed">{step}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
);

const ContactUs = () => {
  return (
    <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="contact">
      <SectionTitle title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 justify-center items-center">
        <ContactForm />
        <div className="flex flex-col justify-center items-center">
          <StepsPanel />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

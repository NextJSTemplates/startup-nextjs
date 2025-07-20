import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "../Common/SectionTitle";

export const steps = [
  "Once we’ve received and processed your request, we’ll get back to you to detail your project needs and sign an NDA to ensure confidentiality.",
  "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
  "We’ll arrange a meeting with you to discuss the offer and nail down the details.",
  "Finally, we’ll sign a contract and start working on your project right away.",
];

type ContactUsProps = {
  content?: React.ReactNode
}

const ContactUs = ({content}: ContactUsProps) => {
  return (
    <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="contact">
      <SectionTitle title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 justify-center items-center">
        <ContactForm />
        <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className="border border-primary border-dashed max-w-md rounded-md">
            <div className="p-6 rounded-md aspect-square relative text-sm w-full md:max-w-md bg-neutral-50 border border-border/50 bottom-4 right-4 flex flex-col justify-center">
            {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

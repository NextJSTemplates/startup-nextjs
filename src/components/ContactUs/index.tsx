import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "../Common/SectionTitle";

export const steps = [
  "Once we receive your request, we review your project and connect with you to clarify the basics. To protect your idea, we sign a Non-Disclosure Agreement (NDA).",
  "We assess your goals, expectations, and technical needs. Based on this, we prepare a detailed proposal outlining the scope of work, estimated timeline, team structure, and pricing.",
  "We schedule a meeting to walk through the proposal, address any questions, and finalize the approach to ensure everything aligns with your vision.",
  " After mutual agreement, we sign the contract and immediately begin work—delivering efficient, high-quality results from day. By clicking Send, you consent to Classy Endeavors processing your personal data in accordance with our Privacy Policy. By providing your phone number, you agree that we may contact you via calls, SMS, or messaging apps",
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

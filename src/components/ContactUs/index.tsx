"use client"
import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/components/Header";
import Section from "../Section";
import { Testimonial } from "@/types";
import { Star } from "lucide-react";
import { uiuxTestimonials } from "./testimonialsData";

const ContactUs = ({ testimonials = uiuxTestimonials }: { testimonials?: Testimonial[] }) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
      />
    ))
  }
  return (
    <Section id="contact" className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 justify-center items-center">
        <div>
          <SectionTitle title={t("contact")} />
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className="border border-primary border-dashed rounded-md">
            <div className="p-6 rounded-md relative text-sm w-[350px] md:w-[400px] lg:w-[450px] bg-neutral-50 border border-border/50 bottom-4 right-4 flex flex-col justify-center">
              <div className="p-10 min-h-[400px] relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-10 flex flex-col justify-center transition-all duration-500 ${index === currentIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                      }`}
                  >
                    <div className="flex mb-6">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <blockquote className="leading-relaxed text-foreground mb-8 italic">
                      &quot;{testimonial.text}&quot;
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
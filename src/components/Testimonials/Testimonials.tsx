import Image from "next/image";
import { testimonials } from "./testimonialsData";

export const Reviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <p className="text-foreground/80 max-w-xs">Our clients trust us because we treat their products like our own. We focus on their business goals, building solutions that truly meet their needs — not just delivering features</p>
      </div>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-lg text-foreground/80 border border-border p-6 transition duration-300 hover:shadow-[0_0_5px_rgba(13,148,136,0.4)]"
        >
          <p className="text-sm text-foreground/70 md:min-h-50">
            {testimonial.body}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={14}
              height={14}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
            <span className="text-sm font-medium">{testimonial.name}</span>
            <span className="text-xs">{testimonial.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

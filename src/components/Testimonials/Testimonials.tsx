import Image from "next/image";
import { testimonials } from "./testimonialsData";

export const Reviews = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-lg text-foreground/80 bg-neutral-50 border border-border/50 p-6"
        >
          <p className="text-sm text-foreground/70">
            {testimonial.body}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={14}
              height={14}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-xs">{testimonial.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

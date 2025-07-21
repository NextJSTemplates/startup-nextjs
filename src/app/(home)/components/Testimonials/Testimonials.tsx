import Image from "next/image";
import { testimonials } from "./testimonialsData";

export const Reviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <p className="text-foreground/80 max-w-xs">At Classy Endeavors, we earn our clients’ trust by treating every project as if it were our own. We prioritize your business objectives, crafting tailored digital solutions that solve real problems—not just ticking off feature lists. Our goal is to deliver value-driven results that support long-term growth and success.</p>
      </div>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-lg text-foreground/80 border border-border p-6 transition duration-300 hover:border-primary"
        >
          <p className="text-sm text-foreground/70 md:min-h-50 lg:min-h-70">
            {testimonial.body}
          </p>
          <div className="mt-2 flex items-center gap-2">
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

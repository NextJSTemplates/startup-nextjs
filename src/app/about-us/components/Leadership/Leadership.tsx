import Image from "next/image";
import { testimonials } from "./leadershipData";

export const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (

        <div
          key={index}
          className="rounded-lg text-foreground/80 border border-border p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={14}
              height={14}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="font-semibold">{testimonial.name}</h1>
              <span className="text-xs">{testimonial.description}</span>
            </div>
          </div>
          <p className="text-[13px] text-foreground/80">
            {testimonial.body}
          </p>
        </div>
      ))}
    </div>
  );
};

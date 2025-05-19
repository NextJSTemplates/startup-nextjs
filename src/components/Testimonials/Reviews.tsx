import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import { Star } from "lucide-react";
import { reviews } from "./reviewsData";

const ReviewCard = ({
  img,
  name,
  description,
  body,
}: {
  img: string;
  name: string;
  description: string;
  body: string;
}) => {
  const starCount = 5;

  return (
    <figure className="relative h-full w-90 cursor-pointer overflow-hidden rounded-xl p-6 shadow-md">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="36"
            height="36"
            alt="Customer"
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium">
              {name}
              <span className="mt-2 block text-xs font-light">
                {description}
              </span>
            </figcaption>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: starCount }, (_, i) => (
            <Star key={i} className="h-4 w-4 text-orange-300" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-sm">{body}</blockquote>
    </figure>
  );
};

export const Reviews = () => {
  return (
    <div className="relative container mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    description: "Engineering",
    body: "I've never seen anything like this before. It's amazing. I love it.I don't know what to say. I'm speechless. This is amazing. ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    description: "Consulting",
    body: "I don't know what to say. I'm speechless. This is amazing.I don't know what to say. I'm speechless. This is amazing. ",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    description: "Marketing",
    body: "I'm at a loss for words. This is amazing. I love it.I don't know what to say. I'm speechless. This is amazing. ",
    img: "https://avatar.vercel.sh/john",
  },
];

const secondRow = reviews;

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
    <figure className="hover:animate-zoomIn relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-6 shadow-sm backdrop-blur-sm hover:shadow-md">
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
            <figcaption className="text-sm font-medium dark:text-white">
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
    <div className="relative container mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

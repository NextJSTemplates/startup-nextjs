import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emma Hessel",
    description: "Ekonom - BS Verkstäder",
    body: "Evity har den bästa supporten jag någonsin varit med om. Det personliga bemötandet och den snabba återkopplingen har skapat en känsla av trygghet och tillit som är mycket värdefull. ",
    img: "/images/testimonials/auth-01.png",
  },
  {
    name: "Nina Wiberg Karlsson",
    description: "HR-chef - Fyrklövern",
    body: "Jag uppskattar särskilt att inget tappas bort och att alla delar i processerna fångas upp. Det minskar sårbarheten i organisationen och gör att vi minimerar risken att missa något.",
    img: "/images/testimonials/auth-02.png",
  },
  {
    name: "Johanna Grimståhl",
    description: "VD - Brightnest",
    body: "Med Evity har vi systematiserat allt från medarbetarsamtal till löneprocessen, pulsmätningar, onboarding och offboarding.",
    img: "/images/testimonials/auth-03.png",
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
    <figure className="hover:animate-zoomIn relative h-full w-90 cursor-pointer overflow-hidden rounded-xl p-6 shadow-sm backdrop-blur-sm hover:shadow-md">
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
    <div className="relative container mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

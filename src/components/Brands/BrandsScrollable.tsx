import Image from "next/image";
import brandsData from "./brandsData";
import { Brand } from "@/types";
import { Marquee } from "../magicui/marquee";

const BrandsScrollable = () => {

  return (
    <div className="relative container flex w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:27s]">
        {brandsData.map((brand, index) => (
          <BrandCard index={index} key={brand.id} brand={brand} />
        ))}
      </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default BrandsScrollable;

const BrandCard = ({
  brand,
  index,
}: {
  brand: Brand;
  index: number;
}) => {
  const image = brand.image;
  const isEven = index % 2 === 0;

  return (
    <div className="relative h-40 w-64 flex items-center justify-center">
      <div
        className={`h-full w-full flex items-center justify-center bg-neutral-50 ${isEven ? "clip-trapezoid" : "clip-trapezoid-inverted"
          }`}
      >
        <a
          href="#"
          target="_blank"
          rel="nofollow noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src={image}
            alt="Brand"
            width={100}
            height={100}
            className="w-80"
          />
        </a>
      </div>
    </div>
  );
};




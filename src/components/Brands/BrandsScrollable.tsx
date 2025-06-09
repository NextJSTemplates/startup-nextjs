import Image from "next/image";
import brandsData from "./brandsData";
import { Marquee } from "../magicui/marquee";
import { Brand } from "@/types";

const BrandsScrollable = () => {

  return (
    <div className="relative container mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-8">
      <Marquee pauseOnHover className="[--duration:27s]">
        {brandsData.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

export default BrandsScrollable;


const BrandCard = ({ brand }: { brand: Brand }) => {
  const image = brand.image;

  return (
    <figure className="hover:animate-zoomIn relative h-full cursor-pointer overflow-hidden rounded-xl">
      <a
        href="#"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full opacity-70 transition hover:scale-[1.05] hover:opacity-100"
      >
        <Image
          src={image}
          alt="Brand"
          className="block"
          width={160}
          height={160}
        />
      </a>
    </figure>
  );
};

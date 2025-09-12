"use client";

import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const { messages } = useLanguage();

  const testimonialData = [
    { id: 1, image: "/images/testimonials/auth-01.png", star: 5 },
    { id: 2, image: "/images/testimonials/auth-02.png", star: 5 },
    { id: 3, image: "/images/testimonials/auth-03.png", star: 5 },
    { id: 4, image: "/images/testimonials/auth-03.png", star: 5 },
    { id: 5, image: "/images/testimonials/auth-03.png", star: 4 },
    { id: 6, image: "/images/testimonials/auth-03.png", star: 5 },
  ];

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={messages.testimonialsSection.title}
          paragraph={messages.testimonialsSection.paragraph}
          center
        />

        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: { slidesPerView: 1, allowTouchMove: true },
              768: { slidesPerView: 2, allowTouchMove: true },
              1024: { slidesPerView: 3, allowTouchMove: false },
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="!overflow-hidden"
          >
            {testimonialData.map((testimonial, index) => {
              const translated = messages.testimonials[index];
              return (
                <SwiperSlide key={testimonial.id}>
                  <SingleTestimonial
                    testimonial={{
                      ...testimonial,
                      ...translated, 
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

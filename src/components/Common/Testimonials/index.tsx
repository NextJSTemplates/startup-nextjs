"use client"
import Section from '@/components/Section'
import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from './testimonialsData'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <Section>
      <SectionTitle title="What Our Customers Say" className="text-center mb-12" />
      
      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 border border-primary/50 rounded-full p-2 transition-shadow duration-300 hover:scale-[1.05] cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 border border-primary/50 rounded-full p-2 transition-shadow duration-300 hover:scale-[1.05] cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="rounded-lg p-8 border max-w-2xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <blockquote className="leading-relaxed mb-6 text-center">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="text-center">
                    <div className="font-semibold mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
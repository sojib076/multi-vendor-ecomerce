"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"

interface ProductSlide {
  id: number
  category: string
  title: string
  description: string
  offer?: {
    percentage: number
    label: string
  }
}

const productSlides: ProductSlide[] = [
  {
    id: 1,
    category: "Home Extra Decorations",
    title: "Exclusive Chainsaw Bed",
    description:
      "There Are Many Variations Of Passages Of Lorem Ipsum Available, Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words.",
    offer: {
      percentage: 20,
      label: "Mega Offer",
    },
  },
  {
    id: 2,
    category: "Bedroom Collection",
    title: "Premium Comfort Mattress",
    description:
      "Experience the ultimate in sleep technology with our premium mattress collection, designed to provide exceptional support and comfort for a restful night's sleep.",
  },
  {
    id: 3,
    category: "Living Room Essentials",
    title: "Modern Lounge Sofa",
    description:
      "Transform your living space with our contemporary sofa designs, combining style and comfort for the perfect centerpiece in any modern home.",
  },
]

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="relative w-full bg-slate-50">
      <Carousel
        className="w-full"
        onSelect={(index) => setActiveSlide(index)}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {productSlides.map((slide,) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 min-h-[400px] md:min-h-[700px] flex items-center">
                <div className="max-w-xl">
                  <div className="inline-block px-3 py-1 text-sm bg-white rounded-full mb-4">{slide.category}</div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900">{slide.title}</h2>
                  <p className="text-slate-700 mb-8 max-w-md">{slide.description}</p>
                  <Button className=" bg-black text-white hover:bg-slate-800  rounded-md py-6 px-8 cursor-pointer
                   transition duration-300 ease-in-out
                   hover:scale-105
                   
                   ">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {slide.offer && (
                  <div className="absolute right-10 md:right-24 md:top-1/2 bottom-[-10%] md:bottom-0 -translate-y-1/2">
                    <div className="bg-yellow-200 rounded-full size-28 md:size-48 flex flex-col items-center justify-center text-center">
                      <div className="text-xl md:text-4xl font-bold">{slide.offer.percentage}%</div>
                      <div className="text-sm md:text-3xl font-bold">{slide.offer.label}</div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full ${activeSlide === index ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

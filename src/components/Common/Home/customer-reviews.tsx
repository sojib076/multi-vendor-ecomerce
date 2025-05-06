/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

interface Review {
  id: number
  title: string
  content: string
  customerName: string
  location: string
  productName: string
  productPrice: number
  rating: number
}


export function CustomerReviews() {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)


  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })



  }, [api])

    const reviews: Review[]  = [
        {
          id: 1,
          title: "Fitting is as expected! Size",
          content:
            "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis Aliquam Tempus.",
          customerName: "Emma White",
          location: "Los Angeles, CA",
          productName: "New Brand Choo Watch-line Buuf",
          productPrice: 120.0,
          rating: 4.2,
        },
        {
          id: 2,
          title: "Sense for Shopping Starts Here",
          content: "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis.",
          customerName: "Brandon Frank",
          location: "Los Angeles, CA",
          productName: "New Brand Choo Watch-line Buuf",
          productPrice: 120.0,
          rating: 4.7,
        },
        {
          id: 3,
          title: "Flying Devices, Sparking Happiness",
          content:
            "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis Aliquam Tempus.",
          customerName: "Samuel Jack",
          location: "Los Angeles, CA",
          productName: "New Brand Choo Watch-line Buuf",
          productPrice: 120.0,
          rating: 4.3,
        },
        {
          id: 4,
          title: "Perfect Quality and Design",
          content:
            "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis Aliquam Tempus.",
          customerName: "Jessica Miller",
          location: "New York, NY",
          productName: "Premium Headphones XZ-400",
          productPrice: 89.99,
          rating: 4.8,
        },
        {
          id: 5,
          title: "Exceeded My Expectations",
          content:
            "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis Aliquam Tempus.",
          customerName: "Michael Chen",
          location: "San Francisco, CA",
          productName: "Smart Watch Pro Series",
          productPrice: 199.99,
          rating: 4.9,
        },
        {
          id: 6,
          title: "Great Value for Money",
          content:
            "Vivamus Ut Leo Maximuor, Donec Gravida Eleifend Nisi Id Luctus, Vivamus Fermentum, Lorem Duis Aliquam Tempus.",
          customerName: "Sarah Johnson",
          location: "Chicago, IL",
          productName: "Bluetooth Speaker XL",
          productPrice: 79.99,
          rating: 4.5,
        },
      ]

  
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true })

  return (
    <div className="py-12 ">
      <h2 className="text-2xl font-bold text-center mb-8">Best Products Customer Feedbacks</h2>

      <Carousel
        setApi={setApi}
        className="w-full "
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="p-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className={"pl-4 basis-full  md:basis-1/2  lg:basis-1/3 mx-auto"}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">&quot; {review.title} &quot;</h3>
                    <p className="text-gray-600 text-sm">{review.content}</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="font-medium">- {review.customerName}</p>
                      <p className="text-gray-500 text-xs">{review.location}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{review.productName}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"
                            } ${i === Math.floor(review.rating) && review.rating % 1 > 0 ? "text-yellow-400" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-gray-500 text-xs ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-rose-500 font-bold mt-1">${review.productPrice.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${current === index ? "w-8 bg-black" : "w-2 bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="left-0 -translate-x-4 hidden" />
        <CarouselNext className="right-0 translate-x-4 hidden" />
      </Carousel>
    </div>
  )
}

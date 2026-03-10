"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

interface TimelineCarouselProps {
  images: string[]
  alt: string
}

export function TimelineCarousel({ images, alt }: TimelineCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      className="absolute inset-0 [&>div]:h-full"
    >
      <CarouselContent className="h-full -ml-0">
        {images.map((src, i) => (
          <CarouselItem key={src} className="relative h-full pl-0">
            <Image
              src={src}
              alt={`${alt} — ${i + 1}`}
              fill
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

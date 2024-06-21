import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Slider() {
  return (
    <div className="w-full mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559234433-cee92ff1cd3a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">Explore the Mountains</h3>
                  <p className="text-lg">
                    Discover the beauty of nature in our mountain retreat.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Slide 2"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">Relax by the Lake</h3>
                  <p className="text-lg">
                    Unwind and enjoy the peaceful lakeside atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Slide 3"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">Cozy Cabin Getaway</h3>
                  <p className="text-lg">
                    Escape to our charming cabin in the woods.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Slide 4"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">Outdoor Adventures</h3>
                  <p className="text-lg">
                    Embark on thrilling outdoor activities in our scenic
                    location.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Slide 5"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">Luxury Accommodations</h3>
                  <p className="text-lg">
                    Experience our high-end amenities and comfortable lodging.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 hover:bg-white/80 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-950/80 dark:focus:bg-gray-950/80 dark:focus:ring-gray-300">
          <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 hover:bg-white/80 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-950/80 dark:focus:bg-gray-950/80 dark:focus:ring-gray-300">
          <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

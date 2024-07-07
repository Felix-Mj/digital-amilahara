import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import api from "../../../api";

export default function Slider() {
  const [slider, setSlider] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await api.get('/api/v1/slider')
      setSlider(res.data.data)
    }
    fetchData()
  },[])
  return (
    <div className="w-full mx-auto">
      <Carousel className=" overflow-hidden">
        <CarouselContent>
          {slider.map((e,i)=>{
            return(
              <CarouselItem key={i}>
            <div className="relative">
              <img
                src={e?.image}
                alt="Slide 1"
                width={800}
                height={400}
                className="w-full h-[400px] object-fit "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">{e?.title}</h3>
                  <p className="text-lg">
                    {e?.meassage}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
            )
          })}
          
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

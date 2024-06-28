import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Digital Amilehra
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Acme Inc is a leading software company that specializes in
                    building innovative web applications. Our mission is to
                    empower businesses and individuals with cutting-edge
                    technology solutions.
                  </p>
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/24375005/pexels-photo-24375005/free-photo-of-young-brunette-posing-among-tropical-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="350"
                height="350"
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

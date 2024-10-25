"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [1, 2, 3, 4, 5];

export const WOTMCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="-ml-12">
          {data.map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-12 md:basis-1/2 lg:basis-1/3"
            >
              <div className="group relative aspect-square rounded-[8px]">
                <Image
                  className="cursor-pointer rounded-xl object-cover transition duration-1000"
                  src="/eg.png"
                  alt="Website Image"
                  fill
                  sizes="100%"
                />
                <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 mx-4 my-6 w-full opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-2xl font-semibold text-white">
                    Website Name
                  </p>
                  <div className="flex space-x-2">
                    <p className="text-white">By</p>
                    <Image
                      className="rounded-full"
                      src="/eg.png"
                      alt="Author Image"
                      width={32}
                      height={32}
                    />
                    <p className="font-bold text-white underline">John Doe</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array(count)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2 cursor-pointer rounded-full bg-[#E5E5E0]",
                  index === current && "bg-[#1B1B1B]",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
        </div>

        <div className="flex gap-[15px]">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowLeft className="text-black" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const DiscoverCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="-ml-12">
          {data.map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-12 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col text-black">
                <Image
                  className="aspect-square w-full rounded-lg"
                  src="/eg.png"
                  alt="Website Image"
                  width={480}
                  height={480}
                />

                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="shrink-0 rounded-full bg-[#EEEEEE] px-2 py-1 text-sm">
                    Tag Name
                  </div>
                  <div className="shrink-0 rounded-full bg-[#EEEEEE] px-2 py-1 text-sm">
                    Tag Name
                  </div>
                </div>

                <p className="mt-4 text-2xl font-semibold">
                  Website/Design heading will go here
                </p>

                <div className="mt-2 flex items-center gap-1">
                  By{" "}
                  <Image
                    src="/eg.png"
                    alt="Author Image"
                    width={32}
                    height={32}
                    className="size-8 shrink-0 rounded-full"
                  />{" "}
                  John Doe
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array(count)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2 cursor-pointer rounded-full bg-[#E5E5E0]",
                  index === current && "bg-[#1B1B1B]",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
        </div>

        <div className="flex gap-[15px]">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowLeft className="text-black" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

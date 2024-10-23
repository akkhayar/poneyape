"use client";

import React, { useState } from "react";
import Image from "next/image";
import { websiteCard } from "@/constants";
import { cn } from "@/lib/utils";

const WebsiteOfTheMonthSlider = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleNext = () => {
    setSelectedCardIndex((curr) =>
      curr === Math.ceil(websiteCard.length / 3) - 1 ? 0 : curr + 1,
    );
  };

  const handlePrev = () => {
    setSelectedCardIndex((curr) =>
      curr === 0 ? Math.ceil(websiteCard.length / 3) - 1 : curr - 1,
    );
  };

  return (
    <section className="container">
      <div className="relative overflow-hidden">
        <div
          className="mb-14 flex space-x-10 transition-transform duration-500"
          style={{
            transform: `translateX(-${selectedCardIndex * 100}%)`,
          }}
        >
          {websiteCard.map((card, index) => (
            <div
              key={index}
              className="group relative min-w-[calc(100%/3)] flex-none rounded-xl"
            >
              <Image
                className="min-h-[430px] min-w-full cursor-pointer rounded-xl object-cover transition duration-1000"
                src={card.image}
                alt="Website Image"
                width={416}
                height={430}
              />
              <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 mx-4 my-6 w-full opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-2xl font-semibold text-white">
                  {card.title}
                </p>
                <div className="flex space-x-2">
                  <p className="text-white">By</p>
                  <Image
                    className="rounded-full"
                    src={card.author_image}
                    alt="Author Image"
                    width={32}
                    height={32}
                  />
                  <p className="font-bold text-white underline">
                    {card.author_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-4 rounded-full">
            {websiteCard
              .slice(0, Math.ceil(websiteCard.length / 3))
              .map((id, index) => (
                <div
                  key={index}
                  className={cn(
                    "size-2.5 cursor-pointer rounded-full bg-zinc-300",
                    index === selectedCardIndex && "bg-zinc-500",
                  )}
                  onClick={() => setSelectedCardIndex(index)}
                ></div>
              ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <svg
            className="right cursor-pointer"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePrev}
          >
            <rect
              x="0.5"
              y="1.38867"
              width="47"
              height="47"
              rx="23.5"
              stroke="black"
            />
            <path
              d="M32 23.8887H19.83L25.42 18.2987L24 16.8887L16 24.8887L24 32.8887L25.41 31.4787L19.83 25.8887H32V23.8887Z"
              fill="#1B1B1B"
            />
          </svg>
          <svg
            className="left cursor-pointer"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleNext}
          >
            <rect
              x="0.5"
              y="1.38867"
              width="47"
              height="47"
              rx="23.5"
              stroke="black"
            />
            <path
              d="M24 16.8887L22.59 18.2987L28.17 23.8887H16V25.8887H28.17L22.59 31.4787L24 32.8887L32 24.8887L24 16.8887Z"
              fill="#1B1B1B"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WebsiteOfTheMonthSlider;

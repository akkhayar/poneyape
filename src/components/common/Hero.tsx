"use client";

import { cn, createStringExtractor } from "@/lib/util";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { buttonLinks, filters } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Hero = () => {
  const tabWrapperRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="flex flex-col gap-10 px-6 md:px-16 md:py-[120px]">
      <div className="flex flex-col gap-6">
        <h3 className="text-center font-semibold text-black">
          #1 of the month
        </h3>
        <Image
          src="/eg.png"
          alt="1-of-the-month"
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="lg:flex lg:justify-center">
          <div
            className="tab-wrapper flex h-16 max-w-[1100px] space-x-5 overflow-x-auto rounded-3xl p-2 shadow-tab-wrapper-shadow"
            ref={tabWrapperRef}
          >
            {buttonLinks.map((item, index) => {
              const isActive = pathname === item[0];
              return (
                <Button
                  key={index}
                  className={cn(
                    "tab relative z-10 h-8 w-full flex-1 rounded-xl px-3.5 py-5 text-center font-semibold text-black",
                    {
                      "bg-linear-gradient-blue-to-pink shadow-tab-shadow":
                        isActive || index === 0,
                      "bg-transparent": !isActive && index !== 0,
                    },
                  )}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="mx-auto flex max-w-xl items-center justify-center">
          <div className="flex justify-center gap-3">
            {filters.map((filter, index) => {
              const isActive = activeFilter === filter;
              return (
                <Button
                  key={index}
                  className={cn(
                    "tab relative z-10 h-8 w-full flex-1 rounded-full px-3.5 py-5 text-center font-normal text-black",
                    {
                      "bg-linear-gradient-blue-to-pink shadow-tab-shadow":
                        isActive || index === 0,
                      "bg-transparent": !isActive && index !== 0,
                    },
                  )}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

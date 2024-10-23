import { createStringExtractor } from "@/lib/util";
import React from "react";
import WebsiteCard from "../common/WebsiteCard";
import Link from "next/link";

const PopularWebsites = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-[120px]">
      <div className="mt-[110px] text-black">
        <div className="flex justify-center gap-1 pb-6">
          <p className="font-semibold">Hot Trend</p>
          <img
            src="/assets/images/fire.png"
            alt="fire"
            width={16}
            height={16}
            className="my-auto"
          />
        </div>
        <h3 className="md:h1 pb-10 text-center text-2xl font-bold capitalize">
          Neumorphism
        </h3>
        <div className="flex flex-wrap gap-6">
          {[0, 0, 0, 0, 0, 0, 0].map((_) => (
            <WebsiteCard
              key={_}
              id="eg"
              coverImage="/eg.png"
              primaryAuthor="Ralph Edwards"
              profile="/profile.png"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
          ))}
        </div>
      </div>
      <Link
        href={"/search?category=neumorphism"}
        className="mx-auto flex items-center gap-2 rounded-md border-[1px] border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {t("viewAll")}
      </Link>
    </section>
  );
};

export default PopularWebsites;

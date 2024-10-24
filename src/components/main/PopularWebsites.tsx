import { createStringExtractor } from "@/lib/util";
import React from "react";
import WebsiteCard from "../common/WebsiteCard";
import Link from "next/link";
import Image from "next/image";

interface PopularWebsitesProps {
  t: (key: string) => string;
}

const PopularWebsites = ({ t }: PopularWebsitesProps) => {
  return (
    <section className="flex flex-col gap-10 px-6 md:px-16">
      <div className="mt-[110px] text-black">
        <div className="flex justify-center gap-1 pb-6">
          <p className="font-semibold">{t("styleBriefNeu")}</p>
          <Image
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
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <WebsiteCard
                key={i}
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

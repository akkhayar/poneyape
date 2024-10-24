import Link from "next/link";
import React from "react";
import Image from "next/image";
import FontDisplay from "./FontDisplay";
import { useTranslations } from "next-intl";

interface SiteViewDescriptionProps {
  data: WebsiteData;
}

const SiteViewDescription = ({ data }: SiteViewDescriptionProps) => {
  const t = useTranslations("HomePage");
  return (
    <section
      className="flex flex-col gap-10 px-6 py-10 text-black md:gap-16 md:px-16 md:py-[120px]"
      aria-label="Website Details"
    >
      <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
        <h5 className="mb-4 flex-1 font-bold">
          {t("Detail.detailDescription")}
        </h5>
        <p className="flex-1">{data.description}</p>
      </div>
      <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
        <h5 className="mb-4 flex-1 font-bold">{t("Detail.detailVision")}</h5>
        <p className="flex-1">{data.vision}</p>
      </div>
      <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
        <h5 className="mb-4 flex-1 font-bold">
          {t("Detail.detailTypography")}
        </h5>
        <FontDisplay typography={data.typography} />
      </div>
      <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
        <h5 className="mb-4 flex-1 font-bold">
          {t("Detail.detailColorPalette")}
        </h5>
        <div className="flex flex-1 flex-wrap items-center justify-start gap-4">
          {data.colorPalette.map((color) => (
            <div
              key={color}
              className="flex h-[170px] w-16 items-end justify-center rounded-[40px] pb-[11px]"
              style={{ background: color }}
            >
              <span
                className="mix-blend-difference invert"
                style={{ writingMode: "vertical-rl" }}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
        <h5 className="mb-4 flex-1 font-bold">{t("Detail.detailTags")}</h5>
        <div className="flex flex-1 flex-wrap gap-2">
          {data.tags.map((tag: any) => (
            <div
              key={tag}
              className="rounded-[35px] border border-black px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <h1 className="mt-10 text-4xl font-bold md:text-5xl">
        {t("Detail.detailOtherScreen")}
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        <Link href="/" className="w-full">
          <Image
            src="/eg.jpg"
            alt="Other Screen"
            width={416}
            height={416}
            className="w-full"
          />
        </Link>
        <Link href="/" className="w-full">
          <Image
            src="/eg.jpg"
            alt="Other Screen"
            width={416}
            height={416}
            className="w-full"
          />
        </Link>
        <Link href="/" className="w-full">
          <Image
            src="/eg.jpg"
            alt="Other Screen"
            width={416}
            height={416}
            className="w-full"
          />
        </Link>
      </div>
    </section>
  );
};

export default SiteViewDescription;

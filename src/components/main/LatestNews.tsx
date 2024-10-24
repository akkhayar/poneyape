import { createStringExtractor } from "@/lib/util";
import Link from "next/link";
import React from "react";

interface LatestNewsProps {
  t: (key: string) => string;
}

const LatestNews = ({ t }: LatestNewsProps) => {
  return (
    <section className="bg-[url('/assets/images/subscribe-bg.webp')] px-6 py-20 text-white md:px-16 md:py-[120px]">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold">{t("ctaTitle")}</h3>
        <p className="c-body">{t("ctaDescription")}</p>
        <div>
          <div className="mb-4">
            <input
              className="mb-4 me-4 w-full text-black md:mb-0 md:w-[325px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="c-primary w-full md:w-fit">
              {t("ctaButton")}
            </button>
          </div>
          <p>
            {t("ltNewsLetter_1")}{" "}
            <Link href="/" className="underline">
              {t("ltNewsLetter_2")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

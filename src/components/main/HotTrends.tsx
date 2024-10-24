import { t } from "i18next";
import React from "react";
import { WOTMCarousel } from "@/components/common/CarouselSlider";

interface HotTrendsProps {
  t: (key: string) => string;
}

const HotTrends = ({ t }: HotTrendsProps) => {
  return (
    <section className="px-6 py-10 text-black md:px-16 md:py-[120px]">
      <div className="mb-20 flex flex-col gap-4">
        <h3 className="text-left font-semibold">{t("popularWebsitesTitle")}</h3>
        <p>{t("popularWebsitesDescription")}</p>
      </div>
      <WOTMCarousel />
    </section>
  );
};

export default HotTrends;

import { createStringExtractor } from "@/lib/util";
import React from "react";
import WebsiteOfTheMonthSlider from "../common/WebsiteOfTheMonthSlider";

const HotTrendSection = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="px-6 py-10 text-black md:px-16 md:py-[120px]">
      <div className="mb-20 flex flex-col gap-4">
        <h3 className="text-left font-semibold">{t("popularWebsitesTitle")}</h3>
        <p>{t("popularWebsitesDescription")}</p>
      </div>
      <WebsiteOfTheMonthSlider />
    </section>
  );
};

export default HotTrendSection;

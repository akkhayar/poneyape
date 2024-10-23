import { t } from "i18next";
import Link from "next/link";
import React from "react";
import WebsiteCard from "../common/WebsiteCard";
import WebsiteOfTheMonthSlider from "../common/WebsiteOfTheMonthSlider";

const HotTrends = () => {
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

export default HotTrends;

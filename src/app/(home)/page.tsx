import Testimonial from "@/components/common/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import PopularWebsites from "@/components/main/PopularWebsites";
import HotTrends from "@/components/main/HotTrends";
import FAQ from "@/components/main/FAQ";
// import initTranslations from "../i18n";
// import TranslationsProvider from "@/components/common/TranslationsProvider";
import { useTranslations } from "next-intl";

// const i18nNamespaces = ["Home"];

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    // Main Code

    <div className={`bg-[var(--background-blue)]`}>
      <HomeSection t={t} />
      <PopularWebsites />
      <HotTrends />
      <Testimonial />
      {/* <Tutorial /> */}
      <LatestNews />
      <FAQ />
    </div>

    //   <main className="text-black">
    //     <h1>{t("heroTitle")}</h1>
    //     <p>{t("heroDescription")}</p>
    //   </main>
    // );
  );
}

import Testimonial from "@/components/common/Testimonial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import PopularWebsites from "@/components/main/PopularWebsites";
import HotTrends from "@/components/main/HotTrends";
import FAQ from "@/components/main/FAQ";
import { useTranslations } from "next-intl";
import Tutorial from "@/components/main/Tutorial";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className={`bg-[var(--background-blue)]`}>
      <HomeSection t={t} />
      <PopularWebsites t={t} />
      <HotTrends t={t} />
      <Testimonial />
      <Tutorial t={t} />
      <LatestNews t={t} />
      <FAQ t={t} />
    </div>
  );
}

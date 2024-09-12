import Testimonial from "@/components/common/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import HotTrend from "@/components/main/HotTrend";
import FAQ from "@/components/main/FAQ";

export default function Home() {
  const lang = "en";
  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      <HomeSection />
      <HotTrend />
      <Testimonial />
      <Tutorial />
      <LatestNews />
      <FAQ />
    </div>
  );
}

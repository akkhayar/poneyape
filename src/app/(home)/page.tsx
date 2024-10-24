import Testimonial from "@/components/main/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import HotTrend from "@/components/main/HotTrend";
import FAQ from "@/components/main/FAQ";
import Team from "@/components/main/Team";

export default function Home() {
  const lang = "en";
  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      <HomeSection />
      <HotTrend />
      <Testimonial />
      <Tutorial />
      <LatestNews />
      <Team />
      <FAQ />
    </div>
  );
}

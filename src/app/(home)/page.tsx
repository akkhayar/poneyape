import FAQ from "@/components/main/FAQ";
import HomeSection from "@/components/main/HomeSection";
import HotTrend from "@/components/main/HotTrend";
import LatestNews from "@/components/main/LatestNews";
import Team from "@/components/main/Team";
import Testimonial from "@/components/main/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import { auth } from "@/lib/firebase/firebase-admin";
import { fetchData } from "@/lib/firestore";
import { WebsiteDataFetch } from "@/types";

export default async function Home() {
  const lang = "en";
  const data: WebsiteDataFetch[] = await fetchData("triage-websites");

  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      <HomeSection data={data} />
      <HotTrend data={data} />
      <Testimonial />
      <Tutorial />
      <LatestNews />
      <Team />
      <FAQ />
    </div>
  );
}

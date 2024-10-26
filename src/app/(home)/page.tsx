import Testimonial from "@/components/main/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import HotTrend from "@/components/main/HotTrend";
import FAQ from "@/components/main/FAQ";
import Team from "@/components/main/Team";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { fetchData } from "@/lib/firestore";
import { WebsiteDataFetch } from "@/types";

export default async function Home() {
  const lang = "en";
  const data: WebsiteDataFetch[] = await fetchData("triage-websites");
  console.log(data);

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

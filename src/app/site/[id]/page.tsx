import { DiscoverCarousel } from "@/components/common/CarouselSlider";
import SiteView from "@/components/main/SiteView";
import { placeholderSiteData, placeholderUserData } from "@/constants";
import { fetchData, fetchDataById } from "@/lib/firestore";
import { WebsiteDataFetch } from "@/types";

export default async function SitePage({ params }: { params: { id: string } }) {
  const websites: WebsiteDataFetch[] = await fetchData("triage-websites");
  const data: WebsiteDataFetch = await fetchDataById(
    "triage-websites",
    params.id,
  );

  return (
    <>
      <SiteView data={data} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="mb-10 text-[32px] font-bold text-black md:mb-20 md:text-5xl">
          Discover Similar Collections
        </h1>
        <DiscoverCarousel data={websites} />
      </section>
    </>
  );
}

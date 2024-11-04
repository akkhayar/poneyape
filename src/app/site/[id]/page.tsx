import { DiscoverCarousel } from "@/components/common/CarouselSlider";
import SiteView from "@/components/main/SiteView";
import { placeholderSiteData, placeholderUserData } from "@/constants";
import { fetchData, fetchDataById } from "@/lib/firestore";
import { getUserLocale } from "@/locale";
import { createClient } from "@/prismicio";
import { WebsiteDataFetch } from "@/types";

export default async function SitePage({ params }: { params: { id: string } }) {
  const websites: WebsiteDataFetch[] = await fetchData("triage-websites");
  const data: WebsiteDataFetch = await fetchDataById(
    "triage-websites",
    params.id,
  );
  const locale = await getUserLocale();
  const client = createClient();

  const details = await client.getSingle("website_detail", { lang: locale });

  return (
    <>
      <SiteView data={data} details={details} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="mb-10 text-[32px] font-bold text-black md:mb-20 md:text-5xl">
          {details.data.similar_collections}
        </h1>
        <DiscoverCarousel data={websites} />
      </section>
    </>
  );
}

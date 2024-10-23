import { placeholderSiteData, placeholderUserData } from "@/constants";
import SiteView from "@/components/main/SiteView";
import { DiscoverCarousel } from "@/components/common/CarouselSlider";

export default function Site({ params }: PageProps) {
  // we need to use the slug from params to fetch
  // the publicly viewable data of the website
  return (
    <>
      <SiteView data={placeholderSiteData} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="mb-10 text-[32px] font-bold text-black md:mb-20 md:text-5xl">
          Discover Similar Collections
        </h1>
        <DiscoverCarousel />
      </section>
    </>
  );
}

export const runtime = "edge";

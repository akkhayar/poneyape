import { placeholderSiteData, placeholderUserData } from "@/constants";
import SiteView from "@/components/main/SiteView";

export default function Site({ params }: PageProps) {
  // we need to use the slug from params to fetch
  // the publicly viewable data of the website
  return (
    <>
      <SiteView data={placeholderSiteData} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="font-bold">Discover Similar Collections</h1>
        <div></div>
      </section>
    </>
  );
}

export const runtime = "edge";

import { placeholderSiteData, placeholderUserData } from "@/constants";
import SiteView from "@/components/main/SiteView";
import { DiscoverCarousel } from "@/components/common/CarouselSlider";
import { useTranslations } from "next-intl";

export default function Site({ params }: PageProps) {
  const t = useTranslations("HomePage");
  return (
    <>
      <SiteView data={placeholderSiteData} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="mb-10 text-[32px] font-bold text-black md:mb-20 md:text-5xl">
          {t("similarCollection")}
        </h1>
        <DiscoverCarousel />
      </section>
    </>
  );
}

export const runtime = "edge";

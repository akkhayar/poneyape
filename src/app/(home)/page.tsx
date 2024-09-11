"use client";
import WebsiteCard from "@/components/common/WebsiteCard";
import Testimonial from "@/components/common/Testimonial";
import Image from "next/image";
import Link from "next/link";
import FAQDropDown from "@/components/common/FAQDropDown";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import OurTeamSlider from "@/components/common/OurTeamSlider";
import WebsiteOfTheMonthSlider from "@/components/common/WebsiteOfTheMonthSlider";
import { createStringExtractor } from "@/lib/util";
import { filters } from "@/constants";

export default function Home() {
  // const searchParams = useSearchParams();
  // const lang = searchParams.get("lang");
  const lang = "en";
  const t = createStringExtractor(lang);

  const tabWrapperRef = useRef<HTMLDivElement>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  useLayoutEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      tabWrapperRef.current!.scrollLeft += e.deltaY;
    };
    tabWrapperRef.current?.addEventListener("wheel", handleWheel);
    return () => {
      tabWrapperRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, [tabWrapperRef]);

  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-[120px]">
        <div className="py-6 text-center md:mx-auto md:max-w-[1000px]">
          <h1 className="font-poppins text-[40px] font-bold leading-10 md:text-[86px] md:leading-[100%] md:tracking-[-3.44px]">
            Elevating <span className="text-primary">Design Excellence</span> in
            Myanmar
          </h1>
          <p className="py-10 md:mx-auto md:max-w-[800px]">
            {t("heroDescription")}
          </p>
          <button className="c-primary pb-6 md:hidden">
            {t("registerModalTitle")}
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="mb-10 text-center font-semibold">#1 of the month</h3>
          <Image
            src="/eg.png"
            alt="1-of-the-month"
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
        <div>
          <div className="mb-6 lg:flex lg:justify-center">
            <div
              className="tab-wrapper flex h-16 max-w-[1100px] space-x-5 overflow-x-auto rounded-3xl p-2 shadow-tab-wrapper-shadow"
              ref={tabWrapperRef}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  key={index}
                  className={`tab relative z-10 min-w-48 rounded-lg px-10 py-2 font-semibold ${
                    activeTabIndex === index
                      ? "bg-linear-gradient-blue-to-pink shadow-tab-shadow"
                      : ""
                  }`}
                  data-index={index}
                  onClick={() => handleTabClick(index)}
                >
                  {index === 0
                    ? "Design Trends"
                    : index === 1
                      ? "UI Type"
                      : index === 2
                        ? "Featured"
                        : index === 3
                          ? "UI Elements"
                          : "Apps"}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-wrapper flex flex-wrap justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`rounded-3xl border px-4 py-2 text-base font-medium filter ${
                  activeFilter === filter
                    ? "border-gray-500 bg-linear-gradient-pink-to-blue"
                    : "opacity-90"
                }`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-[110px]">
          <div className="flex justify-center gap-1 pb-6">
            <p className="font-semibold">Hot Trend</p>
            <Image
              src="/assets/images/fire.png"
              alt="fire"
              width={16}
              height={16}
              className="my-auto"
            />
          </div>
          <h3 className="md:h1 pb-10 text-center text-2xl font-bold capitalize">
            Neumorphism
          </h3>
          <div className="flex flex-wrap gap-6">
            {[0, 0, 0, 0, 0, 0, 0].map((_) => (
              <WebsiteCard
                key={_}
                id="eg"
                coverImage="/eg.png"
                primaryAuthor="Ralph Edwards"
                profile="/profile.png"
                tags={["Blog", "Corporate"]}
                title="Future Tracking"
              />
            ))}
          </div>
        </div>
        <Link
          href={"/search?category=neumorphism"}
          className="mx-auto flex items-center gap-2 rounded-md border-[1px] border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          {t("viewAll")}
        </Link>
      </section>
      <section className="px-6 py-10 md:px-16 md:py-[120px]">
        <div className="mb-20 flex flex-col gap-4">
          <h3 className="text-left font-semibold">
            {t("popularWebsitesTitle")}
          </h3>
          <p>{t("popularWebsitesDescription")}</p>
        </div>
        <WebsiteOfTheMonthSlider />
      </section>
      <section className="bg-[#9191911a] px-6 py-10 md:px-16 md:py-[120px]">
        <h3 className="mb-10 text-center font-semibold">{t("testimonials")}</h3>
        <div>
          {/* <Testimonial
            author="Robert Fox"
            position="CEO of everything"
            rating={5}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          /> */}
          <Testimonial />
        </div>
      </section>
      <section className="px-6 py-10 md:flex md:px-16 md:py-[120px]">
        <Image
          alt="tutorial-thumbnail"
          className="mb-6 h-[250px] w-full bg-black md:me-20"
          src=""
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-4">
          <p className="font-semibold">{t("tutorialNote")}</p>
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">{t("tutorialTitle")}</h3>
            <p>{t("tutorialDescription")}</p>
            <button className="c-primary c-solid mt-4 md:w-fit">
              {t("tutorialButton")}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[url('/assets/images/subscribe-bg.webp')] px-6 py-20 text-white md:px-16 md:py-[120px]">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold">{t("ctaTitle")}</h3>
          <p className="c-body">{t("ctaDescription")}</p>
          <div>
            <div className="mb-4">
              <input
                className="mb-4 me-4 w-full text-black md:mb-0 md:w-[325px]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="c-primary w-full md:w-fit">
                {t("ctaButton")}
              </button>
            </div>
            <p>
              By subscribing, you agree to our{" "}
              <Link href="/" className="underline">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="mt-28 flex flex-col gap-20 px-6 py-10 md:px-16 md:py-[120px]">
        <div className="mb-10">
          <h3 className="mb-6 font-semibold">Meet Our Team</h3>
          <p>{t("moreQuestionDescription")}</p>
          <OurTeamSlider />
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 font-semibold">We are open for volunteers</h3>
            <p>{t("volunteeringDescription")}</p>
          </div>
          <button className="c-primary w-full md:w-fit">
            {t("contactUs")}
          </button>
        </div>
      </section>
      <section className="px-6 py-[120px] md:px-16">
        <h3 className="font-semibold">{t("faqTitle")}</h3>
        <p>{t("faqDescription")}</p>
        <div className="mb-20">{t("moreQuestionTitle")}</div>
        <FAQDropDown />
      </section>
    </div>
  );
}

"use client";
import WebsiteCard from "@/components/common/WebsiteCard";
import Testimonial from "@/components/common/Testimonial";
import Image from "next/image";
import Link from "next/link";
import FAQDropDown from "@/components/common/FAQDropDown";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import OurTeamSlider from "@/components/common/OurTeamSlider";
import WebsiteOfTheMonthSlider from "@/components/common/WebsiteOfTheMonthSlider";

const resources: {
  [language: string]: { translation: { [title: string]: string } };
} = {
  en: {
    translation: {
      navItemHome: "Home",
      navItemContest: "Contests",
      navItemLearn: "Learning",
      navItemExplore: "Explore",
      registerModalTitle: "Register",
      registerModalSubtitle: "Join our community!",
      heroTitle: "Elevating Design Excellence in Myanmar",
      heroDescription:
        "Join a vibrant community of designers and unleash your creativity with Poneyape. Whether you're seeking inspiration or aiming to refine your skills, Poneyape is your gateway to mastering Burmese typography and beyond.",
      designCarouselItemDesign: "Design Trends",
      designCarouselItemUI: "UI Type",
      designCarouselItemFeatured: "Featured",
      designCarouselItemUIElements: "UI Elements",
      designCarouselItemApps: "Apps",
      styleNameNeu: "Neumorphism",
      styleNameMini: "Minimilism",
      styleNameGlass: "Glassmorphism",
      styleNameSkeu: "Skeuomorphism",
      styleNameBento: "Bento",
      styleNameSpa: "Spatial",
      styleNameBrute: "Brutalism",
      styleNameTypo: "Typography",
      styleBriefNeu: "",
      styleBriefMini: "",
      styleBriefGlass: "",
      styleBriefSkeu: "",
      styleBriefBento: "",
      styleBriefSpa: "",
      styleBriefBrute: "",
      styleBriefTypo: "",
      viewAll: "View All",
      popularWebsitesTitle: "Popular Websites of the Month",
      popularWebsitesDescription:
        "Find out which projects are gaining popularity this month!",
      testimonials: "Testimonials",
      tutorialNote: "Tutorial",
      tutorialTitle: "How to submit your work?",
      tutorialDescription:
        "Done painting out the pixels of a creative design? Take these steps to submit the design and present the public with your effort.",
      tutorialButton: "Learn More",
      ctaTitle: "Get the Latest Design Updates",
      ctaDescription:
        "Subscribe to our newsletter for updates on new submissions and voting results",
      ctaButton: "Subscribe",
      ourTeamTitle: "Meet Our team",
      ourTeamDescription: "",
      volunteeringTitle: "We're open for volunteers!",
      volunteeringDescription:
        "Join us and get an amazing experience working alongsider Myanmar's most creative community.",
      contactUs: "Contact Us",
      faqTitle: "FAQs",
      faqDescription: "Frequently asked questions",
      moreQuestionTitle: "Still have a question?",
      moreQuestionDescription:
        "Book a meeting with the Poneyape team or send us an email!",
    },
  },
  mm: {
    translation: {
      navItemHome: "ပင်မစာမျက်နာ",
      navItemContest: "ပြိုင်ပွဲများ",
      navItemLearn: "သင်ယူခြင်း",
      navItemExplore: "စူးစမ်းပါ",
      registerModalTitle: "Register",
      registerModalSubtitle: "Join our community!",
      heroTitle: "မြန်မာ့ဒီဇိုင်းအရည်အသွေးကို မြှင့်တင်ခြင်း",
      heroDescription:
        "ပုံရုပ်နှင့်အတူ တက်ကြွသော ဒီဇိုင်နာလူထုထဲတွင်ပါဝင်ပါ။ စိတ်ပြေလက်ပျောက် ဒီဇိုင်းများရှာဖွေနေသည်ဖြစ်စေ၊ ဒီဇိုင်းကျွမ်းကျင်မှုကို မြှင့်တင်လိုသည်ဖြစ်စေ၊ ပုံရိပ် သည်သင်၏ လမ်းကြောင်းဖြစ်သည်။",
      designCarouselItemDesign: "Design Trends",
      designCarouselItemUI: "UI Type",
      designCarouselItemFeatured: "Featured",
      designCarouselItemUIElements: "UI Elements",
      designCarouselItemApps: "Apps",
      styleNameNeu: "Neumorphism",
      styleNameMini: "Minimilism",
      styleNameGlass: "Glassmorphism",
      styleNameSkeu: "Skeuomorphism",
      styleNameBento: "Bento",
      styleNameSpa: "Spatial",
      styleNameBrute: "Brutalism",
      styleNameTypo: "Typography",
      styleBriefNeu: "",
      styleBriefMini: "",
      styleBriefGlass: "",
      styleBriefSkeu: "",
      styleBriefBento: "",
      styleBriefSpa: "",
      styleBriefBrute: "",
      styleBriefTypo: "",
      viewAll: "ဆက်လက်ကြည့်ရှုရန်",
      popularWebsitesTitle: "ဒီလအဟော့ဆုံးများ",
      popularWebsitesDescription:
        "ယခုလအတွက် အဟော့ဆုံး ဖြစ်နေတဲ့ ဒီဇိုင်း‌တွေကိုကြည့်ပြီးပြီးလား",
      testimonials: "သက်သေခံချက်များ",
      tutorialNote: "Tutorial",
      tutorialTitle: "သင့်ဝဘ်ဆိုဒ်ကို ဘယ်လို အပ်လုဒ်လုပ်မလဲ။",
      tutorialDescription:
        "သင့်ဒီဇိုင်းကို ဆွဲပြီးပြီလား။ ဒီအဆင့်များကိုလိုက်နာပြီး ကြိုးပမ်းမှုကို အကောင်ထည်ဖော် တင်ပြလိုက်ပါ။",
      tutorialButton: "Learn More",
      ctaTitle: "ပုံရိပ်ဂျာနယ် ရရှိရန် စာရင်းသွင်းပါ",
      ctaButton: "စာရင်းသွင်းပါ",
      ctaDescription:
        "အပ်လုဒ်အသစ်များနှင့် ဒီဇိုင်းဆိုင်ရာ အပ်ဒိတ်များအတွက် ပုံရိပ်ဂျာနယ်ကို စာရင်းသွင်းပါ။",
      ourTeamTitle: "ပုံရိပ် ရဲဘော အာစိကြီးများ",
      Description: "ထောက်ပံ",
      volunteeringTitle: "ပုံရိပ်မှာ စေတနာ့ဝန်ထမ်းအဖြစ် ပါဝင်ကူညီပါ။",
      volunteeringDescription:
        "ပုံရိပ်နှင့် အတူပါဝင်ပြီး မြန်မာနိုင်ငံ၏ ဖန်တီးမှုကို အက္ခရာထား‌‌သော အဖွဲ့အစီးတွင့်အလုပ် အတွေ့အကြုံများကိုရယူပါ။",
      contactUs: "ဆက်သွယ်ရန်",
      faqTitle: "FAQs",
      faqDescription: "Frequently asked questions",
      moreQuestionTitle: "မေးလိုတာရှိသေးပါသလား",
      moreQuestionDescription:
        "ပုံရိပ် အသင်းသားတွေနှင့် တွေ့ဆုံရန် စာရင်းသွင်းပါ သို့မဟုတ် အီးမေးလ် ပို့ပါ။",
    },
  },
};

function createStringExtractor(language?: string | null) {
  if (!language) {
    language = "en";
  }
  return (title: string) => resources[language].translation[title];
}

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
    tabWrapperRef.current?.addEventListener('wheel', handleWheel);
    return () => {
      tabWrapperRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, [tabWrapperRef]);


  const filters = ['Neumorphism', 'Minimalism', 'Glassmorphism', 'Skeuomorphism', 'Bento', 'Dark Mode', 'Spartial', 'Brutalism', 'Typography'];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };


  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-[120px]">
        <div className="py-6 text-center md:mx-auto md:max-w-[1000px]">
          <h1 className="font-poppins text-[40px] font-bold leading-10 md:text-[86px] md:leading-[100%] md:tracking-[-3.44px]">
            Elevating <span className="text-primary">Design Excellence</span>{" "}
            in Myanmar
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
          <div className="lg:flex lg:justify-center mb-6">
            <div
              className="tab-wrapper max-w-[1100px] h-16 flex space-x-5 overflow-x-auto shadow-tab-wrapper-shadow rounded-3xl p-2"
              ref={tabWrapperRef}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  key={index}
                  className={`tab min-w-48 px-10 py-2 rounded-lg font-semibold relative z-10 ${activeTabIndex === index
                    ? 'shadow-tab-shadow bg-linear-gradient-blue-to-pink'
                    : ''
                    }`}
                  data-index={index}
                  onClick={() => handleTabClick(index)}
                >
                  {index === 0 ? 'Design Trends' : index === 1 ? 'UI Type' : index === 2 ? 'Featured' : index === 3 ? 'UI Elements' : 'Apps'}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-wrapper flex flex-wrap gap-3 justify-center">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`filter text-base border font-medium rounded-3xl py-2 px-4 ${activeFilter === filter ? 'border-gray-500 bg-linear-gradient-pink-to-blue' : 'opacity-90'
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
          <h3 className="md:h1 pb-10 text-center text-2xl font-bold">
            NEUMORPHISM
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
          className="border-[1px] border-primary gap-2 font-semibold text-sm text-primary rounded-md py-3 px-6 mx-auto hover:bg-primary hover:text-white flex items-center"
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
              <a href="/" className="underline">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-28 gap-20 px-6 py-10 md:px-16 md:py-[120px]">
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

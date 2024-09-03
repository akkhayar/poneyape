"use client";
import WebsiteCard from "@/components/common/WebsiteCard";
import Testimonial from "@/components/common/Testimonial";
import Image from "next/image";
import Link from "next/link";

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
          <div>
            <button>Design Trends</button>
            <button>UI Type</button>
            <button>Featured</button>
            <button>UI Elements</button>
            <button>Apps</button>
          </div>
          <div>
            <button>Neumorphism</button>
            <button>Minimalism</button>
            <button>Glassmorphism</button>
            <button>Skeuomorphism</button>
            <button>Bento</button>
            <button>Dark Mode</button>
            <button>Spartial</button>
            <button>Brutalism</button>
            <button>Typography</button>
          </div>
        </div>
        <div>
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
        <Link href={"/search?category=neumorphism"} className="c-outline mx-auto">
          {t("viewAll")}
        </Link>
      </section>
      <section className="px-6 py-10 md:px-16 md:py-[120px]">
        <div className="mb-10 flex flex-col gap-4">
          <h3 className="text-left font-semibold">
            {t("popularWebsitesTitle")}
          </h3>
          <p>{t("popularWebsitesDescription")}</p>
        </div>
        <div
          id="popular-sites"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-[500px] overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="/eg.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={500}
                height={500}
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="/eg.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={500}
                height={500}
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="/eg.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={500}
                height={500}
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="/eg.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={500}
                height={500}
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="/eg.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
      <section className="bg-[#9191911a] px-6 py-10 md:px-16 md:py-[120px]">
        <h3 className="mb-10 text-center font-semibold">{t("testimonials")}</h3>
        <div>
          <Testimonial
            author="Robert Fox"
            position="CEO of everything"
            rating={5}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          />
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
      <section className="flex flex-col gap-20 px-6 py-10 md:px-16 md:py-[120px]">
        <div className="mb-10">
          <h3 className="mb-6 font-semibold">Meet Our Team</h3>
          <p>{t("moreQuestionDescription")}</p>
          <div>Carousel</div>
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
        <div>{t("moreQuestionTitle")}</div>
      </section>
    </div>
  );
}

import clsx from "clsx";
import Hero from "../common/Hero";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getUserLocale } from "@/i18n/locale";

interface HomeSectionProps {
  t: (key: string) => string;
}

const HomeSection = async ({ t }: HomeSectionProps) => {
  const locale = await getUserLocale();
  return (
    <section className="flex flex-col border border-red-400 px-6 pt-10 md:px-16 md:py-[120px]">
      <div className="text-center md:mx-auto md:max-w-[1000px]">
        <h1
          className={cn(
            "font-poppins text-[40px] font-bold leading-10 text-black md:text-[86px] md:tracking-[-3.44px]",
            locale === "my" ? "leading-[150%]" : "leading-[100%]",
          )}
        >
          {t("heroTitle1")}{" "}
          <span className="text-primary">{t("heroTitle2")}</span>{" "}
          {t("heroTitle3")}
        </h1>
        <p className="py-10 font-semibold text-black md:mx-auto md:max-w-[800px]">
          {t("heroDescription")}
        </p>
        <button className="c-primary block pb-6 md:hidden">
          {t("registerModalTitle")}
        </button>
      </div>
      <Hero />
    </section>
  );
};

export default HomeSection;

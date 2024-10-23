import Link from "next/link";
import WebsiteCard from "../common/WebsiteCard";
import Hero from "../common/Hero";

interface HomeSectionProps {
  t: (key: string) => string;
}

const HomeSection = ({ t }: HomeSectionProps) => {
  return (
    <section className="flex flex-col border-2 border-red-400 px-6 py-10 md:px-16 md:py-[120px]">
      <div className="text-center md:mx-auto md:max-w-[1000px]">
        <h1 className="font-poppins text-[40px] font-bold leading-10 text-black md:text-[86px] md:leading-[100%] md:tracking-[-3.44px]">
          {t("heroTitle")}
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

import React from "react";
import FAQDropDown from "../common/FAQDropDown";

interface FAQProps {
  t: (key: string) => string;
}

const FAQ = ({ t }: FAQProps) => {
  return (
    <section className="px-6 py-[120px] text-black md:px-16">
      <h3 className="font-semibold">{t("faqTitle")}</h3>
      <p>{t("faqDescription")}</p>
      <div className="mb-20">{t("moreQuestionTitle")}</div>
      {/* <FAQDropDown /> */}
    </section>
  );
};

export default FAQ;

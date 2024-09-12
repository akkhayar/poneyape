import { createStringExtractor } from "@/lib/util";
import React from "react";

const Testimonial = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="bg-[#9191911a] px-6 py-10 text-black md:px-16 md:py-[120px]">
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
  );
};

export default Testimonial;

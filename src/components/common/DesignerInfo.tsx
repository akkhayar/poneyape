import React from "react";
import Image from "next/image";
import { getDomain } from "@/lib/util";
import Link from "next/link";
import { SocialIcon } from "@/icons/SocialIcon";
import { useTranslations } from "next-intl";

const DesignerInfo = ({
  data,
  user,
}: {
  data: WebsiteData;
  user: UserData;
}) => {
  const t = useTranslations("HomePage");
  return (
    <section
      className="relative -z-20 bg-[#1B1B1B] px-6 py-20 text-white md:px-16 md:py-[120px]"
      aria-label="Designers' Information"
    >
      <div
        className="absolute -left-[380px] top-[45px] -z-10 h-[644px] w-[644px] rounded-[644px] blur-[59px]"
        style={{
          background:
            "linear-gradient(236deg, rgba(0, 10, 96, 0.00) 16.76%, rgba(0, 20, 198, 0.21) 63.4%)",
        }}
      />
      <h3 className="mb-10 text-[32px] font-semibold md:text-4xl">
        {t("Detail.detailDesigner")}
      </h3>
      <div className="flex flex-col gap-20 md:flex-row">
        {data.authors.map((author: any) => (
          <div key={author} className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <Image
                src={user.profilePicture}
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-[100px]"
              />
              <div>
                <p>{user.name}</p>
                <p>{user.profession}</p>
              </div>
            </div>
            <p>{user.about}</p>
            <div className="flex gap-[14px]">
              {user.socials.map((link) => {
                const domain = getDomain(link);
                if (!domain) {
                  return;
                }
                return (
                  <Link key={domain} href={link}>
                    <SocialIcon domain={domain} className="h-[14px] w-[14px]" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignerInfo;

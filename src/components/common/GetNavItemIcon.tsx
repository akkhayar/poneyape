"use client";

import { winRoutes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const GetNavItemIcon = () => {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  return (
    <nav className="flex h-[72px] w-full items-center justify-end gap-2 border-b border-solid border-b-bg1 bg-[#ffffff66]">
      <ul className="hidden shrink-0 text-[#1B1B1B] lg:flex lg:gap-8">
        {winRoutes.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={clsx("flex gap-4 py-4 font-bold", {
                "bg-bank-gradient": isActive,
              })}
            >
              <p
                className={clsx(
                  "regular font-bold text-darkGrey transition-all duration-200 hover:text-black",
                  {
                    "text-darkGrey": isActive,
                  },
                )}
              >
                {t(item.label)}
              </p>
            </Link>
          );
        })}
      </ul>
      <div className="mx-10 hidden w-full rounded-[30px] bg-[#eeeeee] px-4 py-3 text-black md:flex">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-[10px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
              fill="#1B1B1B"
            />
          </svg>
        </button>
        <input
          type="text"
          name="search"
          placeholder={t("navSearch")}
          className="m-0 w-full border-none bg-transparent p-0 text-base outline-none placeholder:text-black hover:outline-none"
        />
      </div>
    </nav>
  );
};

export default GetNavItemIcon;

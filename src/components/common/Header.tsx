"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { LogIn, LogOut, Search } from "lucide-react";

import AuthModal from "@/components/common/AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/locale";
import { Locale } from "@/locale/config";
import { components } from "@/slices";

import {
  HeaderLinksDocument,
  HeaderLinksDocumentDataLinksItem,
  Simplify,
} from "../../../prismicio-types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Skeleton } from "../ui/skeleton";
import { NavLinks } from "./NavLinks";
import { SurveyPopup } from "./SurveyPopup";

const Header = ({
  locale,
  data,
}: {
  locale: Locale;
  data: HeaderLinksDocument<string>;
}) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pathname = usePathname().trim();
  // const [showBanner, setShowBanner] = useState(true);

  const [surveyModel, setSurveyModel] = useState(false);
  const user = useCurrentUser(auth);

  const links = data.data.links;

  return (
    <>
      <AuthModal show={showAuthModal} setShow={setShowAuthModal} />
      <SurveyPopup open={surveyModel} setOpen={setSurveyModel} />
      <SliceZone
        slices={data.data.slices}
        components={components}
        context={{ locale }}
      />

      {/* {showBanner && (
        <section className="bg-linear-gradient-yellow-to-orange px-6 2xl:px-16">
          <div className="container mx-auto flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
              <div className="w-[43px]">
                <svg
                  className="animate-[wiggle_0.7s_ease-in-out_infinite]"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_760_2186)">
                    <path
                      d="M10.5 2C10.5 1.17157 9.82843 0.5 9 0.5C8.17157 0.5 7.5 1.17157 7.5 2V6.5C7.5 7.32843 8.17157 8 9 8C9.82843 8 10.5 7.32843 10.5 6.5V2Z"
                      fill="#1B1B1B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 12.5C1.5 11.6716 2.17157 11 3 11H28.5C30.4891 11 32.3968 11.7902 33.8033 13.1967C35.2098 14.6032 36 16.5109 36 18.5C36 20.4891 35.2098 22.3968 33.8033 23.8033C32.3968 25.2098 30.4891 26 28.5 26C28.5 27.9891 27.7098 29.8968 26.3033 31.3033C24.8968 32.7098 22.9891 33.5 21 33.5H9C7.01088 33.5 5.10322 32.7098 3.6967 31.3033C2.29018 29.8968 1.5 27.9891 1.5 26V12.5ZM28.5 23V14C29.6935 14 30.8381 14.4741 31.682 15.318C32.5259 16.1619 33 17.3065 33 18.5C33 19.6935 32.5259 20.8381 31.682 21.682C30.8381 22.5259 29.6935 23 28.5 23ZM25.5 14V26C25.5 27.1935 25.0259 28.3381 24.182 29.182C23.3381 30.0259 22.1935 30.5 21 30.5H9C7.80653 30.5 6.66193 30.0259 5.81802 29.182C4.97411 28.3381 4.5 27.1935 4.5 26V14H25.5Z"
                      fill="#1B1B1B"
                    />
                    <path
                      d="M15 0.5C15.8284 0.5 16.5 1.17157 16.5 2V6.5C16.5 7.32843 15.8284 8 15 8C14.1716 8 13.5 7.32843 13.5 6.5V2C13.5 1.17157 14.1716 0.5 15 0.5Z"
                      fill="#1B1B1B"
                    />
                    <path
                      d="M22.5 2C22.5 1.17157 21.8284 0.5 21 0.5C20.1716 0.5 19.5 1.17157 19.5 2V6.5C19.5 7.32843 20.1716 8 21 8C21.8284 8 22.5 7.32843 22.5 6.5V2Z"
                      fill="#1B1B1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_760_2186">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="">
                <h5 className="font-bold">Volunteer Opportunities Available</h5>
                <p className="lg:text-[14px]">
                  We’ve opened volunteering opportunities for the following -
                  full stack developer x1 , front end developer x2
                </p>
              </div>
            </div>

            <button onClick={() => setShowBanner(false)}>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8353 22.864L22.3638 23.3354C22.1035 23.5957 21.6814 23.5957 21.421 23.3354L15.9999 17.9142L10.5787 23.3353C10.3184 23.5957 9.89626 23.5957 9.63591 23.3353L9.1645 22.8639C8.90415 22.6036 8.90415 22.1815 9.1645 21.9211L14.5857 16.5L9.1645 11.0788C8.90415 10.8185 8.90415 10.3964 9.1645 10.136L9.6359 9.66463C9.89625 9.40428 10.3184 9.40428 10.5787 9.66463L15.9999 15.0858L21.421 9.66462C21.6814 9.40427 22.1035 9.40427 22.3638 9.66462L22.8353 10.136C23.0956 10.3964 23.0956 10.8185 22.8353 11.0788L17.4141 16.5L22.8353 21.9211C23.0956 22.1815 23.0956 22.6036 22.8353 22.864Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </section>
      )} */}
      <div className="flex w-full items-center justify-between px-6 lg:px-16">
        <div className="flex items-center gap-2">
          <NavLinks setShowAuthModel={setShowAuthModal} />
          <Link
            href="/"
            className="shrink-0 font-pyidaungsu text-[20px] text-black"
          >
            <Image src="/poneyape.svg" alt="PoneYape" width={85} height={36} />
          </Link>
          <nav className="flex h-[72px] w-full items-center justify-end gap-2 border-solid bg-[#ffffff66]">
            <ul
              className="hidden text-[#1B1B1B] lg:flex lg:gap-8"
              aria-label="Navigation Items"
            >
              {links?.map((link, i) => {
                const url = (link.href as any).url;
                return (
                  <li key={i}>
                    <PrismicNextLink
                      field={link.href}
                      className={cn(
                        pathname === url
                          ? "pointer-events-none font-bold text-black"
                          : "text-darkGrey hover:text-black",
                        `regular flex shrink-0 gap-4 text-nowrap py-4 transition-all duration-200`,
                      )}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mx-10 hidden w-full flex-1 rounded-[30px] bg-[#eeeeee] px-4 py-3 text-black md:flex lg:hidden xl:flex">
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
            placeholder={data.data.search as string}
            className="m-0 w-full border-none bg-transparent p-0 text-base outline-none placeholder:text-black hover:outline-none"
          />
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!locale ? (
            <Skeleton className="h-[45px] w-[90px] bg-gray-300" />
          ) : (
            <select
              value={locale}
              onChange={async (e) =>
                await setUserLocale(e.target.value as Locale)
              }
              className="rounded-[5px] border border-midGrey bg-transparent px-4 py-[10px] text-black"
            >
              <option value={"en-US"}>ENG</option>
              <option value={"my-mm"}>MY</option>
            </select>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="block md:hidden lg:block xl:hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
                    fill="#1B1B1B"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-full border-none shadow-none">
              <form
                action=""
                className="flex w-full gap-2 rounded-[30px] border border-black bg-white px-4 py-3 text-black"
              >
                <Search />
                <input
                  type="text"
                  name="search"
                  placeholder={data.data.search as string}
                  className="m-0 w-full border-none bg-transparent p-0 text-base outline-none placeholder:text-black hover:outline-none"
                />
              </form>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <button className="block shrink-0 -rotate-90 lg:hidden">
              <LogOut className="text-black" />
            </button>
          ) : (
            <button className="block shrink-0 lg:hidden">
              <LogIn className="text-black" />
            </button>
          )}

          {user ? (
            <>
              <Link href="/create">
                <button className="c-outline hidden pb-6 lg:block">
                  {data.data.submit_work}
                </button>
              </Link>

              <Popover>
                <PopoverTrigger>
                  {user?.photoURL ? (
                    <Image
                      src={user?.photoURL || ""}
                      alt="user-avatar"
                      width={48}
                      height={48}
                      className="size-auto shrink-0 cursor-pointer rounded-full object-cover"
                      // onClick={() => signOut()}
                    />
                  ) : (
                    <div
                      className="flex size-[48px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-lg font-medium"
                      // onClick={() => signOut()}
                    >
                      {user?.email ? user.email[0].toUpperCase() : "N/A"}
                    </div>
                  )}
                </PopoverTrigger>
                <PopoverContent className="max-w-[140px]">
                  <div className="flex flex-col items-start gap-2">
                    <button className="w-full text-left hover:text-gray-500">
                      Profile
                    </button>
                    <button
                      className="w-full text-left hover:text-gray-500"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <button
              className="c-primary hidden pb-6 lg:block"
              onClick={() => setShowAuthModal(true)}
            >
              {data.data.register}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

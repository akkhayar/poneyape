"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useFirebase } from "@/hooks/useFirebase";
import { signOut } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { AlignJustify, Award, BookOpen, Home, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export const NavLinks = ({
  setShowAuthModel,
}: {
  setShowAuthModel: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const user = useCurrentUser(auth);

  const handleClick = (route: string) => {
    router.push(route);
    setOpen(false);
  };

  return (
    <>
      <button
        className="block text-black lg:hidden"
        onClick={() => setOpen(true)}
      >
        <AlignJustify />
      </button>

      {open && (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-full flex-col bg-white p-5 text-black lg:hidden">
          <X
            className="absolute right-4 top-4 z-10 cursor-pointer"
            size={24}
            onClick={() => setOpen(false)}
          />

          {user ? (
            <div className="flex items-center gap-4">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL || ""}
                  alt="user-avatar"
                  width={49}
                  height={48}
                  className="size-[48px] shrink-0 cursor-pointer rounded-full object-cover"
                  onClick={() => signOut()}
                />
              ) : (
                <div
                  className="flex size-[48px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-lg font-medium"
                  onClick={() => signOut()}
                >
                  {user?.email ? user.email[0].toUpperCase() : "N/A"}
                </div>
              )}
              <div className="flex flex-col justify-between">
                <p className="font-semibold text-[#1B1B1B]">
                  {user.displayName}
                </p>
                <p className="text-sm text-[#999999]">{user.email}</p>
              </div>
            </div>
          ) : (
            <Image
              src="/poneyape.svg"
              alt="PoneYape"
              width={85}
              height={36}
              className="mt-[40px]"
            />
          )}

          <div className="my-8 h-[1px] w-full bg-[#E5E5E0]" />

          <nav>
            <ul className="flex flex-col gap-9">
              <li>
                <button
                  onClick={() => handleClick("/")}
                  className="flex items-center gap-4 text-lg"
                >
                  <Home />
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("/contests")}
                  className="flex items-center gap-4 text-lg"
                >
                  <Award />
                  Contests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("/learning")}
                  className="flex items-center gap-4 text-lg"
                >
                  <BookOpen />
                  Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("/search")}
                  className="flex items-center gap-4 text-lg"
                >
                  <Search />
                  Explore
                </button>
              </li>
            </ul>
          </nav>

          {user ? (
            <button
              onClick={() => signOut()}
              className="mt-[40px] w-full rounded-[5px] border border-[#999999] bg-white py-3 text-black"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModel(true)}
              className="mt-[40px] w-full rounded-[5px] bg-[#3D52D5] py-3 text-white"
            >
              Register
            </button>
          )}

          <p className="mt-[10px] text-center text-sm text-[#999999]">
            Copyright 2024 @akkhayar.com
          </p>
        </div>
      )}
    </>
  );
};

"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SurveyPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SurveyPopup = ({ open, setOpen }: SurveyPopupProps) => {
  const [stage, setStage] = useState<0 | 1>(0);

  const handleChange = () => {
    setStage(1);
  };

  if (!open) return null;

  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center">
      {stage === 0 ? (
        <div className="relative flex w-full max-w-[670px] flex-col items-center justify-center gap-6 rounded-lg bg-white bg-gradient-to-br from-[#F8F0FF] via-[#FFFFFF] to-[#E2F0FF] px-6 py-10 shadow-md">
          <X
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-[32px] font-semibold">Just on sec</p>
            <p className="font-medium text-[#3D52D5]">
              Which option do you prefer?
            </p>
          </div>
          <p>You participation will help us improve Poneyape for better.</p>
          <div className="flex w-full flex-col gap-6 md:flex-row">
            <button
              onClick={handleChange}
              className="min-h-[140px] flex-1 rounded-lg shadow-[0px_1px_4px_0px_#0000001A]"
            >
              Option A
            </button>
            <button
              onClick={handleChange}
              className="min-h-[140px] flex-1 rounded-lg shadow-[0px_1px_4px_0px_#0000001A]"
            >
              Option A
            </button>
          </div>
        </div>
      ) : (
        <div className="relative flex w-full max-w-[420px] flex-col items-center justify-center rounded-lg bg-white bg-gradient-to-b from-[#FFFFFF] to-[#FFE7F7] px-6 py-10 shadow-md">
          <X
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <Image
            src="/assets/icons/mail.svg"
            alt="Mail Icon"
            width={56}
            height={56}
            className="mb-6 size-[56px]"
          />
          <p className="mb-4 text-[32px] font-semibold">Thank you</p>
          <p>Your participation means a lot to us!</p>
        </div>
      )}
    </div>
  );
};

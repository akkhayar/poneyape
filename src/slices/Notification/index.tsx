"use client";

import { useEffect, useState } from "react";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import { X } from "lucide-react";

/**
 * Props for `Notification`.
 */
export type NotificationProps = SliceComponentProps<Content.NotificationSlice>;

/**
 * Component for "Notification" Slices.
 */
const Notification = ({ slice }: NotificationProps): JSX.Element => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    localStorage.setItem("showNotification", showNotification.toString());
  }, [showNotification]);

  if (!showNotification) {
    return <></>;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex-between flex h-[30px]"
      style={{
        background: `repeating-linear-gradient(35deg, ${slice.primary.gradient_1}, ${slice.primary.gradient_1} 20px, ${slice.primary.gradient_2} 10px, ${slice.primary.gradient_2} 40px)`,
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3">
          <PrismicNextImage
            field={slice.primary.icon}
            className="h-[20px] w-[20px]"
          />
          <p className="lg:text-[14px]">
            <strong>{slice.primary.title}</strong>: {slice.primary.description}
          </p>
        </div>
      </div>

      <button onClick={() => setShowNotification(false)}>
        <X />
      </button>
    </section>
  );
};

export default Notification;

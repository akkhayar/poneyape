"use client";

import { useCallback } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";

import { firebaseClient } from "@/lib/firebase";
import { WebsiteDataFetch } from "@/types";

import { Skeleton } from "../ui/skeleton";
import WebsiteListFilter from "./WebsiteListFilter";

export default function WebsiteList() {
  const params = useSearchParams();

  const [q, setQ] = useQueryState("q", {
    defaultValue: params.get("q") || "",
  });
  const [tag, setTag] = useQueryState("tag", {
    defaultValue: params.get("tag") || "",
  });

  const handleFilterChange = useCallback(
    ({ q, tag }: { q: string; tag: string }) => {
      setQ(q || "");
      setTag(tag || "");
    },
    [setQ, setTag],
  );

  const { data, isLoading, error } = useQuery<WebsiteDataFetch[], Error>({
    queryKey: ["websites", { q, tag }],
    queryFn: () =>
      firebaseClient.fetchDataWithParams("triage-websites", q, tag),
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <WebsiteListFilter onChange={handleFilterChange} />
      {isLoading ? (
        <div className="grid w-full grid-cols-4 gap-5">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="relative h-[200px] w-full rounded-lg bg-gray-300" />
                <Skeleton className="h-4 w-10 bg-gray-300" />
                <Skeleton className="h-4 w-28 bg-gray-300" />
              </div>
            ))}
        </div>
      ) : data?.length === 0 ? (
        <p className="text-center">No data found</p>
      ) : (
        <div className="grid w-full grid-cols-4 gap-5">
          {data?.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <div className="relative h-[200px] w-full">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// hooks/useLocale.ts
"use client";

import useSWR from "swr";

import { getUserLocale } from ".";
import { Locale } from "./config";

const fetcher = (): Promise<Locale> =>
  getUserLocale().then((res) => res as Locale);

export default function useLocale() {
  const {
    data: locale,
    error,
    isLoading,
    isValidating,
  } = useSWR<Locale>("get-locale", fetcher, {
    refreshInterval: 100,
  });

  return { locale, isValidating, isLoading, error };
}

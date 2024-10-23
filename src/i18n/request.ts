import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./locale";

export default getRequestConfig(async () => {
  // Provide a static locale to avoid any complex locale-fetching logic
  const locale: string = await getUserLocale();

  // Directly return locale and messages
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

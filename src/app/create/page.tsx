import Page from "./page.client";
import { getUserLocale } from "@/locale";
import { createClient } from "@/prismicio";

export default async function CreatePage() {
  const locale = await getUserLocale();
  const client = createClient();

  const details = await client.getSingle("website_detail", { lang: locale });

  return <Page details={details} />;
}

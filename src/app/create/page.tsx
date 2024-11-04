import { redirect } from "next/navigation";

import CreateForm from "@/components/main/CreateForm";
import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import { getUserLocale } from "@/locale";
import { createClient } from "@/prismicio";

export default async function CreatePage() {
  const user = await getCurrentUser();
  const locale = await getUserLocale();
  const client = createClient();

  const details = await client.getSingle("website_detail", { lang: locale });

  if (!user) redirect("/");

  return <CreateForm details={details} />;
}

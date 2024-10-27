import { redirect } from "next/navigation";

import CreateForm from "@/components/main/CreateForm";
import { getCurrentUser } from "@/lib/firebase/firebase-admin";

export default async function CreatePage() {
  const user = await getCurrentUser();

  if (!user) redirect("/");

  return <CreateForm />;
}

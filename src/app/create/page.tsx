import CreateForm from "@/components/main/CreateForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { auth } from "@/lib/firebase/firebase";
import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import { redirect } from "next/navigation";

export default async function CreatePage() {
  const user = await getCurrentUser();

  if (!user) redirect("/");

  return <CreateForm />;
}

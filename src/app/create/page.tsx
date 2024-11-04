import { redirect } from "next/navigation";

import CreateForm from "@/components/main/CreateForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default async function CreatePage() {
  const user = useCurrentUser();

  if (!user) redirect("/");

  return <CreateForm />;
}

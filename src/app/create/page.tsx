import { redirect } from "next/navigation";

import CreateForm from "@/components/main/CreateForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function CreatePage() {
  const user = useCurrentUser();

  if (!user) redirect("/");

  return <CreateForm />;
}

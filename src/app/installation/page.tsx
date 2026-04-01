import { redirect } from "next/navigation";

export default function InstallationRedirect() {
  redirect("/services/installation-only");
}

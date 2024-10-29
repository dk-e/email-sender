import EmailForm from "@/components/email-form";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: { [pass: string]: string | undefined };
}) {
  try {
    if (searchParams.pass !== process.env.ACCESS_PASSWORD) redirect("/fail");
  } catch {
    redirect("/fail");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <EmailForm />
    </main>
  );
}

import EmailForm from "@/components/email-form";
import { redirect } from "next/navigation";

const PASSWORD = process.env.ACCESS_PASSWORD;

export default function Home({
  searchParams,
}: {
  searchParams: { p?: string };
}) {
  if (!searchParams.p || searchParams.p !== PASSWORD) {
    redirect("/fail");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <EmailForm />
    </main>
  );
}

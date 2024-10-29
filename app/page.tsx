import EmailForm from "@/components/email-form";
import { redirect } from "next/navigation";

export default async function Home(props: {
  searchParams: { [pass: string]: string | undefined };
}) {
  const searchParams = await props.searchParams;
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

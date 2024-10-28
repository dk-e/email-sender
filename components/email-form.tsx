"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Email"}
    </Button>
  );
}

export default function EmailForm() {
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      toast({
        title: "Email sent successfully!",
        description: "Your email has been sent.",
      });
      setMessage("Email sent successfully!");
    } else {
      toast({
        title: "Error sending email",
        description: "There was an error sending your email. Please try again.",
        variant: "destructive",
      });
      setMessage("Error sending email. Please try again.");
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      <form action={handleSubmit} className="space-y-4 w-full max-w-md">
        <Input type="email" name="to" placeholder="Recipient Email" />
        <Input type="text" name="subject" placeholder="Subject" />
        <Textarea name="html" placeholder="Email Content (HTML)" />
        <SubmitButton />
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </form>
    </>
  );
}

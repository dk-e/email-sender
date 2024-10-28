"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Hardcoded "from" email address
const FROM_EMAIL = "your-verified-email@yourdomain.com";

export async function sendEmail(formData: FormData) {
  const to = formData.get("to") as string;
  const subject = formData.get("subject") as string;
  const html = formData.get("html") as string;

  if (!to || !subject || !html) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set in the environment variables");
    }

    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

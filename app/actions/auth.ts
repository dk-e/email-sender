"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
  try {
    if (password === process.env.ADMIN_PASSWORD) {
      cookies().set("token", process.env.ADMIN_PASSWORD, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      return { success: true };
    }

    return { success: false, error: "Incorrect password" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "An unexpected error occurred" };
  }
}

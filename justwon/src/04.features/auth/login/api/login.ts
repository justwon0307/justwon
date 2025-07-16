"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { LoginErrorType } from "../models/types";
import { createServerClient } from "@shared/lib/supabase";

export async function login(
  formData: FormData,
  { returnTo }: { returnTo: string }
): Promise<LoginErrorType | void> {
  const supabase = await createServerClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  } else {
    revalidatePath("/");
    redirect(returnTo);
  }
}

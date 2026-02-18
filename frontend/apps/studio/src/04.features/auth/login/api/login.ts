import type z from "zod";

import { loginSchema } from "../models/schema";
import { api } from "@shared/api";

export async function loginAPI(
  payload: z.infer<typeof loginSchema>,
): Promise<string> {
  const res = await api.post("/login/", payload);
  return res.data;
}

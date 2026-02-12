import { api } from "@shared/api";

export async function refreshTokenAPI(): Promise<string> {
  const res = await api.post("/tokens/refresh/");

  return res.data;
}

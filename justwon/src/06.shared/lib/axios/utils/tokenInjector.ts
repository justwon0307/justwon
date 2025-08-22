import "server-only";
import { InternalAxiosRequestConfig } from "axios";

import { getAuthState } from "@shared/lib/auth";

export async function injectToken(
  request: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const { accessToken } = await getAuthState();

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
}

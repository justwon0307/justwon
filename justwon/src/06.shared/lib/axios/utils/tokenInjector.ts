import { InternalAxiosRequestConfig } from "axios";

export async function injectToken(
  request: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const token = await getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}

import type { AxiosError, AxiosResponse } from "axios";

export function shouldRefresh(error: AxiosError) {
  if (
    error.response?.status === 401 &&
    (error.response.data as { code?: string })?.code === "TOKEN_EXPIRED"
  ) {
    return true;
  }
  return false;
}

export function selectAccessToken(response: AxiosResponse) {
  return response.data.access;
}

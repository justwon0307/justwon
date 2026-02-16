/* eslint-disable @typescript-eslint/no-explicit-any */
import { isAxiosError } from "axios";

// 실패 / 에러
type APIStatus = "ERROR" | "NOT_FOUND" | "UNAUTHORIZED";

export class APIError extends Error {
  readonly status: APIStatus;
  readonly isAPIError = true; // 런타임 식별자

  constructor(message: string, status: APIStatus = "ERROR") {
    super(message);
    this.name = "APIError";
    this.status = status;
  }

  static fromUnknown(e: unknown) {
    const fallbackMsg = "알 수 없는 에러가 발생했습니다.";
    // AxiosError 케이스 우선 처리
    if (isAxiosError(e)) {
      const data = e.response?.data as
        | { message?: string; status?: APIStatus }
        | undefined;
      const message = data?.message ?? fallbackMsg;
      const status: APIStatus = data?.status ?? "ERROR";
      return new APIError(message, status);
    }
    // 이미 APIError면 그대로
    if (e instanceof APIError) return e;
    // 그 외
    return new APIError(fallbackMsg, "ERROR");
  }
}

// 타입가드 (컴포넌트에서 안전하게 판별)
export function isAPIError(e: unknown): e is APIError {
  return e !== null && (e as any).isAPIError === true;
}

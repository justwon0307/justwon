export const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL;

type ErrorResponseType = {
  message: string;
  status: "ERROR" | "NOT_FOUND" | "UNAUTHORIZED";
};

type SuccessResponseType<T> = {
  data: T;
  status: "SUCCESS";
};

// 커스텀 API 에러

export class BackendAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BackendAPIError";
  }
}

export type BackendAPIResponseType<T> =
  | SuccessResponseType<T>
  | ErrorResponseType;

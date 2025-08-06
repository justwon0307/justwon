type ErrorResponseType = {
  message: string;
  status: "ERROR";
};

type SuccessResponseType<T> = {
  data: T;
  status: "SUCCESS";
};

// 커스텀 API 에러

export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
}

export type APIResponseType<T> = SuccessResponseType<T> | ErrorResponseType;

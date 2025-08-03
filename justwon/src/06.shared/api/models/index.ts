type ErrorResponseType = {
  message: string;
  status: number;
};

type SuccessResponseType<T> = {
  data: T;
  status: "SUCCESS";
};

export type APIResponseType<T> = SuccessResponseType<T> | ErrorResponseType;

type ErrorResponseType = {
  message: string;
  status: "ERROR";
};

type SuccessResponseType<T> = {
  data: T;
  status: "SUCCESS";
};

export type APIResponseType<T> = SuccessResponseType<T> | ErrorResponseType;

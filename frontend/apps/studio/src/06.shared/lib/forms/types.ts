import { z } from "zod";

export type FormOptions<TSchema extends z.ZodType, TResponse> = {
  schema: TSchema;
  payload: z.infer<TSchema>;
  requestFn: (payload: z.infer<TSchema>) => Promise<TResponse>;
  onSuccess?: (data: TResponse) => void;
};

export type FormReturn = {
  errorMsg: string | undefined;
  submit: () => Promise<void>;
  canSubmit: boolean;
};

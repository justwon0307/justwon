import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

import type { FormOptions, FormReturn } from "./types";
import { APIError, isAPIError } from "@shared/api";

export function useForm<TSchema extends z.ZodType, TResponse>({
  schema,
  payload,
  requestFn,
  onSuccess,
}: FormOptions<TSchema, TResponse>): FormReturn {
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const [errPayloadKey, setErrPayloadKey] = useState(JSON.stringify(payload));
  const { mutateAsync, isPending } = useMutation<
    TResponse,
    APIError,
    z.infer<TSchema>
  >({
    mutationFn: requestFn,
  });

  const hasNullValue = Object.values(payload as Record<string, unknown>).some(
    (v) => v === null,
  );
  const canSubmit = !hasNullValue && errorMsg === undefined && !isPending;

  if (errorMsg && errPayloadKey !== JSON.stringify(payload)) {
    setErrorMsg(undefined);
  }

  const submit = async () => {
    if (!canSubmit) return;

    const result = schema.safeParse(payload);

    if (!result.success) {
      setErrorMsg(result.error.issues[0].message);
      setErrPayloadKey(JSON.stringify(payload));
      return;
    }

    setErrorMsg(undefined);

    try {
      const data = await mutateAsync(result.data);

      onSuccess?.(data);
    } catch (e: unknown) {
      if (isAPIError(e)) {
        setErrorMsg(e.message);
        setErrPayloadKey(JSON.stringify(payload));
        console.error(e.message);
      } else {
        setErrorMsg("알 수 없는 오류가 발생했습니다.");
        setErrPayloadKey(JSON.stringify(payload));
        console.error(e);
      }
    }
  };

  return {
    errorMsg,
    submit,
    canSubmit,
  };
}

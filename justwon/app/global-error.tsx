"use client";

import "client-only";

import { ErrorWrapper } from "@widgets/layouts";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export async function GlobalError({ error, reset }: Readonly<Props>) {
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body>
        <ErrorWrapper>
          <h2>알 수 없는 오류가 발생했습니다.</h2>
          <p>{error.message}</p>
          <button onClick={() => reset()}>다시 시도하기</button>
        </ErrorWrapper>
      </body>
    </html>
  );
}

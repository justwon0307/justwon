"use client";

import "client-only";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorPage({ error, reset }: Readonly<Props>) {
  return (
    <div>
      <h1>Error</h1>
      <p>오류가 발생했습니다.</p>
      <p>{error.message}</p>
      <button onClick={reset}>다시 시도</button>
    </div>
  );
}

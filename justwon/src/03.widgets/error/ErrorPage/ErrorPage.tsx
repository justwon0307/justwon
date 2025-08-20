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
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export function LearningErrorPage({ error, reset }: Readonly<Props>) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도하기</button>
    </div>
  );
}

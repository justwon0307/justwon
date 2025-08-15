"use client";

import "client-only";
import styled from "styled-components";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export function BlogErrorPage({ error, reset }: Readonly<Props>) {
  return (
    <Container>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도하기</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;

  > p {
    color: ${({ theme }) => theme.colors.error};
    font-size: 1.2rem;
    text-align: center;
  }

  > button {
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.onPrimary};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.25rem;
  }
`;

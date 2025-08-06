"use client";

import "client-only";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface Props {
  message: string;
  reloadText?: string;
}

export function ErrorFallback({
  message,
  reloadText = "새로고침",
}: Readonly<Props>) {
  const router = useRouter();

  const refresh = () => {
    router.refresh();
  };

  return (
    <Container>
      <h2>{message}</h2>
      <button onClick={refresh}>{reloadText}</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  gap: 16px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.gray500};
  }

  button {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

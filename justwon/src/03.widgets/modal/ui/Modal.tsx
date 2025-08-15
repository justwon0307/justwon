"use client";

import "client-only";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Readonly<Props>) {
  const router = useRouter();

  useEffect(() => {
    // ESC 누르면 모달 닫기
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && router.back();

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <ModalContainer
      aria-modal="true"
      onClick={() => router.back()} // 배경 클릭 닫기
    >
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  cursor: pointer;
`;

const Content = styled.dialog`
  position: relative;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: default;
`;

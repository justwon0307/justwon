"use client";

import Link from "next/link";
import styled from "styled-components";

interface Props {
  message?: string;
  reloadText?: string;
  href?: string;
}

export function NotFoundPageWidget({
  message = "죄송합니다. 찾고 있는 페이지가 존재하지 않습니다.",
  reloadText = "홈으로 돌아가기",
  href = "/",
}: Readonly<Props>) {
  return (
    <Container>
      <h1>404</h1>
      <div className="right">
        <p>{message}</p>
        <Link href={href} passHref>
          {reloadText}
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  text-align: center;

  h1 {
    padding-right: 24px;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.gray900};
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0 8px 24px;
    border-left: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  p {
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: 600;
  }

  a {
    display: inline-block;
    padding: 8px 16px;

    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 8px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

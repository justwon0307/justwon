"use client";

import "client-only";
import styled from "styled-components";

import { UserType } from "@shared/lib/auth";

interface Props {
  user: UserType;
}

export function UserButton({ user }: Readonly<Props>) {
  return (
    <Button>
      <span>User: {user.name}</span>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray300};
  }
`;

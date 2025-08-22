"use client";

import "client-only";
import styled from "styled-components";

import { MediaIcon } from "@shared/ui/Icons";

interface Props {
  title: string;
  icon?: string;
}

export function Title({ title, icon }: Readonly<Props>) {
  return (
    <Text>
      {icon && <MediaIcon name={icon} size={24} />}
      {title}
    </Text>
  );
}

const Text = styled.h1`
  display: flex;
  align-items: center;
  margin: 8px;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.75rem;
  font-weight: 600;
  font-family: "Geist", sans-serif;
`;

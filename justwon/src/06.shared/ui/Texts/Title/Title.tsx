"use client";

import "client-only";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  title: string;
  icon: string;
}

export function Title({ title, icon }: Readonly<Props>) {
  const { colors } = useColors();

  return (
    <Text>
      <AppIcon icon={icon} size={24} color={colors.textPrimary} />
      {title}
    </Text>
  );
}

const Text = styled.h1`
  display: flex;
  align-items: center;
  margin: 8px 16px;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.75rem;
  font-weight: 600;
  font-family: "Geist", sans-serif;
`;

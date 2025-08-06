"use client";

import "client-only";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

export function LearningNewPostButton() {
  const { user } = useUser();
  const { colors } = useColors();

  if (user?.publicMetadata.role !== "admin") {
    return null;
  }

  return (
    <WriteButton href="/learning/new">
      <AppIcon icon="pencil" size={16} color={colors.onPrimary} />
      포스트 작성
    </WriteButton>
  );
}

const WriteButton = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  gap: 8px;

  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

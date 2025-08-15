"use client";

import "client-only";
import { useUser } from "@clerk/nextjs";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { LinkButton } from "@shared/ui/Buttons";
import { AppIcon } from "@shared/ui/Icons";

export function GoToNewPostButton() {
  const { user } = useUser();
  const { colors } = useColors();

  if (user?.publicMetadata.role !== "admin") {
    return null;
  }

  return (
    <WriteButton href="/blog/new">
      <AppIcon icon="pencil" size={16} color={colors.onPrimary} />
      포스트 작성
    </WriteButton>
  );
}

const WriteButton = styled(LinkButton)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

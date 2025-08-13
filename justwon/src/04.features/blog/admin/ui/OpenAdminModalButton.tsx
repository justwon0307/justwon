"use client";

import "client-only";
import { useUser } from "@clerk/nextjs";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { LinkButton } from "@shared/ui/Buttons";
import { AppIcon } from "@shared/ui/Icons";

export function OpenAdminModalButton() {
  const { user } = useUser();
  const { colors } = useColors();

  if (user?.publicMetadata.role !== "admin") {
    return null;
  }

  return (
    <AdminButton href="/blog/admin">
      <AppIcon icon="admin" size={16} color={colors.onPrimary} />
      관리자 메뉴
    </AdminButton>
  );
}

const AdminButton = styled(LinkButton)`
  background-color: ${({ theme }) => theme.colors.gray600};
`;

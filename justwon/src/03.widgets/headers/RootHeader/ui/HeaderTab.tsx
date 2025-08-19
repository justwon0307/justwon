"use client";

import "client-only";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  tab: "projects" | "blog" | "about";
}

export function HeaderTab({ tab }: Readonly<Props>) {
  const { colors } = useColors();
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${tab}`);

  return (
    <Tab href={`/${tab}`} className={isActive ? "active" : ""}>
      <AppIcon
        icon={tab}
        size={18}
        color={isActive ? colors.primary : colors.gray900}
      />
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </Tab>
  );
}

const Tab = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};

  &.active {
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

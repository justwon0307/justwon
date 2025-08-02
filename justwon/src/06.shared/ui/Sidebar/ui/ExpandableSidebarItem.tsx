"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { AppIcon } from "@shared/ui/Icons";

/**
 * 사이드바 메뉴
 *   - expand/collapse할 수 있는 메뉴
 */

interface Props {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  icon?: string;
}

export function ExpandableSidebarItem({
  title,
  children,
  isActive,
  icon,
}: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SidebarItemContainer className={isActive ? "active" : ""}>
      <ItemMenuWrapper onClick={toggleExpand} data-testid="toggle">
        <span>
          {icon && <AppIcon icon={icon} size={16} />}
          <SidebarItemTitle>{title}</SidebarItemTitle>
        </span>
        <IconWrapper className={isExpanded ? "expanded" : ""}>
          <AppIcon icon="chevron-right" size={16} />
        </IconWrapper>
      </ItemMenuWrapper>
      <SidebarItemContent className={isExpanded ? "expanded" : ""}>
        {children}
      </SidebarItemContent>
    </SidebarItemContainer>
  );
}

const SidebarItemContainer = styled.div`
  padding: 8px 16px 8px 0;
`;

const ItemMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const SidebarItemTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  font-family: "Geist", sans-serif;
  font-weight: 500;
`;

const IconWrapper = styled.span`
  transition: transform 0.2s;
  transform: rotate(0deg);

  &.expanded {
    transform: rotate(90deg);
  }
`;

const slideDown = keyframes`
  from {
    display: none;
    max-height: 0;
    opacity: 0;
}

  to {
    display: flex;
    max-height: 100%;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    display: flex;
    max-height: 100%;
    opacity: 1;
  }
  to {
    display: none;
    max-height: 0;
    opacity: 0;
  }
`;

const SidebarItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 12px 0 12px 12px;
  gap: 12px;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.925rem;
  font-family: "Geist", sans-serif;
  font-weight: 500;

  border-left: 1px solid ${({ theme }) => theme.colors.divider};
  overflow: hidden;

  &.expanded {
    animation: ${slideDown} 0.5s ease forwards;
  }

  &:not(.expanded) {
    animation: ${slideUp} 0.25s ease forwards;
  }
`;

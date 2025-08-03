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
  isActive = false,
  icon,
}: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(isActive);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SidebarItemContainer>
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
  flex-direction: column;
  margin: 8px;
  padding: 4px 0 0 4px;
  gap: 4px;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.925rem;
  font-family: "Geist", sans-serif;
  font-weight: 500;

  border-left: 1px solid ${({ theme }) => theme.colors.divider};
  overflow: hidden;

  &.expanded {
    display: flex;
    animation: ${slideDown} 0.5s ease forwards;
  }

  &:not(.expanded) {
    display: none;
    animation: ${slideUp} 0.2s ease forwards;
  }
`;

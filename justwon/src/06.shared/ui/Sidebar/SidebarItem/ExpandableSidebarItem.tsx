"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

/**
 * 사이드바 메뉴
 *   - expand/collapse할 수 있는 메뉴
 */

interface Props {
  title: string;
  icon: string;
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export function ExpandableSidebarItem({
  title,
  icon,
  children,
  href,
  isActive = false,
}: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(isActive);

  const router = useRouter();
  const { colors } = useColors();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    router.push(href);
    setIsExpanded(true);
  };

  useEffect(() => {
    if (isActive) {
      setIsExpanded(true);
    }
  }, [isActive]);

  return (
    <div>
      <ItemMenuWrapper>
        <button
          className="link"
          onClick={handleLinkClick}
          data-testid="sidebar-link"
        >
          <AppIcon
            icon={icon}
            size={20}
            color={isActive ? colors.primary : colors.textPrimary}
          />
          <SidebarItemTitle className={isActive ? "active" : ""}>
            {title}
          </SidebarItemTitle>
        </button>
        <IconWrapper
          className={isExpanded ? "expanded" : ""}
          onClick={toggleExpand}
          data-testid="sidebar-toggle"
        >
          <AppIcon icon="chevron-right" size={16} />
        </IconWrapper>
      </ItemMenuWrapper>
      <SidebarItemContent className={isExpanded ? "expanded" : ""}>
        {children}
      </SidebarItemContent>
    </div>
  );
}

const ItemMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  .link {
    display: flex;
    flex: 1;
    align-items: center;
    text-align: left;
    gap: 8px;
  }
`;

const SidebarItemTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  font-family: "Geist", sans-serif;
  font-weight: 500;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const IconWrapper = styled.button`
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
  padding: 4px 0 0 12px;
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

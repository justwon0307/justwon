"use client";

import styled from "styled-components";

/**
 * 사이드바 메인 컨테이너
 */

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;

  .padding {
    padding-left: 24px;
    padding-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-left: 16px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-left: 32px;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
  }

  .sidebar-divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`;

/**
 * 사이드바 제목
 */

export const SidebarTitle = styled.h2`
  margin: 0.75rem 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;
`;

/**
 * 사이드바 아이템 컨테이너
 */

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 24px;
`;

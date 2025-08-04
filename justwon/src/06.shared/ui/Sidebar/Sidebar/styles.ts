"use client";

import styled from "styled-components";

/**
 * 사이드바 메인 컨테이너
 */

export const SidebarContainer = styled.div`
  width: 240px;
  padding: 0 16px 0 2.5%;
  overflow-y: auto;

  @media (min-width: 1720px) {
    width: 280px;
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
 * 사이드바 오류 메시지 Wrapper
 */

export const SidebarErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  text-align: center;
`;

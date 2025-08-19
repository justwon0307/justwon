"use client";

import styled from "styled-components";

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

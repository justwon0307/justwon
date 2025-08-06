"use client";

import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  border-radius: 4px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;

  .current {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
  }
`;

"use client";

import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  padding: 8px;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors.gray200};
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

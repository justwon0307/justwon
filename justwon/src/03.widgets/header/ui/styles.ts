"use client";

import styled from "styled-components";

import { VerticalDivider } from "@shared/ui/Dividers";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px 0 72px;

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.divider};

  .title {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  gap: 16px;

  > a {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray700};
  }

  > a.active {
    background-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.primary};
  }

  .user-button {
    display: flex;
    align-items: center;
    padding: 0 4px 0 12px;
    cursor: pointer;
  }
`;

export const Divider = styled(VerticalDivider)`
  background-color: ${({ theme }) => theme.colors.divider};
`;

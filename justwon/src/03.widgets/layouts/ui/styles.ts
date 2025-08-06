"use client";

import styled from "styled-components";

import { VerticalDivider } from "@shared/ui/Dividers";

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Divider = styled(VerticalDivider)`
  background-color: ${({ theme }) => theme.colors.divider};
`;

export const SubheaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 24px 4px 8px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.divider};

  .right {
    display: flex;
    align-items: center;
    gap: 16px;

    > a.write-button {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      background-color: ${({ theme }) => theme.colors.gray200};
      border: 1px solid ${({ theme }) => theme.colors.gray300};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: "Geist", sans-serif;
      text-decoration: none;
    }
  }
`;

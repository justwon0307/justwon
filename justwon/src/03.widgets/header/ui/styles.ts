"use client";

import styled from "styled-components";

import { VerticalDivider } from "@shared/ui/Dividers";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 36px;

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.divider};

  > a {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  > a {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Divider = styled(VerticalDivider)`
  background-color: ${({ theme }) => theme.colors.divider};
`;

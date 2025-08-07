"use client";

import styled from "styled-components";

import { VerticalDivider } from "@shared/ui/Dividers";

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const Divider = styled(VerticalDivider)`
  background-color: ${({ theme }) => theme.colors.divider};
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageWrapper = styled(Vertical)`
  flex: 1;
  padding: 8px 16px;
`;

export const PageContents = styled(Vertical)`
  flex: 1;
  gap: 8px;
`;

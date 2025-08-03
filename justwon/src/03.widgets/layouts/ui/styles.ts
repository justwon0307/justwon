"use client";

import styled from "styled-components";

import { VerticalDivider } from "@shared/ui/Dividers";

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  padding: 0 2.5%;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const Divider = styled(VerticalDivider)`
  background-color: ${({ theme }) => theme.colors.divider};
`;

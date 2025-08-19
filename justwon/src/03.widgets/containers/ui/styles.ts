"use client";

import styled from "styled-components";

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;

  .vertical-divider {
    align-self: stretch;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`;

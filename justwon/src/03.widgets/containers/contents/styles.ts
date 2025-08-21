"use client";

import styled from "styled-components";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContents = styled(Vertical)`
  flex: 1;
  padding: 0 16px;
  gap: 8px;

  .page-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .subtitle {
    margin: 8px 16px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .content-divider {
    margin: 12px 0 4px 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`;

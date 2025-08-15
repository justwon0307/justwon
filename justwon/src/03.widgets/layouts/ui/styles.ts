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

export const ContentWrapper = styled.div`
  flex: 1;
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

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;
    gap: 16px;
  }

  .subtitle {
    margin: 8px 24px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .content-divider {
    margin: 4px 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;

  > a {
    margin-top: 16px;
    padding: 8px 16px;

    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray300};

    &:hover {
      text-decoration: underline;
    }
  }
`;

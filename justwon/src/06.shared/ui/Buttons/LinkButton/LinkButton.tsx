"use client";

import "client-only";
import Link from "next/link";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  gap: 8px;

  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

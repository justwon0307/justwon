"use client";

import "client-only";
import styled from "styled-components";

interface Props {
  title: string;
}

export function Subtitle({ title }: Readonly<Props>) {
  return <Text>{title}</Text>;
}

const Text = styled.h3`
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  font-weight: 600;
  font-family: "Geist", sans-serif;
`;

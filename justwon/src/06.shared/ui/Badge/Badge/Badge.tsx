"use client";

import "client-only";
import styled from "styled-components";

import { AppIcon } from "@shared/ui/Icons";

interface Props {
  label: string;
  color?: string;
  backgroundColor?: string;
  icon?: string;
}

export function Badge({
  label,
  color = "white",
  backgroundColor = "blue",
  icon,
}: Readonly<Props>) {
  return (
    <Container
      style={{
        color,
        backgroundColor,
      }}
    >
      {icon && <AppIcon icon={icon} color={color} size={14} />}
      {label}
    </Container>
  );
}

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;

  border-radius: 0.375rem;
`;

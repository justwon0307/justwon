"use client";

import "client-only";
import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  text: string;
  style?: "notion" | "github";
  icon?: "lightbulb" | "info" | "warning" | "error";
  color?: string;
}

export function Callout({
  text,
  style = "notion",
  icon = "lightbulb",
  color,
}: Readonly<Props>) {
  const { colors } = useColors();

  if (style === "github") {
    color = color ?? colors.textPrimary;

    return (
      <GithubCalloutContainer
        style={{
          backgroundColor: `${color}20`,
          color,
          borderColor: color,
        }}
      >
        <AppIcon icon={icon} size={16} color={color} />
        <span>{text}</span>
      </GithubCalloutContainer>
    );
  }

  color = color ?? colors.gray300;

  return (
    <NotionCalloutContainer style={{ backgroundColor: color }}>
      <AppIcon icon={icon} size={16} color={color} />
      <span>{text}</span>
    </NotionCalloutContainer>
  );
}

const GithubCalloutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;

  font-size: 0.875rem;
  line-height: 1.25rem;
  border-left: 2px solid;
`;

const NotionCalloutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;

  border-radius: 8px;

  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};

  > span {
    flex: 1;
  }
`;

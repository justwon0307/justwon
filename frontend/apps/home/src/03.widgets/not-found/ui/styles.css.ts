import { style } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

export const containerStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "75vh",
  gap: "24px",
  textAlign: "center",
});

export const titleStyle = style({
  fontSize: "3rem",
  color: theme.colors.primary,
});

export const infoBoxStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 0 16px 24px",
  gap: "16px",
  borderLeft: `2px solid ${theme.colors.background.overlay}`,
});

export const messageStyle = style({
  color: theme.colors.text.default,
});

export const linkStyle = style({
  color: theme.colors.primary,
  backgroundColor: theme.colors.background.surface,
});

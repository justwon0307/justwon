import { style } from "@vanilla-extract/css";
import { variables } from "@justwon/theme";

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
  color: variables.colors.primary,
});

export const infoBoxStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 0 8px 24px",
  borderLeft: `2px solid ${variables.colors.background.overlay}`,
});

export const messageStyle = style({
  color: variables.colors.text.default,
});

export const linkStyle = style({
  color: variables.colors.primary,
  backgroundColor: variables.colors.background.surface,
});

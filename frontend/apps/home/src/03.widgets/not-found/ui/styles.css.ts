import { style } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "75vh",
  gap: "24px",
  textAlign: "center",
});

const title = style({
  fontSize: "3rem",
  color: theme.colors.primary,
});

const infoBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 0 16px 24px",
  gap: "16px",
  borderLeft: `2px solid ${theme.colors.background.overlay}`,
});

const link = style({
  color: theme.colors.primary,
  backgroundColor: theme.colors.background.surface,
});

export const styles = { container, title, infoBox, link };

import { style } from "@vanilla-extract/css";
import { variables } from "@justwon/theme";

const tabStyles = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 12px",
  gap: "4px",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 600,
});

export const inactiveIconStyles = style([
  tabStyles,
  {
    color: variables.colors.border.muted,
  },
]);

export const activeIconStyles = style([
  tabStyles,
  {
    backgroundColor: variables.colors.background.surface,
    color: variables.colors.primary,
  },
]);

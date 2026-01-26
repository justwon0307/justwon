import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

const common = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 12px",
  gap: "4px",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 600,
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.background.surface,
    },
  },
});

export const tabStyles = styleVariants({
  inactive: [
    common,
    {
      color: theme.colors.text.muted,
      cursor: "pointer",
    },
  ],
  active: [
    common,
    {
      backgroundColor: theme.colors.background.surface,
      color: theme.colors.primary,
      cursor: "default",
    },
  ],
});

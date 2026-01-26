import { style, styleVariants } from "@vanilla-extract/css";
import { variables } from "@justwon/theme";

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
      backgroundColor: variables.colors.background.overlay,
    },
  },
});

export const tabStyles = styleVariants({
  inactive: [
    common,
    {
      backgroundColor: variables.colors.background.surface,
      color: variables.colors.primary,
      cursor: "pointer",
    },
  ],
  active: [
    common,
    {
      backgroundColor: variables.colors.primary,
      color: variables.colors.background.surface,
      cursor: "default",
    },
  ],
});

import { style } from "@vanilla-extract/css";
import { baseLayer, theme } from "@justwon/designs/theme";

export const linkDefaultStyle = style({
  "@layer": {
    [baseLayer]: {
      display: "inline-block",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 16px",
      fontWeight: 600,
      borderRadius: "8px",
      color: theme.colors.primary,
      backgroundColor: "transparent",

      transition: "box-shadow 0.2s ease",
      selectors: {
        "&:hover": {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.02)",
        },
        "&:active": {
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
          transform: "scale(0.98)",
        },
      },
    },
  },
});

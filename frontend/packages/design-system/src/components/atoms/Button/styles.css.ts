import { style } from "@vanilla-extract/css";

import { baseLayer, theme } from "../../../theme";

export const buttonDefaultStyle = style({
  "@layer": {
    [baseLayer]: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 16px",
      fontWeight: 600,
      borderRadius: "8px",
      color: theme.colors.text.inverted,
      backgroundColor: theme.colors.primary,

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

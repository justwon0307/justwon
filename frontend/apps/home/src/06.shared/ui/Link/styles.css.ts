import { style } from "@vanilla-extract/css";
import { baseLayer, theme } from "@justwon/designs/theme";

const link = style({
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
    },
  },
});

export const styles = { link };

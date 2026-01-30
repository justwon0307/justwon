import { style } from "@vanilla-extract/css";

import { baseLayer, theme } from "../../../theme";

const button = style({
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
    },
  },
});

export const styles = { button };

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { baseLayer, theme } from "../../../theme";

const container = style({
  "@layer": {
    [baseLayer]: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
    },
  },
});

const error = recipe({
  base: {
    marginTop: 4,
    color: theme.colors.error,
    textAlign: "right",
    overflowWrap: "break-word",
  },
  variants: {
    size: {
      sm: { fontSize: "0.875rem" },
      md: { fontSize: "1rem" },
      lg: { fontSize: "1.125rem" },
    },
  },
});

const button = style({
  marginTop: 4,
  padding: "4px 16px",
  backgroundColor: theme.colors.primary,
  color: theme.colors.background.base,
});

export const styles = {
  container,
  error,
  button,
};

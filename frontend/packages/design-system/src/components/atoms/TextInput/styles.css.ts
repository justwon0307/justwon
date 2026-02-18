import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { baseLayer, theme } from "../../../theme";

const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
});

const label = recipe({
  base: {
    "@layer": {
      [baseLayer]: {
        flex: 1,
        textAlign: "right",
        fontWeight: 600,
      },
    },
  },
  variants: {
    size: {
      sm: {
        "@layer": {
          [baseLayer]: {
            fontSize: "0.875rem",
          },
        },
      },
      md: {
        "@layer": {
          [baseLayer]: {
            fontSize: "1rem",
          },
        },
      },
      lg: {
        "@layer": {
          [baseLayer]: {
            fontSize: "1.125rem",
          },
        },
      },
    },
  },
});

const input = style({
  "@layer": {
    [baseLayer]: {
      flex: 3,
      minWidth: 180,
      padding: "8px",
      borderRadius: 4,
      border: `1px solid ${theme.colors.border.default}`,
    },
  },
});

export const styles = {
  container,
  label,
  input,
};

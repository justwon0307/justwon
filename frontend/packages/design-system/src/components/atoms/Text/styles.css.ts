import { styleVariants } from "@vanilla-extract/css";

import { baseLayer, theme } from "../../../theme";

const text = styleVariants(
  {
    titleLarge: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "2.5rem",
      color: theme.colors.text.default,
    },
    titleSmall: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: "2rem",
      color: theme.colors.text.default,
    },
    bodyLarge: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      color: theme.colors.text.default,
    },
    bodySmall: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      color: theme.colors.text.default,
    },
  },
  (styleRule) => ({
    "@layer": { [baseLayer]: styleRule },
  }),
);

export const styles = { text };

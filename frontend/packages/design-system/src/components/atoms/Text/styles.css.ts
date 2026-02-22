import { styleVariants } from "@vanilla-extract/css";

import { baseLayer, theme } from "../../../theme";

const text = styleVariants(
  {
    titleLarge: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "2rem",
      color: theme.colors.text.default,
    },
    titleSmall: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "1.75rem",
      color: theme.colors.text.default,
    },
    bodyLarge: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      color: theme.colors.text.default,
    },
    bodySmall: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.125rem",
      color: theme.colors.text.default,
    },
    description: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1rem",
      color: theme.colors.text.muted,
    },
  },
  (styleRule) => ({
    "@layer": { [baseLayer]: { margin: 0, padding: 0, ...styleRule } },
  }),
);

export const styles = { text };

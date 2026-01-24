import { styleVariants } from "@vanilla-extract/css";
import { baseLayer, variables } from "@justwon/theme";

export const textStyles = styleVariants(
  {
    titleLarge: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "2.5rem",
      color: variables.colors.text.default,
    },
    titleSmall: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: "2rem",
      color: variables.colors.text.default,
    },
    bodyLarge: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      color: variables.colors.text.default,
    },
    bodySmall: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      color: variables.colors.text.default,
    },
  },
  (styleRule) => ({
    "@layer": { [baseLayer]: styleRule },
  }),
);

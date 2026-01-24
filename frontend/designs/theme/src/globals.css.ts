import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

import { baseColors } from "./colors/primitives";
import { colorVariables } from "./colors/variables";

export const variables = createGlobalThemeContract({
  colors: colorVariables,
});

createGlobalTheme(":root", variables, {
  colors: {
    primary: `light-dark(${baseColors.BLUE.dark}, ${baseColors.BLUE.light})`,
    secondary: baseColors.GOLD,
    success: baseColors.GREEN,
    warning: baseColors.YELLOW,
    error: baseColors.RED,
    background: {
      light: `light-dark(${baseColors.WHITE.light}, ${baseColors.BLACK.light})`,
      dark: `light-dark(${baseColors.WHITE.dark}, ${baseColors.BLACK.dark})`,
      default: `light-dark(${baseColors.WHITE.medium}, ${baseColors.BLACK.medium})`,
    },
    text: {
      default: `light-dark(${baseColors.BLACK.dark}, ${baseColors.WHITE.light})`,
      muted: `light-dark(${baseColors.BLACK.medium}, ${baseColors.WHITE.medium})`,
      inverted: `light-dark(${baseColors.WHITE.light}, ${baseColors.BLACK.dark})`,
    },
    border: {
      default: `light-dark(${baseColors.BLACK.light}, ${baseColors.WHITE.light})`,
      muted: baseColors.SILVER,
    },
  },
});

globalStyle("html", {
  colorScheme: "light dark",
});

globalStyle("html[data-theme='dark']", {
  colorScheme: "dark",
});

globalStyle("html[data-theme='light']", {
  colorScheme: "light",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  background: variables.colors.background.default,
  color: variables.colors.text.default,
  transition: "background 0.3s ease, color 0.3s ease",
});

globalStyle("html, body, a", {
  color: "inherit",
  textDecoration: "none",
});

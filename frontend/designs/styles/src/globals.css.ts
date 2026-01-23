import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

import { BaseColors } from "./colors/primitives";
import { colorVariables } from "./colors/variables";

export const variables = createGlobalThemeContract({
  color: colorVariables,
});

createGlobalTheme(":root", variables, {
  color: {
    primary: `light-dark(${BaseColors.BLUE.dark}, ${BaseColors.BLUE.light})`,
    secondary: BaseColors.GOLD,
    success: BaseColors.GREEN,
    warning: BaseColors.YELLOW,
    error: BaseColors.RED,
    background: {
      light: `light-dark(${BaseColors.WHITE.light}, ${BaseColors.BLACK.light})`,
      dark: `light-dark(${BaseColors.WHITE.dark}, ${BaseColors.BLACK.dark})`,
      default: `light-dark(${BaseColors.WHITE.medium}, ${BaseColors.BLACK.medium})`,
    },
    text: {
      default: `light-dark(${BaseColors.BLACK.dark}, ${BaseColors.WHITE.light})`,
      muted: `light-dark(${BaseColors.BLACK.medium}, ${BaseColors.WHITE.medium})`,
      inverted: `light-dark(${BaseColors.WHITE.light}, ${BaseColors.BLACK.dark})`,
    },
    border: {
      default: `light-dark(${BaseColors.BLACK.light}, ${BaseColors.WHITE.light})`,
      muted: `light-dark(${BaseColors.BLACK.medium}, ${BaseColors.WHITE.medium})`,
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
  background: variables.color.background.default,
  color: variables.color.text.default,
  transition: "background 0.3s ease, color 0.3s ease",
});

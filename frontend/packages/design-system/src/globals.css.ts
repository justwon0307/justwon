import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

import { baseColors } from "./theme/tokens/colors";
import { resetLayer, themeVariables } from "./theme/tokens/contracts.css";

createGlobalTheme(":root", themeVariables, {
  colors: {
    primary: `light-dark(${baseColors.BLUE.dark}, ${baseColors.GOLD})`,
    secondary: `light-dark(${baseColors.GOLD}, ${baseColors.BLUE.light})`,
    success: baseColors.GREEN,
    warning: baseColors.YELLOW,
    error: baseColors.RED,
    background: {
      base: `light-dark(${baseColors.WHITE.light}, ${baseColors.BLACK.dark})`,
      surface: `light-dark(${baseColors.WHITE.medium}, ${baseColors.BLACK.medium})`,
      overlay: `${baseColors.BLACK.medium}80`,
    },
    text: {
      default: `light-dark(${baseColors.BLACK.dark}, ${baseColors.WHITE.light})`,
      muted: `light-dark(${baseColors.BLACK.medium}, ${baseColors.WHITE.medium})`,
      inverted: `light-dark(${baseColors.WHITE.dark}, ${baseColors.BLACK.light})`,
    },
    border: {
      default: `light-dark(${baseColors.BLACK.light}80, ${baseColors.WHITE.light}80)`,
      muted: baseColors.SILVER,
    },
    shadow: `light-dark(${baseColors.BLACK.dark}20, ${baseColors.WHITE.dark}20)`,
  },
  zIndices: {
    hide: "-1",
    sticky: "100",
    dropdown: "200",
    popover: "300",
    overlay: "400",
    modal: "500",
    tooltip: "600",
    toast: "700",
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
  "@layer": {
    [resetLayer]: {
      margin: 0,
      padding: 0,
      lineHeight: 1.5,
      background: themeVariables.colors.background.base,
      color: themeVariables.colors.text.default,
      transition: "background 0.3s ease, color 0.3s ease",
      scrollbarGutter: "stable",
    },
  },
});

globalStyle("a", {
  "@layer": {
    [resetLayer]: {
      color: "inherit",
      textDecoration: "none",
    },
  },
});

globalStyle("button", {
  "@layer": {
    [resetLayer]: {
      background: "none",
      border: "none",
      padding: 0,
      margin: 0,
      font: "inherit",
      color: "inherit",
      cursor: "pointer",
    },
  },
});

globalStyle("dialog", {
  "@layer": {
    [resetLayer]: {
      padding: 0,
      gap: 0,
      border: "none",
    },
  },
});

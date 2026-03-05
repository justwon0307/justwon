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
      subtle: `light-dark(${baseColors.WHITE.dark}80, ${baseColors.BLACK.light}80)`,
      overlay: `${baseColors.BLACK.medium}80`,
    },
    text: {
      default: `light-dark(${baseColors.BLACK.dark}, ${baseColors.WHITE.light})`,
      muted: `light-dark(${baseColors.BLACK.light}, ${baseColors.WHITE.dark})`,
      inverted: `light-dark(${baseColors.WHITE.light}, ${baseColors.BLACK.dark})`,
    },
    border: {
      default: `light-dark(${baseColors.BLACK.light}40, ${baseColors.WHITE.light}40)`,
      muted: baseColors.SILVER,
    },
    shadow: `light-dark(${baseColors.BLACK.dark}20, ${baseColors.WHITE.dark}20)`,
  },
  zIndices: {
    //hide: "-1",
    //sticky: "100",
    //dropdown: "200",
    popover: "200",
    tooltip: "200",
    overlay: "300",
    modal: "400",
    toast: "500",
    alert: "600",
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
      fontFamily: "system-ui",
      userSelect: "none",
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

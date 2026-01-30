import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

import { resetLayer, themeVariables } from "./theme/tokens/contracts.css";

const baseColors = {
  WHITE: {
    light: "#F9FAFB",
    medium: "#E3E5E8",
    dark: "#CBD0D6",
  },
  BLACK: {
    light: "#3F4146",
    medium: "#1F2124",
    dark: "#0A0A0A",
  },
  BLUE: {
    light: "#3656AC",
    dark: "#1E3A8A",
  },
  GOLD: "#A78C29",
  SILVER: "#6B7280",
  RED: "#B91C1C",
  YELLOW: "#EBCC6F",
  GREEN: "#007200",
} as const;

createGlobalTheme(":root", themeVariables, {
  colors: {
    primary: `light-dark(${baseColors.BLUE.dark}, ${baseColors.GOLD})`,
    secondary: `light-dark(${baseColors.GOLD}, ${baseColors.BLUE.light})`,
    success: baseColors.GREEN,
    warning: baseColors.YELLOW,
    error: baseColors.RED,
    background: {
      base: `light-dark(${baseColors.WHITE.light}, ${baseColors.BLACK.dark})`,
      surface: `light-dark(${baseColors.WHITE.dark}, ${baseColors.BLACK.light})`,
      overlay: `light-dark(${baseColors.WHITE.medium}80, ${baseColors.BLACK.medium}80)`,
    },
    text: {
      default: `light-dark(${baseColors.BLACK.dark}, ${baseColors.WHITE.light})`,
      muted: `light-dark(${baseColors.BLACK.medium}, ${baseColors.WHITE.medium})`,
      inverted: `light-dark(${baseColors.WHITE.dark}, ${baseColors.BLACK.light})`,
    },
    border: {
      default: `light-dark(${baseColors.BLACK.light}80, ${baseColors.WHITE.light}80)`,
      muted: baseColors.SILVER,
      shadow: `light-dark(${baseColors.BLACK.dark}20, ${baseColors.WHITE.dark}20)`,
    },
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
      border: "none",
    },
  },
});

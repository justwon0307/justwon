import { createGlobalThemeContract, layer } from "@vanilla-extract/css";

// layer는 순서가 중요하다. 뒤에 선언될수록 우선순위가 높아진다.
export const resetLayer = layer("reset");
export const baseLayer = layer("base");

export const themeVariables = createGlobalThemeContract({
  colors: {
    primary: "color-primary",
    secondary: "color-secondary",
    success: "color-success",
    warning: "color-warning",
    error: "color-error",
    background: {
      base: "color-background-base",
      surface: "color-background-surface",
      subtle: "color-background-subtle",
      overlay: "color-background-overlay",
    },
    text: {
      default: "color-text-default",
      muted: "color-text-muted",
      inverted: "color-text-inverted",
    },
    border: {
      default: "color-border-default",
      muted: "color-border-muted",
    },
    shadow: "color-shadow",
  },
  zIndices: {
    //hide: "z-index-hide",
    //sticky: "z-index-sticky",
    //dropdown: "z-index-dropdown",
    popover: "z-index-popover",
    tooltip: "z-index-tooltip",
    overlay: "z-index-overlay",
    modal: "z-index-modal",
    toast: "z-index-toast",
    alert: "z-index-alert",
  },
});

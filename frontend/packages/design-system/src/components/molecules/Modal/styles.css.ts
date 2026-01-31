import { createVar, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";

const animationDuration = createVar();

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const popIn = keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
});

const popOut = keyframes({
  "0%": { transform: "scale(1)", opacity: 1 },
  "100%": { transform: "scale(0.9)", opacity: 0 },
});

const overlay = recipe({
  base: {
    display: "grid",
    width: "100vw",
    height: "100vh",
    "@supports": {
      "(height: 100dvh)": {
        height: "100dvh",
      },
    },

    position: "fixed",
    inset: 0,
    backgroundColor: theme.colors.background.overlay,
    zIndex: theme.zIndices.overlay,
  },
  variants: {
    exiting: {
      true: {
        animationName: fadeOut,
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
        animationDuration: animationDuration,
      },
      false: {
        animationName: fadeIn,
        animationTimingFunction: "ease-in",
        animationFillMode: "forwards",
        animationDuration: animationDuration,
      },
    },
    placement: {
      center: {
        placeItems: "center",
      },
      top: {
        placeItems: "start",
      },
    },
  },
});

const dialog = recipe({
  base: {
    borderRadius: "12px",
    backgroundColor: theme.colors.background.surface,
  },
  variants: {
    exiting: {
      true: {
        animationName: popOut,
        animationDuration: animationDuration,
        animationTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        animationFillMode: "forwards",
      },
      false: {
        animationName: popIn,
        animationDuration: animationDuration,
        animationTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        animationFillMode: "forwards",
      },
    },
    placement: {
      top: {
        marginTop: "120px",
      },
      center: {},
    },
  },
});

export const styles = {
  overlay,
  dialog,
};

export const vars = {
  animationDuration,
};

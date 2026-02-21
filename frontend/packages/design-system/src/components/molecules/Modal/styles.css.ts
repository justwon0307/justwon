import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";
import { fade } from "../../lib/animations/fade.css";
import { pop } from "../../lib/animations/pop.css";

const animationDuration = createVar();

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
        animation: `${fade.out} ${animationDuration} ease-in forwards`,
      },
      false: {
        animation: `${fade.in} ${animationDuration} ease-out forwards`,
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
        animation: `${pop.out} ${animationDuration} cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
      },
      false: {
        animation: `${pop.in} ${animationDuration} cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
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

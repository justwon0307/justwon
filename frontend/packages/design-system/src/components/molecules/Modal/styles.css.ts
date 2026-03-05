import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";

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
    zIndex: theme.zIndices.modal,
  },
  variants: {
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

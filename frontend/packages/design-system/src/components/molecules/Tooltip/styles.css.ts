import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";

const wrapper = style({
  display: "inline-flex",
  position: "relative",
  cursor: "pointer",
});

const tooltip = recipe({
  base: {
    padding: "4px 8px",
    width: "max-content",
    maxWidth: "240px",
    position: "absolute",
    left: "50%",
    fontSize: "0.75rem",
    whiteSpace: "normal",
    wordBreak: "break-word",
    textAlign: "center",
    borderRadius: "4px",
    backgroundColor: theme.colors.background.surface,
    zIndex: theme.zIndices.tooltip,
    pointerEvents: "none",

    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
    selectors: {
      [`${wrapper}:hover &`]: {
        opacity: 1,
        visibility: "visible",
      },
      [`${wrapper}:focus-within &`]: {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  variants: {
    placement: {
      top: {
        bottom: "75%",
        marginBottom: "12px",
      },
      bottom: {
        top: "75%",
        marginTop: "12px",
      },
    },
  },
});

const tooltipArrow = recipe({
  base: {
    position: "absolute",
    left: "50%",
    borderWidth: "4px",
    borderStyle: "solid",
  },
  variants: {
    placement: {
      top: {
        top: "100%",
        borderColor: `${theme.colors.background.surface} transparent transparent transparent`,
      },
      bottom: {
        bottom: "100%",
        borderColor: `transparent transparent ${theme.colors.background.surface} transparent`,
      },
    },
  },
});

export const styles = { wrapper, tooltip, tooltipArrow };

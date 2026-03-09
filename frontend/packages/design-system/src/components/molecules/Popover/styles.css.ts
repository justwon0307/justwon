import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";

const wrapper = style({
  display: "inline-flex",
  position: "relative",
});

const button = style({
  padding: 0,
});

const popover = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 12px",
    gap: "4px",
    position: "absolute",
    left: "50%",
    borderRadius: "8px",
    border: `1px solid ${theme.colors.border.default}`,
    backgroundColor: theme.colors.background.base,
    zIndex: theme.zIndices.popover,

    transition: "opacity 0.2s ease, visibility 0.2s ease",
  },
  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
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

const titleWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  color: theme.colors.warning,
});

const title = style({
  fontSize: "1rem",
  lineHeight: "1.25rem",
});

export const styles = { wrapper, button, popover, titleWrapper, title };

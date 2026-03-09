import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";

const TOAST_PADDING = "16px";

const toasterGroup = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "fixed",
    zIndex: theme.zIndices.toast,
  },
  variants: {
    position: {
      top: {
        alignItems: "center",
        top: TOAST_PADDING,
        left: "50%",
        transform: "translateX(-50%)",
      },
      bottom: {
        flexDirection: "column-reverse",
        alignItems: "center",
        bottom: TOAST_PADDING,
        left: "50%",
        transform: "translateX(-50%)",
      },
      "top-left": {
        alignItems: "flex-start",
        top: TOAST_PADDING,
        left: TOAST_PADDING,
      },
      "top-right": {
        alignItems: "flex-end",
        top: TOAST_PADDING,
        right: TOAST_PADDING,
      },
      "bottom-left": {
        flexDirection: "column-reverse",
        alignItems: "flex-start",
        bottom: TOAST_PADDING,
        left: TOAST_PADDING,
      },
      "bottom-right": {
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        bottom: TOAST_PADDING,
        right: TOAST_PADDING,
      },
    },
  },
});

const toast = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    margin: "0",
    padding: "8px 12px",
    borderRadius: "8px",
    border: `0.5px solid ${theme.colors.border.default}`,
    boxShadow: `1px 1px 3px ${theme.colors.shadow}`,
    transition: "background-color 0.2s ease",
  },
  variants: {
    type: {
      default: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 15%, transparent)`,
        ":hover": {
          backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 25%, transparent)`,
        },
      },
      success: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.success} 15%, transparent)`,
        ":hover": {
          backgroundColor: `color-mix(in srgb, ${theme.colors.success} 25%, transparent)`,
        },
      },
      warning: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.warning} 15%, transparent)`,
        ":hover": {
          backgroundColor: `color-mix(in srgb, ${theme.colors.warning} 25%, transparent)`,
        },
      },
      info: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.text.default} 15%, transparent)`,
        ":hover": {
          backgroundColor: `color-mix(in srgb, ${theme.colors.text.default} 25%, transparent)`,
        },
      },
    },
  },
});

const icon = recipe({
  variants: {
    type: {
      default: { color: theme.colors.primary },
      success: { color: theme.colors.success },
      warning: { color: theme.colors.warning },
      info: { color: theme.colors.text.default },
    },
  },
});

const textArea = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "4px",
  color: theme.colors.text.default,
});

const description = style({
  color: theme.colors.text.muted,
});

const closeButton = style({
  padding: "2px",
  borderRadius: "4px",
  color: theme.colors.text.default,
});

export const styles = {
  toasterGroup,
  toast,
  icon,
  textArea,
  description,
  closeButton,
};

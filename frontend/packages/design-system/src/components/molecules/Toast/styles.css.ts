import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { theme } from "../../../theme";
import { slide } from "../../lib/animations/slide.css";
import { ANIMATION_DURATION } from "./config";

const TOAST_PADDING = "16px";

const ANIMATION_ENTRY = `${ANIMATION_DURATION} ease-out`;
const ANIMATION_EXIT = `${ANIMATION_DURATION} ease-in forwards`;

const toast = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    margin: "0",
    padding: "8px 12px",
    position: "fixed",
    borderRadius: "8px",
    border: `0.5px solid ${theme.colors.border.divider}`,
    boxShadow: `1px 1px 3px ${theme.colors.shadow}`,
    zIndex: theme.zIndices.toast,
  },
  variants: {
    exiting: { true: {}, false: {} },
    position: {
      top: {
        top: TOAST_PADDING,
        left: "50%",
        transform: "translateX(-50%)",
        animation: `${slide.down.center} ${ANIMATION_ENTRY}`,
      },
      bottom: {
        bottom: TOAST_PADDING,
        left: "50%",
        transform: "translateX(-50%)",
        animation: `${slide.up.center} ${ANIMATION_ENTRY}`,
      },
      "top-left": {
        top: TOAST_PADDING,
        left: TOAST_PADDING,
        animation: `${slide.down.corner} ${ANIMATION_ENTRY}`,
      },
      "top-right": {
        top: TOAST_PADDING,
        right: TOAST_PADDING,
        animation: `${slide.down.corner} ${ANIMATION_ENTRY}`,
      },
      "bottom-left": {
        bottom: TOAST_PADDING,
        left: TOAST_PADDING,
        animation: `${slide.up.corner} ${ANIMATION_ENTRY}`,
      },
      "bottom-right": {
        bottom: TOAST_PADDING,
        right: TOAST_PADDING,
        animation: `${slide.up.corner} ${ANIMATION_ENTRY}`,
      },
    },
    type: {
      default: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 15%, transparent)`,
      },
      success: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.success} 15%, transparent)`,
      },
      warning: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.warning} 15%, transparent)`,
      },
      info: {
        backgroundColor: `color-mix(in srgb, ${theme.colors.text.default} 15%, transparent)`,
      },
    },
  },
  compoundVariants: [
    {
      variants: { position: "top", exiting: true },
      style: { animation: `${slide.down.centerExit} ${ANIMATION_EXIT}` },
    },
    {
      variants: { position: "bottom", exiting: true },
      style: { animation: `${slide.up.centerExit} ${ANIMATION_EXIT}` },
    },
    {
      variants: { position: "top-left", exiting: true },
      style: { animation: `${slide.down.cornerExit} ${ANIMATION_EXIT}` },
    },
    {
      variants: { position: "top-right", exiting: true },
      style: { animation: `${slide.down.cornerExit} ${ANIMATION_EXIT}` },
    },
    {
      variants: { position: "bottom-left", exiting: true },
      style: { animation: `${slide.up.cornerExit} ${ANIMATION_EXIT}` },
    },
    {
      variants: { position: "bottom-right", exiting: true },
      style: { animation: `${slide.up.cornerExit} ${ANIMATION_EXIT}` },
    },
  ],
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
  padding: "2px 8px",
  fontSize: "12px",
  borderRadius: "4px",
  backgroundColor: theme.colors.primary,
  color: theme.colors.text.inverted,
});

export const styles = { toast, icon, textArea, description, closeButton };

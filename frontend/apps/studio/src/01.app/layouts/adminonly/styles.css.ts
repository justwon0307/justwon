import { style } from "@vanilla-extract/css";
import { media, theme } from "@justwon/designs/theme";

const fallback = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const main = style({
  display: "flex",
  padding: "0 36px",

  "@media": {
    [media.breakpoints.mobile]: {
      padding: "0 16px",
    },
    [media.breakpoints.tablet]: {
      padding: "0 24px",
    },
  },
});

const header = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 36px",
  color: theme.colors.primary,
  boxShadow: `0 0.25px 4px ${theme.colors.shadow}`,

  "@media": {
    [media.breakpoints.mobile]: {
      padding: "12px",
    },
    [media.breakpoints.tablet]: {
      padding: "12px 24px",
    },
  },
});

export const styles = { fallback, main, header };

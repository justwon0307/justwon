import { style, styleVariants } from "@vanilla-extract/css";

import { baseColors } from "../tokens/colors";

const backgroundBase = style({
  display: "flex",
  flex: 1,
  alignItems: "flex-end",
  justifyContent: "flex-end",
});

const background = styleVariants({
  light: [
    backgroundBase,
    {
      backgroundColor: baseColors.WHITE.dark,
    },
  ],
  dark: [
    backgroundBase,
    {
      backgroundColor: baseColors.BLACK.light,
    },
  ],
});

const paperBase = style({
  display: "flex",
  padding: "4px",
  height: "70%",
  width: "70%",
  borderRadius: "8px 0 0 0",
});

const paper = styleVariants({
  light: [
    paperBase,
    {
      backgroundColor: baseColors.WHITE.light,
    },
  ],
  dark: [
    paperBase,
    {
      backgroundColor: baseColors.BLACK.dark,
    },
  ],
});

const textBase = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: "1.125rem",
});

const text = styleVariants({
  light: [
    textBase,
    {
      color: baseColors.BLACK.dark,
    },
  ],
  dark: [
    textBase,
    {
      color: baseColors.WHITE.light,
    },
  ],
});

const system = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
});

export const styles = {
  background,
  paper,
  text,
  system,
};

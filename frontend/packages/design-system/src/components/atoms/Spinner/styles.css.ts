import { createVar, keyframes, style } from "@vanilla-extract/css";

import { theme } from "../../../theme";

export const spinnerDiameter = createVar();
export const spinnerWidth = createVar();

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const spinner = style({
  width: spinnerDiameter,
  height: spinnerDiameter,
  border: `${spinnerWidth} solid transparent`,
  borderTop: `${spinnerWidth} solid ${theme.colors.primary}`,
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
});

export const styles = { spinner };

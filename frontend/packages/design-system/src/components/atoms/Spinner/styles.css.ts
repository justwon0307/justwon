import { style } from "@vanilla-extract/css";

import { theme } from "../../../theme";

const spinner = style({
  borderStyle: "solid",
  borderColor: "transparent",
  borderTopColor: theme.colors.primary,
  borderRadius: "50%",
});

export const styles = { spinner };

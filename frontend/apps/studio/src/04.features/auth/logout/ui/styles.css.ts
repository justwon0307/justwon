import { style } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

const button = style({
  padding: 0,
  color: theme.colors.error,
});

export const styles = { button };

import { style } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

const avatar = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
});

const error = style({
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  border: `2px solid ${theme.colors.error}`,
  color: theme.colors.error,
});

const wrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
});

export const styles = { avatar, error, wrapper };

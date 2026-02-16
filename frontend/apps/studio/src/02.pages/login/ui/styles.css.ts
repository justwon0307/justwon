import { style } from "@vanilla-extract/css";
import { theme } from "@justwon/designs/theme";

const container = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "85vh",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  minWidth: 320,
  maxWidth: 320,
  padding: "36px",
  gap: 24,
  borderRadius: 16,
  backgroundColor: theme.colors.background.surface,
});

const text = style({
  alignSelf: "center",
});

export const styles = {
  container,
  box,
  text,
};

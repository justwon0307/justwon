import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  minHeight: "90vh",
});

export const styles = { container };

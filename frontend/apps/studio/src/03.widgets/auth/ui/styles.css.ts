import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "8px",
});

export const styles = { wrapper };

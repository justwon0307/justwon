import { style } from "@vanilla-extract/css";

import { theme } from "../../../theme";

const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.background.overlay,
  zIndex: theme.zIndices.overlay,
});

const alert = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px 24px",
  minWidth: "300px",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.colors.background.base,
  borderRadius: "12px",
  zIndex: theme.zIndices.alert,
});

const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
});

const confirm = style({
  padding: "4px 8px",
  backgroundColor: theme.colors.primary,
  color: theme.colors.text.inverted,
  fontSize: "0.875rem",
});

const cancel = style({
  padding: "4px 8px",
  backgroundColor: theme.colors.background.subtle,
  color: theme.colors.text.muted,
  fontSize: "0.875rem",
});

export const styles = { overlay, alert, buttons, confirm, cancel };

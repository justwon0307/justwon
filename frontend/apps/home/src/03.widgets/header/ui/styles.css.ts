import { style } from "@vanilla-extract/css";
import { media, theme } from "@justwon/designs/theme";

const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: `0 0.25px 4px ${theme.colors.shadow}`,
});

const tabs = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px",
  gap: "16px",
});

const link = style({
  padding: "0 36px", // 데스크톱 설정
  backgroundColor: "transparent",

  "@media": {
    [media.breakpoints.mobile]: {
      padding: "0 16px",
    },
    [media.breakpoints.tablet]: {
      padding: "0 24px",
    },
  },
});

const divider = style({
  margin: "8px 0",
  alignSelf: "stretch",
  width: "2px",
  backgroundColor: theme.colors.background.surface,
});

export const styles = {
  container,
  tabs,
  link,
  divider,
};

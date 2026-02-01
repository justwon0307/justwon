import { style } from "@vanilla-extract/css";
import { media } from "@justwon/designs/theme";

const content = style({
  display: "flex",
  flex: 1,
  padding: "16px 36px", // 데스크톱 설정

  "@media": {
    [media.breakpoints.mobile]: {
      padding: "16px",
    },
    [media.breakpoints.tablet]: {
      padding: "16px 24px",
    },
  },
});

export const styles = { content };

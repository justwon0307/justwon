import { style } from "@vanilla-extract/css";
import { media, variables } from "@justwon/theme";

export const headerContainerStyles = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px", // 데스크탑 설정
  borderBottom: `0.5px solid ${variables.colors.border.default}`,

  "@media": {
    [media.mobile]: {
      padding: "0 16px",
    },
    [media.tablet]: {
      padding: "0 24px",
    },
  },
});

export const headerTabsStyles = style({
  display: "flex",
  flexDirection: "row",
  padding: "12px 0",
  gap: "16px",
});

export const linkStyles = style({
  color: variables.colors.primary,
});

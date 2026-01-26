import { style } from "@vanilla-extract/css";
import { media, theme } from "@justwon/designs/theme";

export const headerContainerStyles = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px", // 데스크탑 설정
  color: theme.colors.primary,
  borderBottom: `0.5px solid ${theme.colors.border.default}`,

  "@media": {
    [media.breakpoints.mobile]: {
      padding: "0 16px",
    },
    [media.breakpoints.tablet]: {
      padding: "0 24px",
    },
  },
});

export const headerTabsStyles = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "12px 0",
  gap: "16px",
});

export const linkStyles = style({
  color: theme.colors.primary,
  backgroundColor: "transparent",
});

export const dividerStyles = style({
  alignSelf: "stretch",
  width: "2px",
  backgroundColor: theme.colors.background.surface,
});

export const buttonStyles = style({
  padding: 0,
  border: "none",
  color: theme.colors.text.muted,
  backgroundColor: "transparent",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
});

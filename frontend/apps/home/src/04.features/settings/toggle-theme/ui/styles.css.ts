import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { media, theme } from "@justwon/designs/theme";

const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "4px 16px",
  minWidth: "60vw",
  maxHeight: "70vh",

  "@media": {
    [media.breakpoints.mobile]: {
      minWidth: "90vw",
      minHeight: "60vh",
      maxHeight: "80vh",
    },
  },
});

const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const closeButton = style({
  padding: 0,
  color: theme.colors.text.default, // 아이콘 버튼
  "@media": {
    [media.interaction.hover]: {
      selectors: {
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
  },
});

const content = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
});

export const styles = {
  container,
  header,
  closeButton,
  content,
};

const button = recipe({
  base: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "4px",
    textTransform: "capitalize",
  },
  variants: {
    active: {
      true: {
        color: theme.colors.primary,
      },
      false: {
        color: theme.colors.text.default,
      },
    },
  },
});

const cardWrapper = recipe({
  base: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    minWidth: "160px",
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    aspectRatio: "3 / 2",
  },
  variants: {
    active: {
      true: {
        color: theme.colors.primary,
        border: `2px solid ${theme.colors.primary}`,
      },
      false: {
        color: theme.colors.border.default,
        border: `2px solid transparent`,
        boxShadow: `none`,
      },
    },
  },
});

const check = style({
  position: "absolute",
  bottom: 0,
  right: "4px",
  color: theme.colors.primary,
});

export const buttonStyles = { button, cardWrapper, check };

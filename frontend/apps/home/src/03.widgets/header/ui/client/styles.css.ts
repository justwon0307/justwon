import { style } from "@vanilla-extract/css";
import { media, theme } from "@justwon/designs/theme";

const button = style({
  padding: "0 36px",
  border: "none",
  color: theme.colors.text.muted,
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "@media": {
    [media.breakpoints.mobile]: {
      padding: "0 16px",
    },
    [media.breakpoints.tablet]: {
      padding: "0 24px",
    },
    [media.interaction.hover]: {
      selectors: {
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
  },
});

export const styles = { button };

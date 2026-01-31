import { recipe } from "@vanilla-extract/recipes";
import { media, theme } from "@justwon/designs/theme";

const tab = recipe({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 12px",
    gap: "4px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,

    transition: "all 0.2s ease",
    "@media": {
      [media.interaction.hover]: {
        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.background.surface,
            boxShadow: `0 2px 8px ${theme.colors.shadow}`,
            transform: "scale(1.02)",
          },
        },
      },
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: theme.colors.background.surface,
        color: theme.colors.primary,
        cursor: "default",
      },
      false: {
        color: theme.colors.text.muted,
        cursor: "pointer",
      },
    },
  },
});

export const styles = { tab };

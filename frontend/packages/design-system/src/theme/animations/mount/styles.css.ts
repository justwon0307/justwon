import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const ANIMATION_DURATION = 300;

const popIn = keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
});
const popOut = keyframes({
  "0%": { transform: "scale(1)", opacity: 1 },
  "100%": { transform: "scale(0.9)", opacity: 0 },
});

const pop = recipe({
  variants: {
    exiting: {
      true: {
        animation: `${popOut} ${ANIMATION_DURATION}ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
      },
      false: {
        animation: `${popIn} ${ANIMATION_DURATION}ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
      },
    },
  },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});
const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const fade = recipe({
  variants: {
    exiting: {
      true: {
        animation: `${fadeOut} ${ANIMATION_DURATION}ms ease-in forwards`,
      },
      false: {
        animation: `${fadeIn} ${ANIMATION_DURATION}ms ease-out forwards`,
      },
    },
  },
});

const slideDownIn = keyframes({
  from: { transform: "translateY(-100%)" },
  to: { transform: "translateY(0)" },
});
const slideDownOut = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-100%)" },
});

const slideDown = recipe({
  variants: {
    exiting: {
      true: {
        animation: `${slideDownOut} ${ANIMATION_DURATION}ms ease-in forwards`,
      },
      false: {
        animation: `${slideDownIn} ${ANIMATION_DURATION}ms ease-out forwards`,
      },
    },
  },
});

const slideUpIn = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});
const slideUpOut = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

const slideUp = recipe({
  variants: {
    exiting: {
      true: {
        animation: `${slideUpOut} ${ANIMATION_DURATION}ms ease-in forwards`,
      },
      false: {
        animation: `${slideUpIn} ${ANIMATION_DURATION}ms ease-out forwards`,
      },
    },
  },
});

export const animations = { pop, fade, slideDown, slideUp };

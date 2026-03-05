import { createVar, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const rotateDuration = createVar();

const _rotate = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const rotate = recipe({
  base: {},
  variants: {
    spinning: {
      true: {
        animationName: _rotate,
        animationDuration: rotateDuration,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      },
      false: {
        animation: "none",
      },
    },
  },
});

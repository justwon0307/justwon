import { keyframes } from "@vanilla-extract/css";

// 튀어나오는 듯한 애니메이션
const popIn = keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
});

// 사라질 때 반대로 튀어들어가는 애니메이션
const popOut = keyframes({
  "0%": { transform: "scale(1)", opacity: 1 },
  "100%": { transform: "scale(0.9)", opacity: 0 },
});

export const pop = {
  in: popIn,
  out: popOut,
};

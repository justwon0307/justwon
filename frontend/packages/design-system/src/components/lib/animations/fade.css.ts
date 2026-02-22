import { keyframes } from "@vanilla-extract/css";

// 열릴때 사용하는 fade-in 애니메이션
const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

// 닫힐때 사용하는 fade-out 애니메이션
const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const fade = {
  in: fadeIn,
  out: fadeOut,
};

import { keyframes } from "@vanilla-extract/css";

// Centered positions use translateX(-50%), so keyframes must compose both transforms
const slideDownCenter = keyframes({
  from: { transform: "translateX(-50%) translateY(-100%)" },
  to: { transform: "translateX(-50%) translateY(0)" },
});
const slideUpCenter = keyframes({
  from: { transform: "translateX(-50%) translateY(100%)" },
  to: { transform: "translateX(-50%) translateY(0)" },
});

// Corner positions have no X translation
const slideDownCorner = keyframes({
  from: { transform: "translateY(-100%)" },
  to: { transform: "translateY(0)" },
});
const slideUpCorner = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

// Dedicated exit keyframes with reversed motion explicitly defined.
// Reusing entry keyframe names with `animation-direction: reverse` is unreliable —
// browsers won't restart a completed animation when only direction changes.
const slideDownCenterExit = keyframes({
  from: { transform: "translateX(-50%) translateY(0)" },
  to: { transform: "translateX(-50%) translateY(-100%)" },
});
const slideUpCenterExit = keyframes({
  from: { transform: "translateX(-50%) translateY(0)" },
  to: { transform: "translateX(-50%) translateY(100%)" },
});
const slideDownCornerExit = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-100%)" },
});
const slideUpCornerExit = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

export const slide = {
  down: {
    center: slideDownCenter,
    corner: slideDownCorner,
    centerExit: slideDownCenterExit,
    cornerExit: slideDownCornerExit,
  },
  up: {
    center: slideUpCenter,
    corner: slideUpCorner,
    centerExit: slideUpCenterExit,
    cornerExit: slideUpCornerExit,
  },
};

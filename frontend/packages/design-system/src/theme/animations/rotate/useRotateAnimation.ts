import { useCallback, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { rotateDuration } from "./styles.css";

export function useRotateAnimation(
  duration: number = 600,
  iterations: number = 2,
) {
  const [spinning, setSpinning] = useState<boolean>(false);

  const startSpinning = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, duration * iterations);
  }, [duration, iterations, spinning]);

  return {
    spinning,
    startSpinning,
    style: assignInlineVars({ [rotateDuration]: `${duration}ms` }),
  };
}

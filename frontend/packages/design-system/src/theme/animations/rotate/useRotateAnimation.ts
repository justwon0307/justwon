import { useCallback, useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { rotateDuration } from "./styles.css";

export function useRotateAnimation(
  duration: number = 600,
  iterations: number = 2, // 0이면 무한 반복
  startImmediately: boolean = false,
) {
  const [spinning, setSpinning] = useState<boolean>(startImmediately);

  const startSpinning = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
  }, [spinning]);

  useEffect(() => {
    // 이미 스피닝 중이거나 무한 반복인 경우 타이머 설정하지 않음
    if (!spinning || iterations === 0) return;

    const timeout = setTimeout(() => {
      setSpinning(false);
    }, duration * iterations);

    return () => clearTimeout(timeout);
  }, [spinning, duration, iterations]);

  return {
    spinning,
    startSpinning,
    style: assignInlineVars({ [rotateDuration]: `${duration}ms` }),
  };
}

/**
 * Entry 애니메이션은 css로 처리하면 되지만, exit 애니메이션은 시그널이 필요하다.
 */
"use client";

import { useCallback, useRef, useState } from "react";

import { ANIMATION_DURATION } from "./styles.css";

export function useExitAnimation(onClose?: () => void) {
  const [exiting, setExiting] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      globalThis.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startClosing = useCallback(() => {
    if (exiting) return; // 이미 종료 애니메이션이 진행 중이면 중복 실행 방지

    // 종료 애니메이션 시작 및 타이머 설정
    setExiting(true);
    clearTimer();

    timerRef.current = globalThis.setTimeout(() => {
      onClose?.();
      setExiting(false);
      clearTimer();
    }, ANIMATION_DURATION);
  }, [onClose, exiting]);

  return { exiting, startClosing };
}

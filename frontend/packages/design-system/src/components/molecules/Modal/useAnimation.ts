"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useAnimation(
  onClose: () => void,
  isOpen: boolean,
  duration: number,
) {
  const [mounted, setMounted] = useState<boolean>(isOpen);
  const [exiting, setExiting] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      globalThis.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startCloseAnimation = useCallback(() => {
    if (exiting) return;

    setExiting(true);
    clearTimer();

    timerRef.current = globalThis.setTimeout(() => {
      onClose();
      setMounted(false);
      setExiting(false);
      clearTimer();
    }, duration);
  }, [onClose, exiting, duration]);

  // Escape 누르면 모달이 닫히도록 키보드 이벤트 세팅
  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") startCloseAnimation();
    };

    globalThis.addEventListener("keydown", onKeyDown);

    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [mounted, startCloseAnimation]);

  // isOpen 값이 바뀔 때마다 처리
  useEffect(() => {
    if (isOpen) {
      // 열릴 때: 마운트 + exiting 해제
      setMounted(true);
      setExiting(false);
      clearTimer();
    } else if (mounted) {
      // 닫힐 때: exit 애니메이션 후 언마운트
      setExiting(true);
      timerRef.current = globalThis.setTimeout(() => {
        setMounted(false);
        setExiting(false);
        clearTimer();
      }, duration);
    }

    return () => {
      clearTimer();
    };
  }, [isOpen, mounted, duration]);

  // 모달이 열려있는 동안 배경 스크롤 방지
  useEffect(() => {
    if (!mounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mounted]);

  return { mounted, exiting, closeModal: startCloseAnimation, duration };
}

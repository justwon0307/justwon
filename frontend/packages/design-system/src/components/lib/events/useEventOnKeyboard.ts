"use client";

import { useEffect } from "react";

export function useEventOnKeyboard(
  key: string,
  callback: () => void,
  isActive: boolean = true,
) {
  // Escape 누르면 모달이 닫히도록 키보드 이벤트 세팅
  useEffect(() => {
    if (!isActive) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) callback();
    };

    globalThis.addEventListener("keydown", onKeyDown);

    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [key, callback, isActive]);
}

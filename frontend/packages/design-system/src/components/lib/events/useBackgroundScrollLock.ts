"use client";

import { useEffect } from "react";

/**
 * Modal, Alert 등에서 사용한다.
 */
export function useBackgroundScrollLock(mounted: boolean) {
  // 열려있는 동안 배경 스크롤 방지
  useEffect(() => {
    if (!mounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mounted]);
}

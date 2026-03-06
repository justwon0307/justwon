"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

type Options = {
  /**
   * 요소와 화면 가장자리 사이의 최소 여백. 기본값은 16px
   */
  offsetX?: number;
  /**
   * 요소와 화면 가장자리 사이의 최소 여백. 기본값은 16px
   */
  offsetY?: number;
};

/**
 * Tooltip, Popover, Dropdown 등 화면 위에 띄우는 요소의 위치를 계산하는 커스텀 훅.
 * [ 중요! ] Position Shift가 적용될 요소를 반드시 wrapper의 마지막 자식으로 위치시켜야 한다.
 */
export function usePositionShift(options: Options = {}) {
  const { offsetX = 16, offsetY = 16 } = options;
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom");
  const [shiftX, setShiftX] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const checkPosition = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const elementRect =
      wrapperRef.current.lastElementChild?.getBoundingClientRect() || null;

    if (!elementRect) return; // 요소가 없으면 계산할 수 없음

    // Y축 계산
    const spaceBelow = window.innerHeight - wrapperRect.bottom;
    const spaceNeeded = elementRect.height + offsetY;
    setPlacement(spaceBelow < spaceNeeded ? "top" : "bottom");

    // X축 계산
    const center = wrapperRect.left + wrapperRect.width / 2; // 요소의 중앙 X 좌표
    const halfWidth = elementRect.width / 2; // 요소의 절반 너비

    let newShiftX = 0;
    if (center - halfWidth < offsetX) {
      // 왼쪽 밖으로 잘릴 때, 오른쪽으로 이동
      newShiftX = offsetX - (center - halfWidth);
    } else if (center + halfWidth > window.innerWidth - offsetX) {
      // 오른쪽 밖으로 잘릴 때, 왼쪽으로 이동
      newShiftX = window.innerWidth - offsetX - (center + halfWidth);
    }

    setShiftX(newShiftX);
  }, [offsetX, offsetY]);

  useLayoutEffect(() => {
    checkPosition();
  }, [checkPosition]);

  return { placement, shiftX, wrapperRef, checkPosition };
}

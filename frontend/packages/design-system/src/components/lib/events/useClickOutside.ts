"use client";

import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void,
  isActive: boolean = true,
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    if (!isActive) return;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, isActive]);
}

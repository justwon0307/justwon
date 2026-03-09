"use client";

import { randomBytes } from "node:crypto";
import { useCallback, useLayoutEffect, useState } from "react";

const TOAST_EVENT_NAME = "SHOW_TOAST";

export type PositionOptions =
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type ToastOptions = {
  /**
   * Toast가 화면에 표시되는 시간 (밀리초 단위).
   * 기본값은 3초 (3000ms)
   * 0으로 설정하면, 직접 닫을 때까지 표시.
   */
  duration: number; // Toast가 화면에 표시되는 시간 (밀리초 단위)
  position: PositionOptions; // Toast의 위치
  /**
   * Toast의 유형.
   * 유형에 따라 배경 색상과 아이콘이 달라진다.
   */
  type: "default" | "success" | "warning" | "info";
  description?: string; // Toast의 추가 설명 텍스트 (선택 사항)
};

type ToastType = {
  id: string;
  message: string;
  options: ToastOptions;
};

let toasterMounted = false;
let toastQueue: ToastType[] = [];

export function useToaster() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const removeToast = useCallback((id: ToastType["id"]) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  useLayoutEffect(() => {
    const toastEventListener = (event: Event) => {
      const newToast = (event as CustomEvent<ToastType>).detail; // 이벤트에서 새 Toast 데이터를 가져옴
      setToasts((prevToasts) => [...prevToasts, newToast]);
    };

    document.addEventListener(TOAST_EVENT_NAME, toastEventListener);

    return () => {
      document.removeEventListener(TOAST_EVENT_NAME, toastEventListener);
    };
  }, []);

  useLayoutEffect(() => {
    // register
    toasterMounted = true;

    // flush queued toasts that arrived before the Toaster mounted
    if (toastQueue.length > 0) {
      const queued = [...toastQueue];
      toastQueue = [];
      queued.forEach((item) => {
        document.dispatchEvent(
          new CustomEvent(TOAST_EVENT_NAME, { detail: item }),
        );
      });
    }

    return () => {
      // unregister
      toasterMounted = false;
    };
  }, []);

  return { toasts, removeToast };
}

const defaultOptions: ToastOptions = {
  duration: 3000,
  position: "top",
  type: "default",
};

export function toast(
  message: string,
  options: Partial<ToastOptions> = {},
): void {
  const event = new CustomEvent(TOAST_EVENT_NAME, {
    detail: {
      id: randomBytes(16).toString("hex"),
      message,
      options: { ...defaultOptions, ...options },
    },
  });

  if (!toasterMounted) {
    // Toaster가 아직 마운트되지 않은 경우, Toast를 큐에 저장
    toastQueue.push(event.detail);
    return;
  }
  document.dispatchEvent(event);
}

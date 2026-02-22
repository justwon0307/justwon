import { useLayoutEffect, useState } from "react";

import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { AppIcon } from "../../../icons/components/app/AppIcon";
import {
  TOAST_EVENT_NAME,
  ANIMATION_DURATION_MS,
  ToastOptions,
} from "./config";
import { setToasterMounted } from "./state";
import { styles } from "./styles.css";

type Toast = {
  id: string;
  message: string;
  options: ToastOptions;
  exiting: boolean;
};

function getIconName(type: Toast["options"]["type"]) {
  switch (type) {
    case "success":
      return "check-circle";
    case "warning":
      return "warning-outline";
    case "info":
      return "info-circle";
    default:
      return "bell";
  }
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(newToast: Toast) {
    setToasts((prevToasts) => [...prevToasts, { ...newToast, exiting: false }]);
  }

  function removeToast(id: Toast["id"]) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  function startExitAnimation(id: Toast["id"]) {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, exiting: true } : toast,
      ),
    );
    setTimeout(() => {
      removeToast(id);
    }, ANIMATION_DURATION_MS);
  }

  useLayoutEffect(() => {
    const handleAddToast = (event: Event) => {
      const newToast = (event as CustomEvent<Toast>).detail; // 이벤트에서 새 Toast 데이터를 가져옴
      addToast(newToast);

      // duration이 0 이하면, 패스
      if (newToast.options.duration <= 0) return;
      // 그렇지 않으면, 자동으로 Toast를 제거하는 타이머 설정
      setTimeout(() => {
        startExitAnimation(newToast.id);
      }, newToast.options.duration);
    };

    document.addEventListener(
      TOAST_EVENT_NAME,
      handleAddToast as EventListener,
    );

    return () => {
      document.removeEventListener(
        TOAST_EVENT_NAME,
        handleAddToast as EventListener,
      );
    };
  }, []);

  useLayoutEffect(() => {
    // Toaster가 마운트될 때, 전역 상태에 마운트 여부를 설정
    // 개발 모드에서 제대로 설정하지 않으면 경고를 콘솔에 출력하기 위해 필요한 작업.
    setToasterMounted(true);
    return () => {
      setToasterMounted(false);
    };
  }, []);

  return (
    <div>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={styles.toast({
            position: toast.options.position,
            exiting: toast.exiting,
            type: toast.options.type,
          })}
        >
          <AppIcon
            className={styles.icon({ type: toast.options.type })}
            icon={getIconName(toast.options.type)}
            size={20}
          />
          <div className={styles.textArea}>
            <Text variant="bodySmall">{toast.message}</Text>
            {toast.options.description && (
              <Text className={styles.description} variant="description">
                {toast.options.description}
              </Text>
            )}
          </div>
          {toast.options.duration <= 0 && (
            <Button
              className={styles.closeButton}
              onClick={() => startExitAnimation(toast.id)}
            >
              닫기
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

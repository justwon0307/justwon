"use client";

import { useCallback, useEffect, useRef } from "react";
import { clsx } from "clsx";

import { AppIcon } from "../../../icons";
import { animations, useExitAnimation } from "../../../theme";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { ToastOptions } from "./manager";
import { styles } from "./styles.css";

interface Props {
  message: string;
  options: ToastOptions;
  callback: () => void; // Toast가 사라질 때 실행할 콜백 함수 (예: 부모 컴포넌트에서 상태 업데이트 등)
}

export function Toast({ message, options, callback }: Readonly<Props>) {
  const { exiting, startClosing } = useExitAnimation(callback);

  const remainingRef = useRef(options.duration);
  const startedAtRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback(() => {
    if (remainingRef.current <= 0) return;
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(startClosing, remainingRef.current);
  }, [startClosing]);

  const pauseTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (startedAtRef.current !== null) {
      remainingRef.current -= Date.now() - startedAtRef.current;
      startedAtRef.current = null;
    }
  }, []);

  const getIconName = (type: ToastOptions["type"]) => {
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
  };

  useEffect(() => {
    if (options.duration <= 0) return;

    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [options.duration, startTimer]);

  return (
    <div
      className={clsx(
        styles.toast({
          type: options.type,
        }),
        options.position.includes("top")
          ? animations.slideDown({ exiting })
          : animations.slideUp({ exiting }),
      )}
      onMouseEnter={options.duration > 0 ? pauseTimer : undefined}
      onMouseLeave={options.duration > 0 ? startTimer : undefined}
    >
      <AppIcon
        className={styles.icon({ type: options.type })}
        icon={getIconName(options.type)}
        size={20}
      />
      <div className={styles.textArea}>
        <Text variant="bodySmall">{message}</Text>
        {options.description && (
          <Text className={styles.description} variant="description">
            {options.description}
          </Text>
        )}
      </div>
      <Button className={styles.closeButton} onClick={startClosing}>
        <AppIcon icon="close" size={12} />
      </Button>
    </div>
  );
}

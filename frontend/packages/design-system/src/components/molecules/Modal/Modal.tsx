"use client";

import { createPortal } from "react-dom";
import { useRef } from "react";
import { clsx } from "clsx";

import { animations, useExitAnimation } from "../../../theme";
import { useBackgroundScrollLock } from "../../lib/events/useBackgroundScrollLock";
import { useClickOutside } from "../../lib/events/useClickOutside";
import { useEventOnKeyboard } from "../../lib/events/useEventOnKeyboard";
import { styles } from "./styles.css";

interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  placement?: "center" | "top";
}

export function Modal({
  isOpen,
  onClose,
  placement = "center",
  className,
  children,
  ...rest
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { exiting, startClosing } = useExitAnimation(onClose);
  useEventOnKeyboard("Escape", startClosing, isOpen);
  useBackgroundScrollLock(isOpen);
  useClickOutside(dialogRef, startClosing, isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className={clsx(
        styles.overlay({ placement }),
        animations.fade({ exiting }),
      )}
      data-testid="modal-overlay"
    >
      <dialog
        ref={dialogRef}
        open={isOpen}
        className={clsx(
          styles.dialog({ placement }),
          animations.pop({ exiting }),
          className,
        )}
        data-testid="modal-dialog"
        {...rest}
      >
        {children}
      </dialog>
    </div>,
    document.body,
  );
}

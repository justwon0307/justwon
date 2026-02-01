import { createPortal } from "react-dom";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import { useAnimation } from "./useAnimation";
import { styles, vars } from "./styles.css";

interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  animationDuration?: number;
  placement?: "center" | "top";
}

export function Modal({
  isOpen,
  onClose,
  animationDuration = 200,
  placement = "center",
  className,
  children,
  ...rest
}: Props) {
  const { mounted, exiting, closeModal, duration } = useAnimation(
    onClose,
    isOpen,
    animationDuration,
  );

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className={styles.overlay({ exiting, placement })}
      style={{
        ...assignInlineVars({
          [vars.animationDuration]: `${duration}ms`,
        }),
      }}
      onMouseDown={closeModal}
      data-testid="modal-overlay"
    >
      <dialog
        open={mounted}
        onMouseDown={(e) => e.stopPropagation()}
        className={clsx(styles.dialog({ exiting, placement }), className)}
        style={{
          ...assignInlineVars({
            [vars.animationDuration]: `${duration}ms`,
          }),
        }}
        data-testid="modal-dialog"
        {...rest}
      >
        {children}
      </dialog>
    </div>,
    document.body,
  );
}

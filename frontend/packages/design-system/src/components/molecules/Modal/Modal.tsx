import { createPortal } from "react-dom";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { styles, vars } from "./styles.css";
import { useAnimation } from "./useAnimation";

interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose, children, ...rest }: Props) {
  const { mounted, exiting, startCloseAnimation, duration } = useAnimation(
    onClose,
    isOpen,
  );

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className={styles.overlay({ exiting })}
      style={{
        ...assignInlineVars({
          [vars.animationDuration]: `${duration}ms`,
        }),
      }}
      onMouseDown={startCloseAnimation}
      data-testid="modal-overlay"
    >
      <dialog
        open={mounted}
        className={styles.dialog({ exiting })}
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

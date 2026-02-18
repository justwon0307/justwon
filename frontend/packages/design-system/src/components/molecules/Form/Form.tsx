import { clsx } from "clsx";

import { Button } from "../../atoms/Button/Button";
import { styles } from "./styles.css";

interface Props extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
> {
  buttonLabel?: string;
  buttonClassName?: string;
  disabled?: boolean;
  errorMsg?: string;
  errorMsgSize?: "sm" | "md" | "lg";
  onSubmit?: () => Promise<void> | void;
}

export function Form({
  buttonLabel,
  buttonClassName,
  disabled,
  errorMsg,
  errorMsgSize = "sm",
  onSubmit,
  className,
  children,
  ...props
}: Readonly<Props>) {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!disabled) {
      await onSubmit?.();
    }
  };

  return (
    <form
      className={clsx(styles.container, className)}
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
      {errorMsg && (
        <span className={styles.error({ size: errorMsgSize })}>{errorMsg}</span>
      )}
      {buttonLabel && (
        <Button
          className={clsx(styles.button, buttonClassName)}
          type="submit"
          disabled={disabled}
          data-testid="form-submit-button"
        >
          {buttonLabel}
        </Button>
      )}
    </form>
  );
}

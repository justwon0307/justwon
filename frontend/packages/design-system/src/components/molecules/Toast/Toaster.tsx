import { Toast } from "./Toast";
import { useToaster } from "./manager";
import { styles } from "./styles.css";

export function Toaster() {
  const { toasts, removeToast } = useToaster();

  const positions = [
    "top",
    "bottom",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ] as const;

  return (
    <>
      {positions.map((position) => {
        const positionToasts = toasts.filter(
          (t) => t.options.position === position,
        );
        if (positionToasts.length === 0) return null;
        return (
          <div key={position} className={styles.toasterGroup({ position })}>
            {positionToasts.map((toast) => (
              <Toast
                key={toast.id}
                message={toast.message}
                options={toast.options}
                callback={() => removeToast(toast.id)}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

import { ToastOptions, TOAST_EVENT_NAME } from "./config";
import { isToasterMounted, deferOrDispatch } from "./state";

const defaultOptions: ToastOptions = {
  duration: 3000,
  position: "top",
  type: "default",
};

export function toast(
  message: string,
  options: Partial<ToastOptions> = {},
  defer: boolean = false,
): void {
  const event = new CustomEvent(TOAST_EVENT_NAME, {
    detail: {
      id: Date.now() + Math.random().toString(36).substring(2),
      message,
      options: { ...defaultOptions, ...options },
    },
  });

  if (defer) {
    deferOrDispatch(() => document.dispatchEvent(event));
  } else {
    if (process.env.NODE_ENV !== "production" && !isToasterMounted()) {
      console.warn(
        "[Toast] toast() was called without a <Toaster> mounted in the tree. " +
          "Add <Toaster /> to your app root so toasts are displayed.",
      );
    }
    document.dispatchEvent(event);
  }
}

"use client";

import { useLayoutEffect, useState } from "react";

const ALERT_EVENT_NAME = "SHOW_ALERT";

export type AlertActions = {
  onClose?: () => void | Promise<void>;
};

export type ConfirmActions = {
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
};

type CommonProps = {
  title: string;
  message: string;
};

type AlertType =
  | ({ type: "alert" } & AlertActions & CommonProps)
  | ({ type: "confirm" } & ConfirmActions & CommonProps);

let alerterMounted = false;
let alertActive = false;

export function useAlert() {
  const [alert, setAlert] = useState<AlertType | null>(null);

  const closeAlert = async () => {
    setAlert(null);
    alertActive = false;
  };

  useLayoutEffect(() => {
    const handleShowAlert = (event: Event) => {
      const newAlert = (event as CustomEvent<AlertType>).detail;

      setAlert(newAlert);
      alertActive = true;
    };

    document.addEventListener(ALERT_EVENT_NAME, handleShowAlert);

    return () => {
      document.removeEventListener(ALERT_EVENT_NAME, handleShowAlert);
    };
  }, []);

  useLayoutEffect(() => {
    // register
    alerterMounted = true;

    return () => {
      // unregister
      alerterMounted = false;
      alertActive = false;
    };
  }, []);

  return { alert, closeAlert };
}

function dispatch(options: AlertType): void {
  if (!alerterMounted) {
    console.warn(
      "[Alert] called without an <Alerter> mounted in the tree. " +
        "Add <Alerter /> to your app root so alerts are displayed.",
    );
    return;
  }

  if (alertActive) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Alert] called while another alert is in progress. Ignoring.",
      );
    }
    return;
  }

  document.dispatchEvent(
    new CustomEvent(ALERT_EVENT_NAME, { detail: options }),
  );
}

export function showAlert(
  title: string,
  message: string,
  onClose?: () => void | Promise<void>,
): void {
  dispatch({ type: "alert", title, message, onClose });
}

export function showConfirm(
  title: string,
  message: string,
  onConfirm: () => void | Promise<void>,
  onCancel?: () => void | Promise<void>,
): void {
  dispatch({ type: "confirm", title, message, onConfirm, onCancel });
}

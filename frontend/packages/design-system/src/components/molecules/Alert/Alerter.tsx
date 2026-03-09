import { clsx } from "clsx";

import { animations, useExitAnimation } from "../../../theme";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { useBackgroundScrollLock } from "../../lib/events/useBackgroundScrollLock";
import { AlertActions, ConfirmActions, useAlert } from "./manager";
import { styles } from "./styles.css";

interface Props {
  closeAlert: () => void;
}

type AlertProps = AlertActions & Props;

function AlertButtons({ onClose, closeAlert }: Readonly<AlertProps>) {
  const handleClose = async () => {
    await onClose?.();
    closeAlert();
  };

  return (
    <div className={styles.buttons}>
      <Button className={styles.confirm} onClick={handleClose}>
        확인
      </Button>
    </div>
  );
}

type ConfirmProps = ConfirmActions & Props;

function ConfirmButtons({
  onConfirm,
  onCancel,
  closeAlert,
}: Readonly<ConfirmProps>) {
  const handleConfirm = async () => {
    await onConfirm();
    closeAlert();
  };

  const handleCancel = async () => {
    await onCancel?.();
    closeAlert();
  };

  return (
    <div className={styles.buttons}>
      <Button className={styles.cancel} onClick={handleCancel}>
        취소
      </Button>
      <Button className={styles.confirm} onClick={handleConfirm}>
        확인
      </Button>
    </div>
  );
}

export function Alerter() {
  const { alert, closeAlert } = useAlert();
  const { exiting, startClosing } = useExitAnimation(closeAlert);
  useBackgroundScrollLock(!!alert);

  if (!alert) return null;

  return (
    <div className={clsx(styles.overlay, animations.fade({ exiting }))}>
      <div className={clsx(styles.alert, animations.fade({ exiting }))}>
        <Text variant="titleSmall" as="h3">
          {alert.title}
        </Text>
        <Text variant="bodySmall" as="p">
          {alert.message}
        </Text>
        {alert.type === "alert" ? (
          <AlertButtons onClose={alert.onClose} closeAlert={startClosing} />
        ) : (
          <ConfirmButtons
            onConfirm={alert.onConfirm}
            onCancel={alert.onCancel}
            closeAlert={startClosing}
          />
        )}
      </div>
    </div>
  );
}

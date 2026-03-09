import { BellIcon } from "./components/BellIcon";
import { CheckCircleIcon } from "./components/CheckCircleIcon";
import { CheckFillIcon } from "./components/CheckFillIcon";
import { CheckIcon } from "./components/CheckIcon";
import { CloseIcon } from "./components/CloseIcon";
import { ErrorFillIcon } from "./components/ErrorFillIcon";
import { InfoCircleIcon } from "./components/InfoCircleIcon";
import { LogoutIcon } from "./components/LogoutIcon";
import { RefreshIcon } from "./components/RefreshIcon";
import { SettingsIcon } from "./components/SettingsIcon";
import { WarningIcon } from "./components/WarningIcon";
import { WarningOutlineIcon } from "./components/WarningOutlineIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  icon:
    | "bell"
    | "check-circle"
    | "check-fill"
    | "check"
    | "close"
    | "error-fill"
    | "info-circle"
    | "logout"
    | "refresh"
    | "settings"
    | "warning"
    | "warning-outline";
}

export function AppIcon({ icon, size = 24, ...rest }: Readonly<Props>) {
  if (icon === "bell") {
    return <BellIcon size={size} {...rest} />;
  }
  if (icon === "check-circle") {
    return <CheckCircleIcon size={size} {...rest} />;
  }
  if (icon === "check-fill") {
    return <CheckFillIcon size={size} {...rest} />;
  }
  if (icon === "check") {
    return <CheckIcon size={size} {...rest} />;
  }
  if (icon === "close") {
    return <CloseIcon size={size} {...rest} />;
  }
  if (icon === "error-fill") {
    return <ErrorFillIcon size={size} {...rest} />;
  }
  if (icon === "info-circle") {
    return <InfoCircleIcon size={size} {...rest} />;
  }
  if (icon === "logout") {
    return <LogoutIcon size={size} {...rest} />;
  }
  if (icon === "refresh") {
    return <RefreshIcon size={size} {...rest} />;
  }
  if (icon === "settings") {
    return <SettingsIcon size={size} {...rest} />;
  }
  if (icon === "warning") {
    return <WarningIcon size={size} {...rest} />;
  }
  if (icon === "warning-outline") {
    return <WarningOutlineIcon size={size} {...rest} />;
  }

  throw new Error(`Unsupported icon type: ${icon}`);
}

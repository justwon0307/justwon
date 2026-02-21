import { BellIcon } from "./components/BellIcon";
import { CheckCircleIcon } from "./components/CheckCircleIcon";
import { CheckFillIcon } from "./components/CheckFillIcon";
import { CheckIcon } from "./components/CheckIcon";
import { CloseIcon } from "./components/CloseIcon";
import { InfoCircleIcon } from "./components/InfoCircleIcon";
import { SettingsIcon } from "./components/SettingsIcon";
import { WarningOutlineIcon } from "./components/WarningOutlineIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  icon:
    | "bell"
    | "check-circle"
    | "check-fill"
    | "check"
    | "close"
    | "info-circle"
    | "settings"
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
  if (icon === "info-circle") {
    return <InfoCircleIcon size={size} {...rest} />;
  }
  if (icon === "warning-outline") {
    return <WarningOutlineIcon size={size} {...rest} />;
  }

  return <SettingsIcon size={size} {...rest} />;
}

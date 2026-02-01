import { CheckFillIcon } from "./components/CheckFillIcon";
import { CheckIcon } from "./components/CheckIcon";
import { CloseIcon } from "./components/CloseIcon";
import { SettingsIcon } from "./components/SettingsIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  icon: "settings" | "close" | "check" | "check-fill";
}

export function AppIcon({ icon, size = 24, ...rest }: Readonly<Props>) {
  if (icon === "check-fill") {
    return <CheckFillIcon size={size} {...rest} />;
  }
  if (icon === "check") {
    return <CheckIcon size={size} {...rest} />;
  }
  if (icon === "close") {
    return <CloseIcon size={size} {...rest} />;
  }

  return <SettingsIcon size={size} {...rest} />;
}

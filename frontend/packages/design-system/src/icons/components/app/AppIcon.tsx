import { SettingsIcon } from "./components/SettingsIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  icon: "settings";
}

export function AppIcon({ icon, size = 24, ...rest }: Readonly<Props>) {
  console.log(icon);

  return <SettingsIcon size={size} {...rest} />;
}

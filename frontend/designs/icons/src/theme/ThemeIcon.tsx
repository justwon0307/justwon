import { CircleHalfFillIcon } from "./components/CircleHalfFillIcon";
import { MoonIcon } from "./components/MoonIcon";
import { SunIcon } from "./components/SunIcon";
import { IconProps } from "@/types";

interface Props extends IconProps {
  theme: "light" | "dark" | "system";
}

export function ThemeIcon({ theme, size = 24, ...rest }: Readonly<Props>) {
  if (theme === "light") return <SunIcon size={size} {...rest} />;
  if (theme === "dark") return <MoonIcon size={size} {...rest} />;
  return <CircleHalfFillIcon size={size} {...rest} />;
}

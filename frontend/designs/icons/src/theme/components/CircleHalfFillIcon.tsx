import type { IconProps } from "../../types";
export function CircleHalfFillIcon({
  size = 24,
  color = "currentColor",
}: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      color={color}
    >
      <path
        fill="currentColor"
        d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M2.5 8A5.506 5.506 0 0 1 8 2.5v11A5.506 5.506 0 0 1 2.5 8"
      />
    </svg>
  );
}

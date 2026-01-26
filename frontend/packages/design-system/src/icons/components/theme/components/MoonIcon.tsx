import type { IconProps } from "../../types";
export function MoonIcon({ size = 24 }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={size}
      height={size}
    >
      <path
        fill="currentColor"
        d="M8 7.871a6 6 0 0 1-1.3-6.538 6.667 6.667 0 1 0 7.839 7.839 6 6 0 0 1-6.539-1.3"
      />
    </svg>
  );
}

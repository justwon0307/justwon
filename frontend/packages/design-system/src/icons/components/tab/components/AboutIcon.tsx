import type { IconProps } from "../../types";
export function AboutIcon({ size = 24, ...props }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.667 6H7.333V4.667h1.334m0 6.666H7.333v-4h1.334m-.667-6a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333"
      />
    </svg>
  );
}

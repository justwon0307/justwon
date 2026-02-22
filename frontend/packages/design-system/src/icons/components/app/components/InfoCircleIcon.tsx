import type { IconProps } from "../../types";
export function InfoCircleIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        d="M8 1.333A6.667 6.667 0 1 0 14.667 8 6.673 6.673 0 0 0 8 1.333m0 12A5.334 5.334 0 1 1 13.333 8 5.34 5.34 0 0 1 8 13.333m0-5.666a.667.667 0 0 0-.667.666v2a.667.667 0 1 0 1.334 0v-2A.667.667 0 0 0 8 7.667M8 5a.833.833 0 1 0 0 1.667A.833.833 0 0 0 8 5"
      />
    </svg>
  );
}

import type { IconProps } from "../../types";
export function RefreshIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        d="M11.767 4.233a5.3 5.3 0 0 0-4.32-1.54C5 2.94 2.987 4.927 2.713 7.373a5.323 5.323 0 0 0 10.094 2.92.668.668 0 0 0-.6-.96.65.65 0 0 0-.587.354 3.996 3.996 0 0 1-4.533 2.206A3.97 3.97 0 0 1 4.1 8.88 4 4 0 0 1 8 4c1.107 0 2.093.46 2.813 1.187L9.807 6.193c-.42.42-.127 1.14.466 1.14h2.394c.366 0 .666-.3.666-.666V4.273a.669.669 0 0 0-1.14-.473z"
      />
    </svg>
  );
}

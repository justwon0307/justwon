import type { IconProps } from "../../types";
export function LogoutIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M9.833 5.333V4A1.333 1.333 0 0 0 8.5 2.667H3.833A1.333 1.333 0 0 0 2.5 4v8a1.333 1.333 0 0 0 1.333 1.333H8.5A1.333 1.333 0 0 0 9.833 12v-1.333M7.5 8h6m0 0L12 6m1.5 2L12 10"
      />
    </svg>
  );
}

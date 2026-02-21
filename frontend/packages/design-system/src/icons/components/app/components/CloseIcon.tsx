import type { IconProps } from "../../types";
export function CloseIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        fillRule="evenodd"
        d="m8 9.415 3.535 3.535a1 1 0 1 0 1.415-1.415L9.413 8l3.536-3.535a1 1 0 0 0-1.414-1.414L8 6.586 4.465 3.051A1 1 0 1 0 3.05 4.464L6.587 8 3.05 11.536a1 1 0 1 0 1.414 1.413z"
        clipRule="evenodd"
      />
    </svg>
  );
}

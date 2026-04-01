import type { IconProps } from "../types";
export function DashboardIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        d="M12 10.5h1V13h-1zM10 8h1v5h-1zm-4.5 5A2.503 2.503 0 0 1 3 10.5h1A1.5 1.5 0 1 0 5.5 9V8a2.5 2.5 0 1 1 0 5"
      />
      <path
        fill="currentColor"
        d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m0 4.5H7V2h7zM6 2v3.5H2V2zM2 14V6.5h12l.001 7.5z"
      />
    </svg>
  );
}

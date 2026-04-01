import type { IconProps } from "../types";
export function MonitorIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        strokeWidth={1.143}
        d="M6.857 12.571 5.714 15.43m3.429-2.858 1.143 2.858m-5.714 0h6.857m3.428-13.143H1.143a.57.57 0 0 0-.571.571V12a.57.57 0 0 0 .571.571h13.714A.57.57 0 0 0 15.43 12V2.857a.57.57 0 0 0-.572-.571"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.143}
        d="m5.143 6-2 1.714 1.714 1.429m6.286-2.857 1.714 1.428-2 1.715M7.143 10l1.714-5.143"
      />
    </svg>
  );
}

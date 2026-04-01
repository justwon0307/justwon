import type { IconProps } from "../types";
export function BrainIcon({ size = 24, ...props }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" clipPath="url(#prefix__a)">
        <path
          strokeLinejoin="round"
          d="M8 3a1.667 1.667 0 0 0-3.333 0 2 2 0 0 0-1.712 3.035 2 2 0 0 0 0 3.929A2 2 0 0 0 4.667 13 1.667 1.667 0 0 0 8 13m0 0a1.667 1.667 0 0 0 3.333 0 2 2 0 0 0 1.712-3.036 2 2 0 0 0 0-3.929A2.001 2.001 0 0 0 11.333 3 1.667 1.667 0 0 0 8 3"
        />
        <path d="M6.991 4.667v1.32M4.667 7h1.368m3.98 0h1.368m-1.368 1.983h1.368m-6.716 0h1.368m.956 1.03v1.32m2.017-1.32v1.32m-.007-6.666v1.32m-2.3 3.992H9.35a.667.667 0 0 0 .666-.667V6.653a.667.667 0 0 0-.666-.666H6.7a.667.667 0 0 0-.666.666v2.659a.667.667 0 0 0 .666.667Z" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

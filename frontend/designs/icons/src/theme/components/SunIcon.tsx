import type { IconProps } from "@/types";
export function SunIcon({
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
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        clipPath="url(#prefix__a)"
      >
        <path d="M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M8 1.333v1.334m0 10.666v1.334M3.287 3.287l.94.94m7.546 7.546.94.94M1.333 8h1.334m10.666 0h1.334m-10.44 3.773-.94.94m9.426-9.426-.94.94" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

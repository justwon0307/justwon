import type { IconProps } from "../../types";
export function WarningOutlineIcon({
  size = 24,
  ...props
}: Readonly<IconProps>) {
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
        d="M8 9.2a.667.667 0 0 1-.667-.667V5.2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 8 9.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.298 10.639a.702.702 0 1 1 1.404 0 .702.702 0 0 1-1.404 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.405 3.095 3.917 7.146c1.008 1.84-.315 4.092-2.405 4.092H4.083c-2.09 0-3.414-2.253-2.405-4.092l3.917-7.147c1.044-1.903 3.766-1.903 4.81 0m-1.203.666a1.368 1.368 0 0 0-2.404 0L2.88 10.907c-.505.92.157 2.046 1.202 2.046h7.835c1.044 0 1.706-1.127 1.202-2.047z"
        clipRule="evenodd"
      />
    </svg>
  );
}

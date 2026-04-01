import type { IconProps } from "../types";
export function DiagnosisIcon({ size = 24, ...props }: Readonly<IconProps>) {
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
        d="M2 10v2a.667.667 0 0 0 .667.667h2.666V10M2 10V7.333M2 10h3.333m0 0V7.333H2m0 0V4a.667.667 0 0 1 .667-.667h10.666A.667.667 0 0 1 14 4v1.327m-2.353 7.454-.58-.959-1.877-.157-1.715-2.838.991-1.89.963 1.592a.902.902 0 1 0 1.544-.933l-.963-1.593h2.09l1.74 2.852-.714 1.723.58.959"
      />
    </svg>
  );
}

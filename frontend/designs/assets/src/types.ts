import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size in pixels (width and height) @default 24 */
  size?: number;
  /** Icon color (CSS color value) @default "#000" */
  color?: string;
}

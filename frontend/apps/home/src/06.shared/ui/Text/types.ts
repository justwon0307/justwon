import { JSX } from "react";

export type TypographyVariant =
  | "titleLarge"
  | "titleSmall"
  | "bodyLarge"
  | "bodySmall";

export type TagOptions = Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
>;

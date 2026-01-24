import { layer } from "@vanilla-extract/css";

// layer는 순서가 중요하다. 뒤에 선언될수록 우선순위가 높아진다.
export const resetLayer = layer("reset");
export const baseLayer = layer("base");
export const variantLayer = layer("variant");

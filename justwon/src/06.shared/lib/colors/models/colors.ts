import { ThemeColorType } from "./types";

export const lightTheme: ThemeColorType = {
  // Semantic
  primary: "#1E3A8A", // Indigo 700
  primaryLight: "#3B82F6", // Indigo 500
  primaryDark: "#1E40AF", // Indigo 800
  onPrimary: "#FFFFFF", // Contrast ≥ 8.5:1
  onPrimaryDisabled: "rgba(255,255,255,0.5)", // Disabled state

  secondary: "#F59E0B", // Amber 500
  onSecondary: "#000000", // Contrast ≥ 7:1

  success: "#22C55E", // Emerald 500
  onSuccess: "#FFFFFF",
  warning: "#FBBF24", // Amber 400
  onWarning: "#000000",
  error: "#EF4444", // Red 500
  onError: "#FFFFFF",

  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  // Background / Surface
  backgroundDefault: "#F9FAFB", // 전체 페이지 백그라운드
  backgroundPaper: "#FFFFFF", // 카드·패널 등
  surfaceElevated: "#FFFFFF", // 약한 섀도우 적용 시

  // Text
  textPrimary: "#111827", // 본문
  textSecondary: "#374151", // 보조 텍스트
  textDisabled: "#6B7280", // 비활성 텍스트

  // State Indicators
  focusOutline: "#3B82F6", // 포커스 링
  divider: "#D1D5DB", // 구분선
};

export const darkTheme: ThemeColorType = {
  // Semantic
  primary: "#818CF8", // Indigo 300
  primaryLight: "#A5B4FC", // Indigo 200
  primaryDark: "#5B21B6", // Indigo 800 (강조용)
  onPrimary: "#000000", // Contrast ≥ 7:1
  onPrimaryDisabled: "rgba(0,0,0,0.5)", // Disabled state

  secondary: "#FCD34D", // Amber 300
  onSecondary: "#000000", // Contrast ≥ 7:1

  success: "#4ADE80", // Emerald 400
  onSuccess: "#000000",
  warning: "#FBBF24", // Amber 400
  onWarning: "#000000",
  error: "#F87171", // Red 400
  onError: "#000000",

  // Neutral (10-step Gray Scale, Dark→Light)
  gray100: "#27272A",
  gray200: "#3F3F46",
  gray300: "#52525B",
  gray400: "#71717A",
  gray500: "#A1A1AA",
  gray600: "#D4D4D8",
  gray700: "#E4E4E7",
  gray800: "#F4F4F5",
  gray900: "#FFFFFF",

  // Background / Surface
  backgroundDefault: "#121212", // 전체 페이지 배경
  backgroundPaper: "#1E1E1E", // 카드·패널 등
  surfaceElevated: "#2A2A2A", // 약한 섀도우 적용 시

  // Text
  textPrimary: "#E4E4E7", // 본문
  textSecondary: "#A1A1AA", // 보조 텍스트
  textDisabled: "#71717A", // 비활성 텍스트

  // State Indicators
  focusOutline: "#A5B4FC", // 포커스 링
  divider: "#3F3F46", // 구분선
};

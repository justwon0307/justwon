import { ThemeColorType } from "./types";

export const lightTheme: ThemeColorType = {
  // Semantic
  primary: "#1E3A8A",
  primaryLight: "#3B82F6",
  primaryDark: "#1E40AF",
  onPrimary: "#FFFFFF",
  onPrimaryDisabled: "rgba(255,255,255,0.5)",

  secondary: "#F59E0B",
  onSecondary: "#000000",

  success: "#22C55E",
  onSuccess: "#FFFFFF",
  warning: "#FBBF24",
  onWarning: "#000000",
  error: "#EF4444",
  onError: "#FFFFFF",

  gray100: "#F3F4F6",
  gray200: "#ECEEF0",
  gray300: "#E5E7EB",
  gray400: "#CCD1D8",
  gray500: "#A6ACB8",
  gray600: "#848B98",
  gray700: "#6B7280",
  gray800: "#4B5563",
  gray900: "#374151",

  // Background / Surface
  backgroundDefault: "#F9FAFB",
  backgroundPaper: "#FFFFFF",
  surfaceElevated: "#FFFFFF",

  // Text
  textPrimary: "#111827",
  textSecondary: "#374151",
  textDisabled: "#6B7280",

  // State Indicators
  focusOutline: "#3B82F6",
  divider: "#D1D5DB",
};

export const darkTheme: ThemeColorType = {
  // Semantic
  primary: "#818CF8",
  primaryLight: "#A5B4FC",
  primaryDark: "#5B21B6",
  onPrimary: "#000000",
  onPrimaryDisabled: "rgba(0,0,0,0.5)",

  secondary: "#FCD34D",
  onSecondary: "#000000",

  success: "#4ADE80",
  onSuccess: "#000000",
  warning: "#FBBF24",
  onWarning: "#000000",
  error: "#F87171",
  onError: "#000000",

  // Background / Surface
  backgroundDefault: "#121212",
  backgroundPaper: "#1E1E1E",
  surfaceElevated: "#2A2A2A",

  // Text
  textPrimary: "#E4E4E7",
  textSecondary: "#A1A1AA",
  textDisabled: "#71717A",

  // State Indicators
  focusOutline: "#A5B4FC",
  divider: "#3F3F46",

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
};

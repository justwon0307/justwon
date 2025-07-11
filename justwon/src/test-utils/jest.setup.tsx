import "@testing-library/jest-dom";

jest.mock("@shared/lib/colors", () => {
  const { ColorContext, ColorContextType, ThemeColorType, lightTheme } =
    jest.requireActual("@shared/lib/colors");

  return {
    useColors: jest.fn(() => ({
      colors: lightTheme,
      isDarkMode: false,
      toggleTheme: jest.fn(),
    })),
    ColorContext: ColorContext,
    ColorContextType: ColorContextType,
    ThemeColorType: ThemeColorType,
    lightTheme: lightTheme,
    darkTheme: lightTheme,
  };
});
jest.mock("@shared/ui/Dividers", () => ({
  VerticalDivider: () => <div>VerticalDivider</div>,
}));
jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
}));

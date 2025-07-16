import "@testing-library/jest-dom";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
  usePathname: jest.fn(() => "/"),
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useServerInsertedHTML: jest.fn(),
}));

jest.mock("@shared/lib/auth", () => {
  const { AuthContext, AuthContextType, UserType, sampleUser } =
    jest.requireActual("@shared/lib/auth");

  return {
    AuthContext,
    AuthContextType,
    UserType,
    sampleUser,
    useAuth: jest.fn(() => ({
      user: null,
      isAuthenticated: false,
      login: jest.fn(),
      logout: jest.fn(),
    })),
  };
});
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
jest.mock("@shared/lib/supabase", () => ({
  createBrowserClient: jest.fn(),
  createServerClient: jest.fn(),
  updateSession: jest.fn(),
}));

jest.mock("@shared/ui/Dividers", () => ({
  Divider: () => <div>Divider</div>,
  VerticalDivider: () => <div>VerticalDivider</div>,
}));
jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
  Logo: ({ name }: { name: string }) => <span>{name}-logo</span>,
}));

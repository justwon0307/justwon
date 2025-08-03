import "@testing-library/jest-dom";

global.fetch = jest.fn();

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
  usePathname: jest.fn(() => "/"),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useServerInsertedHTML: jest.fn(),
}));
jest.mock("@clerk/nextjs", () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SignIn: ({ path }: { path: string }) => <div>SignIn at {path}</div>,
  SignUp: ({ path }: { path: string }) => <div>SignUp at {path}</div>,
  UserButton: () => <div data-testid="user-button">User Button</div>,
}));

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
  Divider: () => <div>Divider</div>,
  VerticalDivider: () => <div>VerticalDivider</div>,
}));
jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
  Logo: () => <span>main-logo</span>,
  LogoHorizontal: () => <span>main-logo-horizontal</span>,
}));
jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
  Logo: () => <span>main-logo</span>,
  LogoHorizontal: () => <span>main-logo-horizontal</span>,
}));
jest.mock("@shared/ui/Sidebar", () => ({
  ExpandableSidebarItem: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SidebarContainer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SidebarErrorWrapper: ({ children }: { children: React.ReactNode }) => (
    <div className="sidebar-error">{children}</div>
  ),
  SidebarTitle: ({ children }: { children: React.ReactNode }) => (
    <h2>{children}</h2>
  ),
}));

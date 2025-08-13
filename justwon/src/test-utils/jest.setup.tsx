import "@testing-library/jest-dom";

global.fetch = jest.fn();

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => <div>{src}</div>,
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
  usePathname: jest.fn().mockReturnValue("/"),
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
  useUser: jest.fn(() => ({
    user: null,
  })),
}));

jest.mock("@shared/lib/auth", () => ({
  getToken: jest.fn().mockReturnValue("mocked-token"),
  isLoggedIn: jest.fn().mockReturnValue(true),
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

jest.mock("@shared/ui/Breadcrumb", () => {
  const { BreadcrumbItemType } = jest.requireActual("@shared/ui/Breadcrumb");

  return {
    BreadcrumbContainer: ({ children }: { children: React.ReactNode }) => (
      <div className="breadcrumb-container">{children}</div>
    ),
    BreadcrumbItem: ({ item }: { item: { label: string } }) => (
      <div className="breadcrumb-item">{item.label}</div>
    ),
    BreadcrumbItemType: BreadcrumbItemType,
  };
});
jest.mock("@shared/ui/Buttons", () => ({
  LinkButton: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));
jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
  Logo: () => <span>main-logo</span>,
  LogoHorizontal: () => <span>main-logo-horizontal</span>,
}));
jest.mock("@shared/ui/Menus", () => ({
  ExpandableMenu: ({
    title,
    onMenuClick,
    children,
  }: {
    title: string;
    onMenuClick: () => void;
    children: React.ReactNode;
  }) => (
    <div>
      <button onClick={onMenuClick} data-testid={`${title}-menu`}>
        {title}
      </button>
      {children}
    </div>
  ),
}));
jest.mock("@shared/ui/Searchbar", () => ({
  SearchButton: () => <button>Search</button>,
}));
jest.mock("@shared/ui/Texts", () => ({
  Callout: ({ text }: { text: string }) => (
    <div className="callout">{text}</div>
  ),
  Title: ({ title, icon }: { title: string; icon: string }) => (
    <h1>
      <span>{icon}-icon</span>
      {title}
    </h1>
  ),
}));

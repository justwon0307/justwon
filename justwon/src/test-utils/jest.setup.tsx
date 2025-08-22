import "@testing-library/jest-dom";

global.fetch = jest.fn();

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => <div>{src}</div>,
}));
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
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

jest.mock("@shared/lib/auth", () => ({
  ...jest.requireActual("@shared/lib/auth"),
  getAuthState: jest.fn(() => ({
    isAuthenticated: false,
    user: null,
    accessToken: null,
  })),
  useUser: jest.fn(() => ({
    id: "test-user-id",
    name: "Test User",
    email: "test@example.com",
  })),
}));
jest.mock("@shared/lib/axios", () => ({
  axiosInstance: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));
jest.mock("@shared/lib/colors", () => {
  const { lightTheme } = jest.requireActual("@shared/lib/colors");
  return {
    ...jest.requireActual("@shared/lib/colors"),
    useColors: jest.fn(() => ({
      colors: lightTheme,
      isDarkMode: false,
      toggleTheme: jest.fn(),
    })),
  };
});
jest.mock("@shared/lib/fetch", () => ({
  fetchWithCache: jest.fn(),
}));
jest.mock("@shared/lib/fonts", () => ({
  geistSans: jest.fn(),
  geistMono: jest.fn(),
}));
jest.mock("@shared/lib/styled-components", () => ({
  ...jest.requireActual("@shared/lib/styled-components"),
  GlobalStyles: () => <div data-testid="global-styles" />,
  StyledComponentsRegistry: ({ children }: { children: React.ReactNode }) => (
    <div className="styled-components-registry">{children}</div>
  ),
}));

jest.mock("@shared/ui/Icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <span>{icon}-icon</span>,
  Logo: () => <span>main-logo</span>,
  LogoHorizontal: () => <span>main-logo-horizontal</span>,
  MediaIcon: ({ name }: { name: string }) => <span>{name}-media-icon</span>,
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
jest.mock("@shared/ui/Skeleton", () => ({
  Skeleton: () => <div data-testid="loading" />,
}));
jest.mock("@shared/ui/Texts", () => ({
  Callout: ({ text }: { text: string }) => (
    <div className="callout">{text}</div>
  ),
  Subtitle: ({ title }: { title: string }) => (
    <h2 className="subtitle">{title}</h2>
  ),
  Title: ({ title, icon }: { title: string; icon: string }) => (
    <h1>
      <span>{icon}-icon</span>
      {title}
    </h1>
  ),
}));

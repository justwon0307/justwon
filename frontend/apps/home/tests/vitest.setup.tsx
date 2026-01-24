import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Google_Sans: () => ({
    className: "google-sans-class",
  }),
}));
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));
vi.mock("next/navigation", () => ({
  __esModule: true,
  default: {},
  usePathname: vi.fn().mockReturnValue("/"),
}));

vi.mock("@justwon/assets", () => ({
  JustwonLogo: () => <div>JustwonLogo</div>,
  JustwonHorizontalLogo: () => <div>JustwonHorizontalLogo</div>,
}));
vi.mock("@justwon/icons", () => ({
  TabIcon: () => <div>TabIcon</div>,
  ThemeIcon: () => <div>ThemeIcon</div>,
}));
vi.mock("@justwon/theme", async () => {
  const actual = await vi.importActual("@justwon/theme");
  return {
    ...actual,
    ThemeScript: () => <div>ThemeScript</div>,
    ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
    useTheme: vi.fn().mockReturnValue({ theme: "light", setTheme: vi.fn() }),
  };
});

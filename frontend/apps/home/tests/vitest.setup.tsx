vi.mock("next/font/google", () => ({
  Google_Sans: () => ({
    className: "google-sans-class",
  }),
}));
vi.mock("next/link", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"a">) => (
    <a href={props.href} className={props.className} {...props}>
      {props.children}
    </a>
  ),
}));
vi.mock("next/navigation", () => ({
  __esModule: true,
  default: {},
  usePathname: vi.fn().mockReturnValue("/"),
}));

vi.mock("@justwon/designs/brand", () => ({
  JustwonLogo: () => <div>JustwonLogo</div>,
  JustwonHorizontalLogo: () => <div>JustwonHorizontalLogo</div>,
}));
vi.mock("@justwon/designs/components", () => ({
  Button: (props: React.ComponentProps<"button">) => <button {...props} />,
  Text: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  Modal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
vi.mock("@justwon/designs/icons", () => ({
  AppIcon: () => <div>AppIcon</div>,
  TabIcon: () => <div>TabIcon</div>,
}));
vi.mock("@justwon/designs/theme", async () => {
  const actual = await vi.importActual("@justwon/designs/theme");
  return {
    ...actual,
    ThemeScript: () => <script>ThemeScript</script>,
    ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
    useTheme: vi.fn().mockReturnValue({ mode: "light", setThemeMode: vi.fn() }),
  };
});

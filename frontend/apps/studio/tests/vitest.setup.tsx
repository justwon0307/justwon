import type { AuthConfigInput } from "@justkits/react-jwt";

vi.mock("../src/routeTree.gen.ts", () => ({
  routeTree: "RouteTree",
}));
vi.mock("@tanstack/react-router", () => ({
  Outlet: () => <div>Outlet</div>,
  RouterProvider: () => <div>RouterProvider</div>,
  createRouter: vi.fn(),
  redirect: vi.fn(),
  useNavigate: vi.fn().mockReturnValue(vi.fn()),
}));
vi.mock("@tanstack/react-router-devtools", () => ({
  TanStackRouterDevtools: () => <div>TanStackRouterDevtools</div>,
}));
vi.mock("@justkits/react-jwt", () => ({
  AuthProvider: ({
    children,
    config,
  }: {
    children: React.ReactNode;
    config: AuthConfigInput;
  }) => (
    <div>
      {children}
      <button
        onClick={config.onSessionSync?.LOGIN_SUCCESS}
        data-testid="login-success-btn"
      >
        Login Success
      </button>
      <button onClick={config.onSessionSync?.LOGOUT} data-testid="logout-btn">
        Logout
      </button>
      <button onClick={config.onRefreshFail} data-testid="refresh-fail-btn">
        Refresh Fail
      </button>
    </div>
  ),
  useAuth: vi.fn().mockReturnValue({
    isAuthenticated: true,
    login: vi.fn(),
    logout: vi.fn(),
  }),
  useUser: vi.fn().mockReturnValue({
    user: { uuid: "1", name: "Test User", avatar_url: "test-avatar-url" },
    refreshUser: vi.fn(),
  }),
}));

vi.mock("@justwon/designs/brand", () => ({
  StudioHorizontalLogo: () => <div>StudioHorizontalLogo</div>,
}));

vi.mock("@justwon/designs/components", () => ({
  Alerter: () => <div>Alerter</div>,
  showAlert: vi.fn(),
  showConfirm: vi.fn(),
  Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} />
  ),
  Form: ({
    buttonLabel,
    buttonClassName,
    ...props
  }: Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    buttonLabel?: string;
    buttonClassName?: string;
    disabled?: boolean;
    errorMsg?: string;
    errorMsgSize?: "sm" | "md" | "lg";
    onSubmit?: () => Promise<void> | void;
  }) => (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit?.();
      }}
    >
      {props.children}
      {buttonLabel && (
        <button
          className={buttonClassName}
          type="submit"
          data-testid="form-submit-button"
        >
          {buttonLabel}
        </button>
      )}
      {props.errorMsg && <div>{props.errorMsg}</div>}
    </form>
  ),
  Modal: () => <div>Modal</div>,
  useModal: vi.fn(),
  Popover: ({
    children,
    trigger,
    title,
    description,
  }: {
    children: React.ReactNode;
    trigger: React.ReactNode;
    title?: string;
    description?: string;
  }) => (
    <div>
      {trigger}
      {title && <div>{title}</div>}
      {description && <div>{description}</div>}
      {children}
    </div>
  ),
  Spinner: () => <div>Loading...</div>,
  Text: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  TextInput: ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  ),
  Toaster: () => <div>Toaster</div>,
  toast: vi.fn(),
  Tooltip: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("@justwon/designs/icons", () => ({
  AppIcon: ({ icon }: { icon: string }) => <div>{icon}</div>,
}));

vi.mock("@justwon/designs/theme", async (importOriginal) => {
  const originalModule =
    await importOriginal<typeof import("@justwon/designs/theme")>();
  return {
    ...originalModule,
    useRotateAnimation: vi.fn().mockReturnValue({
      spinning: false,
      startSpinning: vi.fn(),
      style: {},
    }),
  };
});

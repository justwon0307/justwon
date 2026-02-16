vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn().mockReturnValue(vi.fn()),
}));
vi.mock("@justkits/auth", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useAuth: vi.fn().mockReturnValue({
    isAuthenticated: true,
    setAuthState: vi.fn(),
    clearAuthState: vi.fn(),
    broadcast: vi.fn(),
  }),
}));
vi.mock("@justwon/designs/components", () => ({
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
  Text: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  TextInput: ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  ),
}));

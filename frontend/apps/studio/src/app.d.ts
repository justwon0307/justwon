import { z } from "zod";

import { router } from "@app/router";
import { loginSchema } from "@features/auth/login";
import { type User } from "@entities/user";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@justkits/react-jwt" {
  interface RouterAuthContext {
    context: { auth: { isAuthenticated: boolean } };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LoginCredentials extends z.infer<typeof loginSchema> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface UserType extends User {}
}

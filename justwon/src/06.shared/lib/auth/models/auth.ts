import { UserType } from "./user";

type ActiveAuthState = {
  isAuthenticated: true;
  user: UserType;
  accessToken: string;
};

type InactiveAuthState = {
  isAuthenticated: false;
  user: null;
  accessToken: null;
};

export type AuthStateType = ActiveAuthState | InactiveAuthState;

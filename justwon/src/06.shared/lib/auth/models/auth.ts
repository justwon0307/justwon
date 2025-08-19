import { UserType } from "./user";

type ActiveAuthState = {
  isAuthenticated: true;
  user: UserType;
};

type InactiveAuthState = {
  isAuthenticated: false;
  user: null;
};

export type AuthStateType = ActiveAuthState | InactiveAuthState;

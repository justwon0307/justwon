import { UserType } from "./user";

export type AuthStateType = {
  isAuthenticated: boolean;
  user: UserType | null;
};

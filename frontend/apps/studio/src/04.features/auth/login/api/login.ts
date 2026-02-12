import { useMutation } from "@tanstack/react-query";

import { api, APIError } from "@shared/api";

type LoginRequestPayload = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
  userId: string;
};

async function adminLogin(payload: LoginRequestPayload) {
  const res = await api.post("/login/", payload);

  return res.data;
}

export function useLoginAPI() {
  return useMutation<LoginResponse, APIError, LoginRequestPayload>({
    mutationFn: (data) => adminLogin(data),
  });
}

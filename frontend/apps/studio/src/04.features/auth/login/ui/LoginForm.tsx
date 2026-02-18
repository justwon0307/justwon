import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@justkits/auth";
import { Form, TextInput } from "@justwon/designs/components";

import { loginAPI } from "../api/login";
import { loginSchema } from "../models/schema";
import { useForm } from "@shared/lib/forms";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const { broadcast, setAuthState } = useAuth();
  const { errorMsg, submit, canSubmit } = useForm({
    schema: loginSchema,
    payload: { email, password },
    requestFn: loginAPI,
    onSuccess: (data: string) => {
      setAuthState(data);
      broadcast("LOGIN_SUCCESS");
      navigate({ to: "/editor", replace: true });
    },
  });

  return (
    <Form
      buttonLabel="로그인"
      onSubmit={submit}
      disabled={!canSubmit}
      errorMsg={errorMsg}
    >
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        data-testid="email-input"
      />
      <TextInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        data-testid="password-input"
      />
    </Form>
  );
}

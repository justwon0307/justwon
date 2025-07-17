"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { login } from "../api/login";
import { Form } from "./styles";
import { useAuth } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  toggleMode: () => void;
  returnTo: string;
}

export function AdminLoginForm({ toggleMode, returnTo }: Readonly<Props>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { refresh } = useAuth();
  const router = useRouter();

  const submitForm = (formData: FormData) => {
    startTransition(async () => {
      setError(null);
      const result = await login(formData, { returnTo });

      if (!result.success) {
        setError(result.message);
      } else {
        router.replace(returnTo);
        refresh();
      }
    });
  };

  return (
    <Form action={submitForm}>
      <button
        className="back"
        type="button"
        onClick={toggleMode}
        data-testid="back"
      >
        <AppIcon icon="arrow-left" size={20} />
      </button>
      <h1>관리자 로그인</h1>
      <label htmlFor="email">이메일:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email"
      />
      <label htmlFor="password">비밀번호:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password"
      />
      {error && <p className="error">{error}</p>}
      <div>
        {isPending ? (
          <button className="disabled" disabled>
            로그인 중...
          </button>
        ) : (
          <button className="submit" type="submit" data-testid="submit">
            로그인
          </button>
        )}
      </div>
    </Form>
  );
}

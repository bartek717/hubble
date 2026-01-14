"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";
import { formatSignupMethod, getSignupMethod } from "./signup-methods";

type PasswordAuthFormProps = {
  mode: "sign-in" | "sign-up";
  submitLabel: string;
  redirectPath?: string;
};

export default function PasswordAuthForm({
  mode,
  submitLabel,
  redirectPath,
}: PasswordAuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setStatus("error");
      setErrorMessage("Enter both an email and password.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);

    const methodCheck = await getSignupMethod(email);
    if (methodCheck.error) {
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage(methodCheck.error);
      return;
    }

    if (methodCheck.method && methodCheck.method !== "password") {
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage(
        `This email uses ${formatSignupMethod(methodCheck.method)}. Please sign in with that method.`,
      );
      return;
    }

    if (mode === "sign-up" && methodCheck.method === "password") {
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage("An account already exists. Please sign in instead.");
      return;
    }

    const emailRedirectTo = `${window.location.origin}${redirectPath ?? "/app/explore"}`;
    const { error } =
      mode === "sign-up"
        ? await supabase.auth.signUp({
            email,
            password,
            options: {
              data: { signup_method: "password" },
              emailRedirectTo,
            },
          })
        : await supabase.auth.signInWithPassword({ email, password });

    setIsSubmitting(false);

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-sm text-fg placeholder:text-muted"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder={mode === "sign-up" ? "Create a password" : "Password"}
        className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-sm text-fg placeholder:text-muted"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card disabled:opacity-60"
      >
        {isSubmitting ? "Working…" : submitLabel}
      </button>
      {status === "success" ? (
        <p className="text-xs text-muted">
          {mode === "sign-up"
            ? "Check your inbox to confirm your account."
            : "Signed in successfully."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-red-400">{errorMessage ?? "Unable to sign in."}</p>
      ) : null}
    </form>
  );
}

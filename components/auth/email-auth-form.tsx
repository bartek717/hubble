"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";
import { formatSignupMethod, getSignupMethod } from "./signup-methods";

type EmailAuthFormProps = {
  submitLabel: string;
  mode: "sign-in" | "sign-up";
  redirectPath?: string;
};

export default function EmailAuthForm({ submitLabel, mode, redirectPath }: EmailAuthFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Enter an email to continue.");
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

    if (methodCheck.method && methodCheck.method !== "magic_link") {
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage(
        `This email uses ${formatSignupMethod(methodCheck.method)}. Please sign in with that method.`,
      );
      return;
    }

    if (mode === "sign-up" && methodCheck.method === "magic_link") {
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage("An account already exists. Please sign in instead.");
      return;
    }

    const emailRedirectTo = `${window.location.origin}${redirectPath ?? "/app/explore"}`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo,
        shouldCreateUser: mode === "sign-up",
        data: mode === "sign-up" ? { signup_method: "magic_link" } : undefined,
      },
    });

    setIsSubmitting(false);

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("sent");
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card disabled:opacity-60"
      >
        {isSubmitting ? "Sending code…" : submitLabel}
      </button>
      {status === "sent" ? (
        <p className="text-xs text-muted">Check your inbox for your login code.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-red-400">{errorMessage ?? "Unable to sign in."}</p>
      ) : null}
    </form>
  );
}

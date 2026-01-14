"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";

type EmailAuthFormProps = {
  submitLabel: string;
  redirectPath?: string;
};

export default function EmailAuthForm({ submitLabel, redirectPath }: EmailAuthFormProps) {
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

    const emailRedirectTo = `${window.location.origin}${redirectPath ?? "/app/explore"}`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo },
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
        className="inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card disabled:opacity-60"
      >
        {isSubmitting ? "Sending link…" : submitLabel}
      </button>
      {status === "sent" ? (
        <p className="text-xs text-muted">Check your inbox to finish signing in.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-red-400">{errorMessage ?? "Unable to sign in."}</p>
      ) : null}
    </form>
  );
}

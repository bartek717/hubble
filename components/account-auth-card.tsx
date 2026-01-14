"use client";

import { useState } from "react";
import Card from "./ui/card";
import { supabase } from "../lib/supabase/client";
import { useSupabaseUser } from "../lib/supabase/use-auth";

export default function AccountAuthCard() {
  const { user, isLoading } = useSupabaseUser();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Enter an email to continue.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/app/account`,
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

  const handleSignOut = async () => {
    setIsSubmitting(true);
    await supabase.auth.signOut();
    setIsSubmitting(false);
  };

  return (
    <Card className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Profile</p>
      {isLoading ? (
        <p className="text-sm text-muted">Loading account…</p>
      ) : user ? (
        <>
          <div>
            <h3 className="text-lg font-semibold">Account</h3>
            <p className="text-sm text-muted">{user.email ?? "Signed in"}</p>
            <span className="text-xs text-muted">Role: Member</span>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSubmitting}
            className="mt-2 inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card disabled:opacity-60"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <div>
            <h3 className="text-lg font-semibold">Sign in</h3>
            <p className="text-sm text-muted">
              Use your email to receive a secure sign-in link.
            </p>
          </div>
          <form onSubmit={handleSignIn} className="flex flex-col gap-3">
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
              {isSubmitting ? "Sending link…" : "Email me a login link"}
            </button>
          </form>
          {status === "sent" ? (
            <p className="text-xs text-muted">Check your inbox to finish signing in.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-xs text-red-400">{errorMessage ?? "Unable to sign in."}</p>
          ) : null}
        </>
      )}
    </Card>
  );
}

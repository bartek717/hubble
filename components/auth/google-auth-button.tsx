"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";

type GoogleAuthButtonProps = {
  label: string;
  redirectPath?: string;
};

export default function GoogleAuthButton({ label, redirectPath }: GoogleAuthButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);

    const redirectTo = `${window.location.origin}${redirectPath ?? "/app/explore"}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
      >
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 items-center justify-center"
        >
          <svg viewBox="0 0 48 48" className="h-4 w-4" role="presentation">
            <path
              fill="#EA4335"
              d="M24 9.5c3.2 0 6.1 1.1 8.4 2.9l6.3-6.3C34.9 2.6 29.7 0.5 24 0.5 14.6 0.5 6.4 5.9 2.4 13.7l7.4 5.8C11.6 13.5 17.4 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.7-0.2-3.3-0.5-4.9H24v9.3h12.6c-0.6 2.9-2.3 5.4-4.9 7l7.6 5.8c4.5-4.1 7.2-10.1 7.2-17.2z"
            />
            <path
              fill="#FBBC05"
              d="M9.8 28.5c-0.6-1.7-1-3.4-1-5.2s0.4-3.6 1-5.2l-7.4-5.8C0.9 15.9 0 19.3 0 23.3s0.9 7.4 2.4 10.5l7.4-5.8z"
            />
            <path
              fill="#34A853"
              d="M24 47.5c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.8c-2.1 1.4-4.8 2.2-8.3 2.2-6.6 0-12.4-4-14.2-9.9l-7.4 5.8C6.4 42.1 14.6 47.5 24 47.5z"
            />
          </svg>
        </span>
        {isSubmitting ? "Redirecting…" : label}
      </button>
      {errorMessage ? <p className="text-xs text-red-400">{errorMessage}</p> : null}
    </div>
  );
}

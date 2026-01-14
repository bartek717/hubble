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
        className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card disabled:opacity-60"
      >
        {isSubmitting ? "Redirecting…" : label}
      </button>
      {errorMessage ? <p className="text-xs text-red-400">{errorMessage}</p> : null}
    </div>
  );
}

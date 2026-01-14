"use client";

import { supabase } from "../../lib/supabase/client";

type SignupMethod = "password" | "magic_link" | "google" | "email";

const METHOD_LABELS: Record<SignupMethod, string> = {
  password: "password",
  magic_link: "email login code",
  google: "Google",
  email: "email link",
};

const normalizeMethod = (method: string | null) => {
  if (!method) {
    return null;
  }
  if (method === "email") {
    return "magic_link";
  }
  return method;
};

export const formatSignupMethod = (method: string | null) => {
  const normalized = normalizeMethod(method);
  if (!normalized) {
    return "email link";
  }
  if (normalized in METHOD_LABELS) {
    return METHOD_LABELS[normalized as SignupMethod];
  }
  return normalized;
};

export const getSignupMethod = async (email: string) => {
  const normalizedEmail = email.trim().toLowerCase();
  const { data, error } = await supabase.rpc("get_signup_method", {
    input_email: normalizedEmail,
  });

  if (error) {
    return { method: null, error: "Unable to verify sign-in method. Please try again." };
  }

  return { method: normalizeMethod(data ?? null), error: null };
};

"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./client";

type AuthState = {
  user: User | null;
  isLoading: boolean;
};

export function useSupabaseUser(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!isActive) {
        return;
      }
      if (error) {
        setUser(null);
      } else {
        setUser(data.user ?? null);
      }
      setIsLoading(false);
    };

    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isActive) {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, isLoading };
}

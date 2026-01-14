"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseUser } from "../../lib/supabase/use-auth";

const PUBLIC_APP_PATHS = new Set(["/app/account"]);

export default function AppAuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useSupabaseUser();
  const pathname = usePathname();
  const router = useRouter();

  const isPublicPath = pathname ? PUBLIC_APP_PATHS.has(pathname) : false;

  useEffect(() => {
    if (!isLoading && !user && !isPublicPath) {
      router.replace("/app/account");
    }
  }, [isLoading, user, isPublicPath, router]);

  if (isLoading || (!user && !isPublicPath)) {
    return (
      <div className="mx-auto flex min-h-[40vh] w-full max-w-6xl items-center justify-center px-6 py-12 text-sm text-muted">
        Checking your session…
      </div>
    );
  }

  return <>{children}</>;
}

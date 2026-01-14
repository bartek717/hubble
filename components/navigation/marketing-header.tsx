import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function MarketingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Hubble
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-semibold text-fg/80 hover:text-fg">
            Sign in
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
